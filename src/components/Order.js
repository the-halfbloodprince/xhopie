import moment from "moment"
import Currency from "react-currency-formatter"

import styles from "../styles/order.module.sass";

function Order({ id, amount, amountShipping, items, timestamp, images }) {
    return (
        <div className={styles.container}>
            <div className={styles.top}>

                <div className={styles.p1}>
                    <p className={styles.p1__t1}>ORDER PLACED</p>
                    <p className={styles.p1__t2}>{moment.unix(timestamp).format("DD MM YYYY")}</p>
                </div>

                <div className={styles.p2}>
                    <p className={styles.p2__t1}>TOTAL</p>
                    <p className={styles.p2__t2}>
                        <Currency quantity={amount} currency="INR" />
                         - Next Day Delivery - 
                        <Currency quantity={amountShipping} currency="INR" />
                    </p>
                </div>

                <div className={styles.p3}>
                    <p className={styles.p3__t1}>
                        {items.length} items
                    </p>
                </div>

            </div>
            <div className={styles.mid}>
                {
                    images.map(image => (
                        <img src={image} className={styles.image} alt="" />
                    ))
                }
            </div>
            {/* <div className={styles.bot}></div> */}
        </div>
    )
}

export default Order
