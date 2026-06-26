export default async function productPage({
    params,
}: {
    params: Promise<{ productId: string }>
}) {
    const { productId } = await params;
    return (
        <main>
            <h1>Welcome to the Product page {productId}</h1>
            <p>This is the main content of the product page.</p>
        </main>
    )
}