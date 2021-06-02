import Product from './Product'

import styles from '../styles/ProductRow.module.sass'

function ProductRow({ products }) {



    return (
        <div className={styles.container} >
            {/* <p>{products.length}</p> */}
            <h1 className={styles.title}>Title here</h1>
            <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad asperiores voluptatibus fugit quod laudantium dolorum.</p>
            <div className={styles.products}>
                {products.map(({id, title, price, description, category, image}) => (
                    <Product 
                        key={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image} />
                ))}
            </div>
        </div>
    )
}

export default ProductRow
