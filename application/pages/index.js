
// --- Post bootstrap -----
import React from 'react';
import AppBar from './../component/organism/Appbar';
import HomepageInscriptionBlock from './../component/organism/HomepageInscriptionBlock';
import HomepageStepperBlock from './../component/organism/HomepageStepperBlock';
import Layout from './../component/template/LayoutFullPage';

function Index() {
  return (
    <>
      <Layout>
        <AppBar />
        <HomepageInscriptionBlock />
        <HomepageStepperBlock />
      </Layout>
    </>
  );
}

export default Index;