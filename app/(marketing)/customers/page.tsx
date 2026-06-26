import Link from "next/link";

export default function Customers(){
    return (
        <main>
            <h1>Welcome to the Customers Page</h1>
            <p>This is the main content of the customers page.</p>
            <Link href="/customers/1"><h3>Customer 1</h3></Link>
            <Link href="/customers/2"><h3>Customer 2</h3></Link>
            <Link href="/customers/3"><h3>Customer 3</h3></Link>

            <Link href="/">Go to Home Page</Link><br></br>
        </main>
    )
}