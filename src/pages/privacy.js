import Link from "next/link";
import Skeleton from "../components/skeleton";

const content = (
  <>
    <div className="text-left xl:px-32">
      <p>
        This site uses <Link href="https://matomo.org/">Matomo</Link> for
        analytics purposes.
      </p>
      <br />
      <p>
        Matomo is an open source, privacy first analytics service and has been
        configured to anonymise your data. It can be opted out of using the form
        below.
      </p>
      <br />
      <p>
        Alternatively, you may use a version of the site without JavaScript or
        analytics <Link href="lite.html">here</Link>.
      </p>
      <br />
      <iframe
        className="opt-out"
        src="https://matomo.callum.zone/index.php?module=CoreAdminHome&action=optOut&language=en&backgroundColor=&fontColor=&fontSize=1.125rem&fontFamily=ui-sans-serif%2C%20system-ui%2C%20-apple-system%2C%20BlinkMacSystemFont%2C%20%22Segoe%20UI%22%2C%20Roboto%2C%20%22Helvetica%20Neue%22%2C%20Arial%2C%20%22Noto%20Sans%22%2C%20sans-serif%2C%20%22Apple%20Color%20Emoji%22%2C%20%22Segoe%20UI%20Emoji%22%2C%20%22Segoe%20UI%20Symbol%22%2C%20%22Noto%20Color%20Emoji%22"
      ></iframe>
    </div>
  </>
);

export default function Privacy() {
  return <Skeleton content={content} />;
}
