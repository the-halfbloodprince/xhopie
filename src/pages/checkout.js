import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutItem from '../components/CheckoutItem'
import Header from "../components/Header";
import { selectItems } from "../slices/cartSlice";
import styles from '../styles/checkoutPage.module.sass'

function Checkout() {

    const items = useSelector(selectItems)
    // console.log(items)

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
                    {/* {console.log(items[0].title)} */}
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

                {/* right */}
                <div></div>
            </main>
        </div>
    )
}

export default Checkout
