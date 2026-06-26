import Link from "next/link";

export default function Customers(){
    return (
        <main>
            <h1>Welcome to the Customers Page</h1>
            <p>This is the main content of the customers page.</p>
            <Link href="/">Go to Home Page</Link><br></br>
        </main>
    )
}