import Product, {IProduct} from "./Product"

interface IproductListProps {
    products: IProduct[]
}

const ProductList = (props: IproductListProps) => {
    return (
        <div>
            {props.products.map((product, index) => <Product key={index} product={product}/>)}
        </div>
    )
}
export default ProductList