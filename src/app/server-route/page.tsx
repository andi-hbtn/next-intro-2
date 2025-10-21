import { serverSideFunction } from "@/utils/server-utils";
import { clientSideFunction } from "@/utils/client-utils";

export default function ServerRoutePage() {

    const result = serverSideFunction();
    // const fromClient = clientSideFunction();

    return (
        <div>
            <h1>Server Page {result}</h1>
            <h4>{fromClient}</h4>
        </div>
    )
}