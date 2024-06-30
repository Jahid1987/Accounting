import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="py-2 px-3 bg-white shadow-md rounded-lg">
        Return Home
      </Link>
    </div>
  );
}
