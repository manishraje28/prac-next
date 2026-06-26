import Link from "next/link"

export default async function Article({ params, searchParams }: {
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang?: 'en' | 'fr' | 'es' }>
}) {
    const { articleId } = await params;
    const { lang } = await searchParams;
    return (
        <div>


            <div>
                <h1>Welcome to the Article page {articleId}</h1>
                <p>This is the main content of the article page.</p>
                <p>Language: {lang}</p>
            </div>
            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link><br></br>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link><br></br>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            </div>
        </div>
    )
}  