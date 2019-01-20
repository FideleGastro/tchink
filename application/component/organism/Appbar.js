import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Home from '@material-ui/icons/Home';
import { Store } from '../../src/context/store';
import Link from 'next/link'

const styles = theme => ({
    text: {
        paddingTop: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing.unit * 2,
    },
    subHeader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: '#f4f4f4',
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
        background: '#9c27b0',
    },
    icon: {
        color: '#9c27b0',
    },
});

class Appbar extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <a href='/'>
                            <IconButton aria-label="Home">
                                <Home className={classes.icon} />
                                {/* test :
                            <Store.Consumer>
                                {value => value.logged}
                            </Store.Consumer> */}

                            </IconButton>
                        </a>
                        <a href='/bar'>
                            <Fab aria-label="Search" className={classes.fabButton}>
                                <SearchIcon />
                            </Fab>
                        </a>
                        <div>
                            <IconButton aria-label="Account">
                                <a href='/profile'><AccountCircle className={classes.icon} /></a>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Appbar);
