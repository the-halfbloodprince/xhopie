import Order from '../components/Order'
import { db } from '../../firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { getSession, useSession } from 'next-auth/react'
import styles from '../styles/OrdersPage.module.sass'
import moment from 'moment'

function orders({ orders }) {
    
    const [session] = useSession()

    return (
        <div>
            <main className={styles.container}>
                <h1>Your Orders</h1>

                {session? 
                    (
                        <>
                        
                            <div className={styles.orders}>
                            {
                                orders?.map(({ id, amount, amountShipping, items, timestamp, images }) => ( 
                                    <Order
                                        key={id}
                                        id={id}
                                        amount={amount}
                                        amountShipping={amountShipping}
                                        items={items}
                                        timestamp={timestamp}
                                        images={images}
                                    />
                                ))
                            }
                        </div>

                        </>
                    ) : (<p>Sign In to check your orders</p>)
                }

               

            </main>
        </div>
    )
}

export default orders

export async function getServerSideProps(context) {

    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    const session = await getSession(context)

    if(!session) {
        return {
            props: {}
        }
    }

    // const stripeOrders = await db
    //                             .collection('users')
    //                             .doc(session.user.email)
    //                             .collection('orders')
    //                             .orderBy('timestamp', 'desc')
    //                             .get()

    // const docRef = doc(db, `users/${session.user.email}`)
    // const stripeOrders = await getDoc(docRef)
    console.log(collection(db, 'users'))
    
    const stripeOrders = await getDocs(collection(db, 'users'))

    // const stripeOrders = await getDoc()
    // const stripeOrders = await getDoc(doc(db, "users", session.user.email))
    console.log(stripeOrders)

    // const orders = await Promise.all(
    //     stripeOrders.docs.map(async (order) => ({
    //         id: order.id,
    //         amount: order.data().amount,
    //         amountShipping: order.data().amount_shipping,
    //         images: order.data().images,
    //         timestamp: moment(order.data().timestamp.toDate()).unix(),
    //         items: (
    //             await stripe.checkout.sessions.listLineItems(order.id, {
    //                 limit: 100
    //             })
    //         ).data
            
    //     }))
    // )

    const orders = []

    return {
        props: { 
            orders
        }
    }

}
