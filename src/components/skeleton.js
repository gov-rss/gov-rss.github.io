import Link from "next/link";

function Skeleton(props) {
  const content = props.content;
  return (
    <main className="container min-h-screen pt-4 pb-10 md:px-32 xl:px-64 text-center">
      <h1 className="text-6xl md:text-7xl font-bold text-light-blue-900 hover:text-blue-800 bg-green-300 hover:bg-blue-50 cursor-default w-60 md:w-72">
        gov+rss
      </h1>
      <br />
      <div className="flex justify-center space-x-2">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>⬩</div>
        <div>
          <Link href="/about">About</Link>
        </div>
        <div>⬩</div>
        <div>
          <Link href="https://github.com/callumskeet/gov-scrape">
            Contribute
          </Link>
        </div>
      </div>
      <br />
      <br />
      {content}
    </main>
  );
}

export default Skeleton;
