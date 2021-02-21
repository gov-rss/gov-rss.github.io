import Link from "next/link";
import Head from "next/head";
import FeedLink from "../components/feed-link";

export default function Home() {
  return (
    <div className="min-h-screen py-2 bg-yellow-100">
      <Head>
        <title>Gov.rss</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="divide-y-8 divide-orange-200">
        <div className="flex flex-col items-center justify-center flex-1 px-20 text-center h-80 bg-pattern">
          <h1 className="md:text-9xl text-7xl font-bold hover:text-blue-800 bg-orange-400 hover:bg-blue-50 cursor-default">
            gov+rss
          </h1>
        </div>
        <div className="items-center justify-center text-center px-10 md:px-40 py-10">
          <ul>
            <li>
              <FeedLink
                link="/feed/vic-gov.rss"
                text="State Government of Victoria"
              />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
