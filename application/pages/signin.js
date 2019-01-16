import React, { Component } from 'react'
import AppBar from './../component/organism/Appbar';
import HomepageHeaderBlock from './../component/organism/HomepageHeaderBlock';

import SigninForm from './../component/organism/SigninForm';
import Layout from './../component/template/LayoutFullPage';

export default class homepage extends Component {
    static getInitialProps({ query: { id, toto } }) {
        return { id, toto }
    }
    render() {
        return (
            <>
                <Layout>
                    <AppBar />
                    <HomepageHeaderBlock />
                    <>{this.props.toto} test : {this.props.id}</>
                    <SigninForm />
                </Layout>
            </>
        )
    }
}
