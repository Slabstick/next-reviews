import Link from "next/link";

export default function NavBar() {
  return(
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/"
            className="text-slate-600 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/reviews"
            className="text-slate-600 hover:underline">
            Reviews
          </Link>
        </li>
        <li>
          <Link href="/about"
            className="text-slate-600 hover:underline">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}
