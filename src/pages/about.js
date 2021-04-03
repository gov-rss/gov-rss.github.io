import Link from "next/link";
import Header from "../components/header";
import Skeleton from "../components/skeleton";

const copy = (
  <>
    <div class="text-left xl:px-32">
      <p>
        This site contains a collection of RSS feeds I created to make it easier
        to keep up to date with our state governments. I like reading my news
        through RSS readers, but I noticed most state governments (NT & Jodi
        McKay excepted) didn't provide feeds for their announcements.
      </p>
      <br />
      <p>
        Pull requests can be made to the{" "}
        <Link href="http://github.com/callumskeet/gov-rss">repository</Link> if
        there are additional sources you would like to see hosted here.
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
      <Header></Header>
      <Skeleton content={copy}></Skeleton>
    </>
  );
}
