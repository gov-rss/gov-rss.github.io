import Link from "next/link";
import Skeleton from "../components/skeleton";

const copy = (
  <>
    <div className="text-left xl:px-32">
      <p>
        This site contains a collection of RSS feeds I created to make it easier
        to keep up to date with our state governments. I like reading my news
        through RSS readers, but I noticed most state governments & opposition
        (ACT, NT & Jodi McKay excepted) didn't provide feeds for their
        announcements.
      </p>
      <br />
      <p>
        Pull requests can be made to the{" "}
        <Link href="http://github.com/gov-rss/scrape">repository</Link> if there
        are additional sources you would like to see hosted here.
      </p>
      <br />
      <p>
        Built with <Link href="https://nextjs.org">Next.js</Link> and{" "}
        <Link href="https://tailwindcss.com">Tailwind CSS</Link>.
      </p>
    </div>
    <br />
  </>
);

export default function About() {
  return (
    <>
      <Skeleton content={copy}></Skeleton>
    </>
  );
}
