export default async function ReviewPage({
    params,
}: {
    params: Promise<{productId: string, reviewId: string}>
}) {
    const { productId } = await params;
    const { reviewId } = await params;
    return (
        <main>
            <h1>Welcome to the Review page of {reviewId} of product {productId}</h1>
            <p>This is the main content of the review page.</p>
        </main>
    )
}