import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/"
            className="text-accent hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/reviews"
            className="text-accent hover:underline">
            Reviews
          </Link>
        </li>
        <li>
          <Link href="/about"
            className="text-accent hover:underline">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}
