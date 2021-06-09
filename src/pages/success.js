import Header from "../components/Header";
import Footer from "../components/Footer";

// import Link from 'next/link'
import {useRouter} from 'next/router'

import ArrowCircleRightIcon from '@heroicons/react/solid/ArrowCircleRightIcon'
import CheckCircleIcon from '@heroicons/react/solid/CheckCircleIcon'

import styles from '../styles/SuccessPage.module.sass'

function success() {

    const router = useRouter()

    // setTimeout(() => { router.push('/') }, 10000)

    return (
        <>
            <Header />

            <main className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.image}>
                        <img src="/success.gif" alt="" />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Your Order is successfully placed! <CheckCircleIcon color="green" className={styles.tickIcon} /> </h1>
                        <p className={styles.arrivingOn}>Arriving on 31st February, someyear</p>
                        {/* <p className={styles.price}></p> */}
                        <p className={styles.description}>Thank you for shopping with us.</p>
                        <button onClick={() => router.push('/orders')}>
                            <p>Check your orders</p>
                            <ArrowCircleRightIcon className={styles.rtArrow} /> 
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default success
