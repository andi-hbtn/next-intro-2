import fs from "fs";
import { ServerComponentTwo } from "@/components/server-component-two";
import { ClientComponentOne } from "./client-component-one";

export const ServerComponentOne = () => {

    fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
    return (
        <>
            <h1>server-component-one</h1>
            {/* <ServerComponentTwo /> */}

            <ClientComponentOne />
        </>
    )
}