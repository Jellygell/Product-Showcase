import Navigation from './Navigation';
import Head from 'next/head';

const Layout = ({ children, title = 'Product Showcase' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Product showcase using Fake Store API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;