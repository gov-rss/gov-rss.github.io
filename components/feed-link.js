export default function FeedLink(props) {
  return (
    <div className="group block p-4 bg-white border-2 border-black shadow-offset-purple hover:shadow-offset-orange">
      <dl className="grid sm:block lg:grid xl:block grid-cols-1 grid-rows-3 items-center">
        <div>
          <dt className="sr-only">Feed name</dt>
          <dd
            className="font-bold font-mono text-lg"
            aria-label={props.title}
            aria-required="true"
          >
            {props.title}
          </dd>
        </div>
        <div>
          <dd className="font-mono text-lg">
            ◈
            <span className="px-1">
              <a href={props.rss}>Subscribe</a>
            </span>
            ◈
          </dd>
        </div>
        <div>
          <dd className="font-mono text-lg">
            <a href={props.source}>Source</a>
          </dd>
        </div>
      </dl>
    </div>
  );
}
