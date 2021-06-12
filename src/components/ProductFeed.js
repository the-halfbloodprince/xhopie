import Product from './Product'
import ProductRow from './ProductRow'

import styles from '../styles/ProductFeed.module.sass'

function ProductFeed({ products }) {
    return (
        <div className={styles.container}>
            {/* { products.map(({id, title, price, description, category, image}) => (
                <Product 
                    key={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image} />
            )) } */}
            <ProductRow products={[...products.slice(0,4)]} />
            <img className={styles.ad} src="https://links.papareact.com/dyz" alt="" />
            <ProductRow products={[...products.slice(4,8)]} />
            <ProductRow products={[...products.slice(8,12)]} />
            <img className={styles.ad} src="https://links.papareact.com/dyz" alt="" />
            <ProductRow products={[...products.slice(12,16)]} />
            <ProductRow products={[...products.slice(16,20)]} />
            {/* <ProductRow products={[...products.slice(17,20)]} /> */}

        </div>

    )
}

export default ProductFeed
