import Head from "next/head";
import FeedList from "../components/feed-components";
import { useState } from "react";

export default function Home() {
  const [region, setRegion] = useState("all");
  let feedProps = {
    vic: [
      {
        title: "Victorian premier",
        rss: "/feed/vic-prem.rss",
        source: "https://www.premier.vic.gov.au/media-centre"
      }
    ],
    nsw: [
      {
        title: "NSW Government",
        rss: "/feed/nsw-gov.rss",
        source: "https://www.nsw.gov.au/news"
      },
      {
        title: "NSW Premier",
        rss: "/feed/nsw-prem.rss",
        source: "https://www.nsw.gov.au/media-releases"
      }
    ]
  };

  let feedList;
  if (region === "all") {
    let tmpFeedProps = [].concat(...Object.values(feedProps));
    feedList = <FeedList feedProps={tmpFeedProps} />;
  } else {
    feedList = <FeedList feedProps={feedProps[region]} />;
  }

  return (
    <div className="min-h-screen py-2 bg-yellow-100">
      <Head>
        <title>gov+rss</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="divide-y-8 divide-orange-200">
        <div className="flex flex-col items-center justify-center flex-1 px-20 text-center h-52 md:h-80 bg-pattern">
          <h1 className="md:text-9xl text-7xl font-bold hover:text-blue-800 bg-orange-400 hover:bg-blue-50 cursor-default">
            gov+rss
          </h1>
        </div>
        <div className="items-center justify-between text-center px-10 md:px-64 lg:px-96 py-10">
          <div>
            <h2 className="text-4xl font-mono">Feeds</h2>
            <select
              className="border-2 border-black"
              value={region}
              onChange={event => setRegion(event.target.value)}
            >
              <option value="all">All</option>
              <option value="vic">VIC</option>
              <option value="nsw">NSW</option>
            </select>
          </div>
          <br />
          {feedList}
          {/* <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
            <li>
              <FeedLink
                title="Victorian Premier"
                rss="/feed/vic-prem.rss"
                source="https://www.premier.vic.gov.au/media-centre"
              />
            </li>
            <li>
              <FeedLink
                title="NSW Government"
                rss="/feed/nsw-gov.rss"
                source="https://www.nsw.gov.au/news"
              />
            </li>
            <li>
              <FeedLink
                title="NSW Premier"
                rss="/feed/nsw-prem.rss"
                source="https://www.nsw.gov.au/media-releases"
              />
            </li>
          </ul> */}
        </div>
      </main>
    </div>
  );
}
