import Skeleton from "../../components/skeleton";
import rssData from "../../data/rss.json";

function RssItem({ title, rss, source }) {
  return (
    <li className="grid menu-item">
      <dl className="self-center p-4">
        <div>
          <dt className="sr-only">Feed name</dt>
          <dd className="font-bold" aria-label={title} aria-required="true">
            {title}
          </dd>
        </div>
        <div>
          <dd>
            ◈
            <span className="px-1">
              <a href={rss}>Subscribe</a>
            </span>
            ◈
          </dd>
        </div>
        <div>
          <dd>
            <a href={source}>Source</a>
          </dd>
        </div>
      </dl>
    </li>
  );
}

function RssList({ feedProps: rssProps }) {
  const listItems = rssProps.map((rssItemProps) => {
    return (
      <RssItem
        title={rssItemProps.title}
        rss={rssItemProps.rss}
        source={rssItemProps.source}
        key={rssItemProps.title}
      />
    );
  });
  var classes = listItems.length > 1 ? "lg:grid-cols-2 xl:w-4/5" : "lg:w-1/2";
  return <ul className={classes}>{listItems}</ul>;
}

function RssPage({ rssRegionData }) {
  const content = <RssList feedProps={rssRegionData} />;
  return <Skeleton content={content} />;
}

export function getStaticPaths() {
  const paths = Object.keys(rssData).map((region) => ({
    params: { region: region },
  }));

  return { paths, fallback: false };
}

export function getStaticProps({ params }) {
  const region = params.region;
  const rssRegionData = rssData[region];
  return {
    props: {
      rssRegionData,
    },
  };
}

export default RssPage;
