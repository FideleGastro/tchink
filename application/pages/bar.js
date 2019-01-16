import React, { Component } from 'react'
import AppBar from './../component/organism/Appbar';
import HomepageHeaderBlock from './../component/organism/HomepageHeaderBlock';

import ListBar from './../component/organism/BarpageList';
import Layout from './../component/template/LayoutFullPage';
import HomepageFooterBlock from './../component/organism/HomepageFooterBlock';
import HomepageNetworkBlock from './../component/organism/HomepageNetworkBlock';

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
                    <ListBar />
                    <HomepageNetworkBlock />
                    <HomepageFooterBlock />
                </Layout>
            </>
        )
    }
}

