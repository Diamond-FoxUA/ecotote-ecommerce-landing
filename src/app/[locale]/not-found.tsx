import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>
        <span>404</span>Page not found.
      </h1>
      <p>Opps.. this page does not exist.</p>
      <Link href="/">Go Home</Link>
    </div>
  );
}
