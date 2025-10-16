import { cookies } from "next/headers";

export default async function About() {

    // const cookieStore = await cookies();
    // const theme = cookieStore.get("theme");

    // console.log(theme);

    console.log("server about page")
    return (
        <>
            <h2>About Page {new Date().toLocaleTimeString()}</h2>
        </>
    )
}