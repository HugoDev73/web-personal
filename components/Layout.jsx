import Head from "next/head";
import Header from "./headddd";
import Navigation from "./Navigation";

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>Hugo Mendoza - {page}</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
          integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
          crossorigin="anonymous"
        />
      </Head>
      <Navigation />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
