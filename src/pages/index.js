import Link from "next/link";
import Header from "../components/header";
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
            <Link
              href="/[region]"
              as={process.env.BACKEND_URL + region}
              key={region}
            >
              <li className="font-bold cursor-pointer uppercase">
                <div className="relative w-14">
                  <img
                    src={process.env.BACKEND_URL + "flags/" + flags[region]}
                    className="absolute inset-y-0 left-0 top-0 flag"
                  />
                </div>
                {region}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );

  const content = <>{feedList}</>;

  return (
    <>
      <Header />
      <Skeleton content={feedList} />
    </>
  );
}
