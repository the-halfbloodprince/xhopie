import Currency from 'react-currency-formatter'
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import {useDispatch} from 'react-redux'
import { addToCart, removeFromCart } from '../slices/cartSlice'

import styles from '../styles/checkoutItem.module.sass'

function CheckoutItem({ id, title, rating, hasPrime, price, description, category, image }) {
    // console.log(title)
    const dispatch = useDispatch()

    const addItemToCart = () => {
        const product = {
            id, title, rating, hasPrime, price, description, category, image 
        }
        dispatch(addToCart(product))
    }

    const removeItemFromCart = () => {
        dispatch(removeFromCart({id}))
    }

    return (
        <div className={styles.container}>
            {/* Left Image */}
            <div className={styles.firstSec}>
                <Image src={image} height={200} width={200} objectFit="contain" />
            </div>
            {/* Mid section */}
            <div className={styles.midSec}>
                <p className={styles.title}>{title}</p>
                <div className={styles.rating}>
                    { Array(rating).fill().map((_, i) => <StarIcon key={i} className={styles.star} />) }
                </div>
                <p className={styles.description}>{description}</p>
                <Currency className={styles.price} quantity={price} currency="GBP" />
                {hasPrime && (
                    <div className={styles.prime}>
                        <img loading="lazy" src="https://links.papareact.com/fdw" />
                        <p>Free Next Day Delivery</p>
                    </div>
                )}
            </div>
            {/* Right section */}
            <div className={styles.rtSec}>
                <button className={styles.btn} onClick={addItemToCart} >Add to wishlist</button>
                <button className={styles.btn} onClick={removeItemFromCart} >Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutItem
