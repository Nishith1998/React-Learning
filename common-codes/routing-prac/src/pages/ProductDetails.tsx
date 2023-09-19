import { useParams } from "react-router-dom";

export const ProductDetails = () => {
    const params = useParams();
    const pId = params.productId;
    return (
        <div>
            Product details for product - ${pId}
        </div>
    )
}