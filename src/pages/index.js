import Link from "next/link";
import Image from "next/image";
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
            <li key={region}>
              <Link
                href={process.env.BACKEND_URL + "/[region]"}
                as={process.env.BACKEND_URL + "/" + region}
              >
                <a>
                  <div className="font-bold cursor-pointer uppercase menu-item grid grid-cols-3">
                    <div className="w-14 place-self-left">
                      {/*className="relative w-14 h-0">*/}
                      <img
                        src={
                          process.env.BACKEND_URL + "/flags/" + flags[region]
                        }
                        className="flag"
                        // className="absolute inset-y-0 left-0 top-0 flag"
                        alt={region.toUpperCase() + " state flag"}
                      />
                    </div>
                    <div className="place-self-center">{region}</div>
                  </div>
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
