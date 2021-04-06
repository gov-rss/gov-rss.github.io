import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <title>gov+rss</title>
      <link rel="icon" href={process.env.BACKEND_URL + "/favicon.svg"} />
      <script src="matomo.js"></script>
    </Head>
  );
}
