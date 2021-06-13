import Header from '../components/Header'
import Order from '../components/Order'
import db from '../../firebase'
import {getSession, useSession} from 'next-auth/client'
import styles from '../styles/OrdersPage.module.sass'
import moment from 'moment'

function orders({ orders }) {
    
    const [session] = useSession()

    return (
        <div>
            <Header />
            <main className={styles.container}>
                <h1>Your Orders</h1>

                {session? 
                    (
                        <>

                            <p>{orders.length} Orders</p>
                        
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

    const stripeOrders = await db
                                .collection('users')
                                .doc(session.user.email)
                                .collection('orders')
                                .orderBy('timestamp', 'desc')
                                .get()

    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100
                })
            ).data
            
        }))
    )

    return {
        props: { 
            orders
        }
    }

}
