import Link from "next/link";

function Skeleton({ content }) {
  return (
    <main className="container min-h-screen pt-4 pb-10 md:px-32 xl:px-64 text-center relative">
      <h1 className="text-6xl md:text-7xl font-bold text-light-blue-900 bg-green-300 cursor-default w-60 md:w-72">
        gov+rss
      </h1>
      <br />
      <div className="flex justify-center space-x-2">
        <div>
          <Link href="/" as={process.env.BACKEND_URL + "/"}>
            Home
          </Link>
        </div>
        <div>⬩</div>
        <div>
          <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
            About
          </Link>
        </div>
        <div>⬩</div>
        <Link href="/privacy" as={process.env.BACKEND_URL + "/privacy"}>
          Privacy
        </Link>
        <div>⬩</div>
        <div>
          <Link href="https://github.com/gov-rss/scrape">Contribute</Link>
        </div>
      </div>
      <br />
      {content}
      <br />
      <footer>
        <div className="absolute inset-x-0 bottom-5">
          Website copyright (c) 2021{" "}
          <Link href="https://github.com/callumskeet">Callum Skeet</Link> under
          the{" "}
          <Link href="https://github.com/gov-rss/gov-rss.github.io/blob/master/LICENSE">
            MIT license
          </Link>
        </div>
        <br />
      </footer>
    </main>
  );
}

export default Skeleton;
