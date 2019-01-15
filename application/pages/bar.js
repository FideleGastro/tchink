import React, { Component } from 'react'
import AppBar from './../component/organism/Appbar';
import HomepageHeaderBlock from './../component/organism/HomepageHeaderBlock';

import SigninForm from './../component/organism/SigninForm';
import Layout from './../component/template/LayoutFullPage';

export default class homepage extends Component {
    static getInitialProps({ query: { id } }) {
        return { id }
    }
    render() {
        return (
            <>
                <Layout>
                    <AppBar />
                    <HomepageHeaderBlock />
                    <>test : {this.props.id}</>
                    {/* <SigninForm /> */}
                </Layout>
            </>
        )
    }
}

