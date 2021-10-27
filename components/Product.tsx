import Image from "next/image"
import styles from "../styles/Product.module.scss"

export interface IProduct {
    id: string
    name: string
    price: number
    url: string
    description: string
    image: StaticImageData
}

interface IProductProps {
    product: IProduct
}

const Product = (props: IProductProps) => {
    return (
        <div className={styles.product}>
            <h2 className={styles.product__title}>{props.product.name}</h2>
            <p className={styles.product__description}>{props.product.description}</p>
            <div className={styles.product__images}>
                <Image src={props.product.image} alt={props.product.image.src}/>
            </div>
        </div>
    )
}

export default Product