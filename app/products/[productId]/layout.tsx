export default function ProductLayout({
    children, 
}:{
    children:React.ReactNode
}){
    return (
        <main>
            <h1>Welcome to the Product Layout</h1>
            <p>This is the main content of the product layout.</p>
            {children}
        </main>
    )
}