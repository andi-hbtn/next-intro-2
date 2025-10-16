
export async function generateStaticParams() {
    return [
        { id: "1" },
        { id: "2" },
        { id: "3" }
    ]
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {


    const { id } = await params;
    return (
        <>
            <h2>Product {id} details rendered at {new Date().toLocaleTimeString()}</h2>
        </>
    )
}