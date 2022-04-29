import Head from "next/head";
import Image from "next/image";
import Nav from "./Navbar";

const name = "MicrometreUK";
export const siteTitle = "Electrical specialists";

export default function Layout({ children }) {
  return (
    <>

<Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Electrical specialists serving surrey and surrounding areas."
        />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="electricalsurrey Ltd"
          content={siteTitle}
        />
        <title>{siteTitle}</title>
      </Head>


      <div>
        <div>
          <Image src="/images/darkbg.jpg" layout="fill" alt="layout image" />
        </div>
        <Nav />
      </div>
      {children}
    </>
  );
}
