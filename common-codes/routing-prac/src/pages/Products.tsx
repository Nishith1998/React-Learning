import { Link } from "react-router-dom"

const PRODUCTS = [
    {
        id: 1,
        name: 'product1'
    },
    {
        id: 2,
        name: 'product2'
    }
]

export const Products = () => {

    return (
        <div>
            {PRODUCTS.map(product => <div>
                <div>{product.name}</div>
                <Link to={`/product-details/${product.id}`}>go to Details</Link>
            </div>)}
        </div>
    )
}