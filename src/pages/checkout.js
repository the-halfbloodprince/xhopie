import Image from "next/image";
import Currency from 'react-currency-formatter'
import { useSelector } from "react-redux";
import CheckoutItem from '../components/CheckoutItem'
import Header from "../components/Header";
import { selectItems, selectTotalPrice } from "../slices/cartSlice";
import styles from '../styles/checkoutPage.module.sass'
import { useSession } from 'next-auth/client'
import {loadStripe} from '@stripe/stripe-js'
import axios from 'axios'

const stripePromise = loadStripe(process.env.stripe_public_key)

function Checkout() {

    const items = useSelector(selectItems)
    const total = useSelector(selectTotalPrice)
    // console.log(items)

    const [session] = useSession()

    const createCheckoutSession = async () => {
        const stripe = await stripePromise;

        //call the backend to create a stripe session
        const checkoutSession = await axios.post('/api/create-checkout-session', {
                items, 
                email: session.user.email
            })

        // console.log(checkoutSession.data.id)

        //Redirect the customer to checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        });

        if (result.error) {
            alert(result.error.message)
        }


    }

    return (
        <div>
            <Header />
            <main className={styles.mainContainer}>
                {/* left */}
               <div className={styles.left}>
                    <div>
                        <Image src="https://links.papareact.com/ikj" width={1020} height={250} objectFit="contain" />
                    </div>
                    <div className={styles.items}>
                        <h1 className={styles.cartHead}>{items.length ? "Your Cart" : "Your Cart is empty"}</h1>
                    </div>
                    <div className={styles.itemsList}>
                        {items.map((item, i) => (
                            <CheckoutItem 
                            key={i}
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                            hasPrime={item.hasPrime}
                            />
                        ))}
                    </div>
               </div>

                {/* right */}
                {console.log(total)}
                {items.length > 0 && (
                    <div className={styles.right}>
                        
                    <>
                        <h2>Subtotal ({ items.length } items): 
                            <span>
                                <Currency quantity={total} currency="INR" />
                            </span>
                        </h2>

                        <button role="link" onClick={createCheckoutSession} disabled={!session} className={session ? styles.button : styles.disabledButton }>
                            {!session ? 'Sign In to Checkout' : 'Proceed to Checkout'}
                        </button>
                    </>
                
            
        </div>
                )}
            </main>
        </div>
    )
}

export default Checkout
