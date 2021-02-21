import Link from 'next/link'
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
    </div>
  )
}
