import Link from "next/link";
import Heading from "@/components/Heading";

export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <p>Here you'll find all the reviews:</p>
      <br />
      <ul>
        <li>
          <Link
            href="reviews/hollow-knight"
            className="text-accent hover:underline"
          >
            Hollow Knight
          </Link>
        </li>
        <li>
          <Link
            href="reviews/stardew-valley"
            className="text-accent hover:underline"
          >
            Stardew Valley
          </Link>
        </li>

        <li>
          <Link
            href="reviews/hellblade"
            className="text-accent hover:underline"
          >
            Hellblade
          </Link>
        </li>
      </ul>
    </>
  );
}
