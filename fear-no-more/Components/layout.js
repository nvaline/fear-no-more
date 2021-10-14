import Head from 'next/head';
import AuthContext from './Context/AuthContext.js';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Nav/Header';
import Footer from './Nav/Footer';
import NavBar from './Nav/NavBar';
import TopHeader from './Nav/TopHeader';
import BottomFooter from './Nav/BottomFooter';

export const siteTitle = "Fear No More";

const Layout = ({ children, home }) => {
  return (
    <AuthContext.Consumer>
      {({username}) => {
        return (
          <div>
            <Head>
              <meta
                name="Fear No More"
                content="Helping people in need"
              />
              <meta name="og:title" content={ siteTitle } />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="viewport" content="width=device-width, initial-scale=0.5" />
            </Head>
            <NavBar username={username}/>
            {/* <TopHeader /> */}
            <Header />
            <main>
              { children }
            </main>
            <Footer />
            <BottomFooter />
          </div>
        )
      }}
    </AuthContext.Consumer>
  )
}

export default Layout;