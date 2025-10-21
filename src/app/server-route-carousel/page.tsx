import { ImageSlider } from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRouteCarousel() {
    const result = serverSideFunction();

    return (
        <div>
            <h1>Server route {result}</h1>
            <ImageSlider />
        </div>
    )
}