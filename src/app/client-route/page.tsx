"use client"
import { clientSideFunction } from "@/utils/client-utils";
import { useTheme } from "@/components/theme-provider";

export default function App() {
    const theme = useTheme();
    const result = clientSideFunction();

    return (
        <div>
            <h1>{result}</h1>
            <h1 style={{ color: theme.colors.primary }}>client router page</h1>
        </div>
    );
}
