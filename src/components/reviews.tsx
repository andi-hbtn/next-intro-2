export default async function Reviews() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return (
        <div>
            <h1>Review Page</h1>
        </div>
    )
}