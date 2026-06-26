import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of the home page.</p>
      <Link href="/customers">Go to Customers Page</Link><br></br>
      <Link href="/revenue">Go to Revenue Page</Link>
    </main>
  );
}