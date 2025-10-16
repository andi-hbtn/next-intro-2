"use client"
import { useState } from "react"

export default function Dashboard() {
    console.log("client component")

    const [name, setName] = useState("");

    return (
        <>
            <h2>Dashboard Page</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ backgroundColor: "white" }} />
            <p>Hello {name}</p>
        </>
    )
}