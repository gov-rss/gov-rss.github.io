import React from "react";
import Head from "next/head";
import "../styles/styles.css";

function GovRSS({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>gov+rss</title>
        <link rel="icon" href={process.env.BACKEND_URL + "/favicon.svg"} />
        <script src="matomo.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default GovRSS;
