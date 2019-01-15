const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')
const compression = require('compression')
const bodyParser = require('body-parser')
const axios = require('axios');

const { parse } = require('url')
const { join } = require('path')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
    length: function(n, key) {
        return n.toString().length + key.toString().length
    },
    max: 100 * 1000 * 1000, // 100MB cache soft limit
    maxAge: 1 // 1hour 1000 * 60 * 60
})

app.prepare().then(() => {
    const server = express()

    server.use(compression())
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    // call API

    async function test() {
        try {
            let res = await axios.get('http://localhost:4000/api/users')

        } catch (e) {
            console.log(e.response) // undefined
        }
        return res.data
    }

    // Route app

    // server.get('/blog/:id', (req, res) => {
    //     const queryParams = { id: req.params.id }
    //     renderAndCache(req, res, '/blog', queryParams)
    // })

    server.get('/', (req, res) => {
        const queryParams = { id: 'home', toto: 'toto' }
        console.log('data:', test());
        renderAndCache(req, res, '/', queryParams)
    })

    server.get('/bar/:id', (req, res) => {
        const queryParams = { id: req.params.id || 0 }
        console.log('bar');
        renderAndCache(req, res, '/', queryParams)
    })

    server.get('/signin/', (req, res) => {
        const queryParams = { id: 'dfregg', toto: 'toto' }
        renderAndCache(req, res, '/signin', queryParams)
    })

    // Middleware

    server.post('/signin/connection', (req, res) => {
        console.log('form connection: ', req.body);
        res.status(200).send('connect');
    })

    server.post('/signin/inscription', (req, res) => {
        console.log('form inscription: ', req.body);
        res.status(200).send('connect');
    })

    server.get('/clear/', (req, res) => {
        console.log(`clear`)
        ssrCache.reset()
        res.send('clear')
    })

    server.get('*', (req, res) => {
        const parsedUrl = parse(req.url, true)
        const { pathname } = parsedUrl

        if (pathname === '/service-worker.js') {
            const filePath = join(__dirname, '.next', pathname)
            app.serveStatic(req, res, filePath)
        } else {
            return handle(req, res)
        }
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
    return `${req.url}`
}

async function renderAndCache(req, res, pagePath, queryParams) {
    const key = getCacheKey(req)

    // If we have a page in the cache, let's serve it
    if (ssrCache.has(key)) {
        res.setHeader('x-cache', 'HIT')
        res.send(ssrCache.get(key))
        return
    }

    try {
        // If not let's render the page into HTML
        const html = await app.renderToHTML(req, res, pagePath, queryParams)

        // Something is wrong with the request, let's skip the cache
        if (res.statusCode !== 200) {
            res.send(html)
            return
        }

        // Let's cache this page
        ssrCache.set(key, html)

        res.setHeader('x-cache', 'MISS')
        res.send(html)
    } catch (err) {
        app.renderError(err, req, res, pagePath, queryParams)
    }
}
