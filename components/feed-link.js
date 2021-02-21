export default function FeedLink(props) {
  return (
    <div className="relative py-10">
      <a href={props.link}>
        <div className="absolute inset-0 bg-white hover:bg-orange-400 hover:text-pink-900 hover:border-pink-900 border-2 border-black shadow-offset-purple">
          <h3 className="font-bold font-mono text-lg relative inset-x-0 inset-y-1/3">
            {props.text}
          </h3>
        </div>
      </a>
    </div>
  );
}
