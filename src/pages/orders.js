import Header from '../components/Header'

import styles from '../styles/OrdersPage.module.sass'

function orders() {
    return (
        <div>
            <Header />
            <main className={styles.container}>
                <h1>Your Orders</h1>
            </main>
        </div>
    )
}

export default orders
