"use client";
import {usePathname} from "next/navigation";

export default function NotFound(){
    const pathname = usePathname();
    const productId = pathname.split('/')[2];
    const reviewId = pathname.split('/')[4];
    return (
        <main>
            <h1>Review not found</h1>
            <p>The review with ID {reviewId} for product {productId} does not exist.</p>
        </main>
    )
}