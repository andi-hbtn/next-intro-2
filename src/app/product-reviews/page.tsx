import { Suspense } from "react";
import Product from "@/components/product";
import Reviews from "@/components/reviews";

export default function ProductReviews() {
    return (
        <div>
            <h1>Product Review Page</h1>


            <Suspense fallback={<p> Loading product details</p>}>
                <Product />
            </Suspense>

            <Suspense fallback={<p> Loading product details</p>}>
                <Reviews />
            </Suspense>
        </div>
    )
}