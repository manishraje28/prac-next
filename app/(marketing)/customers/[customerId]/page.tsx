export default async function Customer({
    params,
}:{
    params: Promise<{ customerId: string }>
    
}){
    const { customerId } = await params;
    return (
        <main>
            <h1>Welcome to the Customer page {customerId}</h1>
            <p>This is the main content of the customer page.</p>
        </main>
    )   
}