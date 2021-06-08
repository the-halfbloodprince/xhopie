import styles from '../styles/Product.module.sass'
import Image from 'next/image'
import { StarIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToCart } from '../slices/cartSlice'

function Product({ id, title, price, description, category, image } = product) {

    const dispatch = useDispatch()

    const MIN_RATING = 1
    const MAX_RATING = 5

    const randomRating = Math.floor(Math.random() * (MAX_RATING - MIN_RATING) + MIN_RATING)

    const [rating, setrating] = useState(randomRating)

    const [hasPrime] = useState(Math.random() < .5)

    const MAX_LENGTH = 60

    const addItemToCart = () => {
        const product = { id, title, price, description, category, image, rating, hasPrime }
        dispatch(addToCart(product))
    }

    const truncate = (text) => text.length > MAX_LENGTH ? `${text.substring(0, MAX_LENGTH) }...` : text

    return (
        <div className={styles.product} >
            {/* <p className={styles.category}>{category}</p> */}
            <h4 className={styles.title}>{title}</h4>
            <Image src={image} className={styles.image} height={200} width={200} objectFit="contain" />
            <div className={styles.rating} >
                {Array(rating).fill().map((_, i)=>(
                    <StarIcon className={styles.ratingStar} key={i} />
                ))}
            </div>

            <p className={styles.description}>{truncate(description)}</p>

            <div className={styles.price}>
                <Currency quantity={price} currency="INR" />
            </div>

            {hasPrime && (
                <div className={styles.prime}>
                    <img src="https://links.papareact.com/fdw" alt="" />
                    <p>Free Next Day Delivery</p>
                </div>
            )}

            {/* <div className={styles.buttons}> */}
                <button className={styles.btn} onClick={addItemToCart}> <ShoppingCartIcon className={styles.icons} /> <p> Add to Cart</p> </button>
                {/* <button className={styles.btn}> <HeartIcon className={styles.icons} /> </button> */}
            {/* </div> */}
        </div>
    )
}

export default Product
