import Link from "next/link";
import Skeleton from "../components/skeleton";

export default function Home() {
  const feedProps = require("../data/rss.json");

  const flags = {
    nsw: "Flag_of_New_South_Wales.svg",
    qld: "Flag_of_Queensland.svg",
    sa: "Flag_of_South_Australia.svg",
    tas: "Flag_of_Tasmania.svg",
    vic: "Flag_of_Victoria_(Australia).svg",
    wa: "Flag_of_Western_Australia.svg",
    act: "Flag_of_the_Australian_Capital_Territory.svg",
    nt: "Flag_of_the_Northern_Territory.svg",
  };

  const feedList = (
    <>
      <ul className="lg:grid-cols-2 xl:w-4/5">
        {Object.keys(feedProps).map((region) => {
          return (
            <li className="menu-item" key={region}>
              <Link
                href={process.env.BACKEND_URL + "/[region]"}
                as={process.env.BACKEND_URL + "/" + region}
              >
                <a className="menu-grid hover:menu-border">
                  <img
                    src={process.env.BACKEND_URL + "/flags/" + flags[region]}
                    className="flag place-self-left"
                    width="56"
                    height="29"
                    alt={region.toUpperCase() + " state flag"}
                  />

                  <span className="place-self-center font-bold uppercase">
                    {region}
                  </span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );

  return <Skeleton content={feedList} />;
}
