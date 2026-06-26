export default async function DocsPage({
    params,
}: {
    params: Promise<{ slug?: string[] }>
}) {

    const { slug } = await params;
    if (!slug) {
        return <h1>Docs Home</h1>;
    }
    if (slug.length === 1) {
        return (
            <main>
                <h1>Welcome to the Docs page of {slug[0]}</h1>
                <p>This is the main content of the docs page.</p>
            </main>
        )
    } else if (slug.length === 2) {
        return (
            <main>
                <h1>Welcome to the Docs page of {slug[0]} and {slug[1]}</h1>
                <p>This is the main content of the docs page.</p>
            </main>
        )
    }
    return (
        <main>
            <h1>Welcome to the Docs page of {slug.join(' / ')}</h1>
            <p>This is the main content of the docs page.</p>
        </main>
    )
}

