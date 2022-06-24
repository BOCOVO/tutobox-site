import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      wrapperClassName='mx-2'
      title={`TutoBox | User Onboarding Library`}
      description="Implement guides on your application to guide your users step by step in using your product.">
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
