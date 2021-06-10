import Image from 'next/image'
import { useRouter } from 'next/router'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from '../styles/Header.module.sass'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/cartSlice'


const tags = [<MenuIcon className={styles.menuIcon} />, 'All', 'Electronics', 'Mobiles', 'Home & Grocery', 'Buy Again', 'Health and Personal Care', 'Eatables']
function Header() {
    const [session] = useSession()
    const router = useRouter()
    const items = useSelector(selectItems)
    return (
        <header className={styles.header} >

            {/* Top Nav */}
            <div className={styles.header__bar1} >
                {/* Logo */}
                <div className={styles.logoContainer} onClick={() => router.push('/') } >
                    <Image src="/logo.png" width={150} height={60} objectFit="contain" className={styles.logo} />
                </div>
                {/* Search */}
                <div className={styles.search}>
                    <div className={styles.search__content}>
                        <input type="text" className={styles.search__input} />
                        <SearchIcon className={styles.search__icon} />
                    </div>
                </div>
                {/* Nav */}
                <div className={styles.header__nav} >

                    <div onClick={session ? signOut : signIn} className={styles.header__option} >
                        <div className={styles.header__optionLine1} >{session ? `Hello ${session.user.name.split(' ')[0]}` : `Sign In`}</div>
                        <div className={styles.header__optionLine2} >Account & Lists</div>
                    </div>
                    <div className={styles.header__option} onClick={() => router.push('/orders')} >
                        <div className={styles.header__optionLine1} >Returns</div>
                        <div className={styles.header__optionLine2} >& Orders</div>
                    </div>
                    <div className={styles.header__option} >
                        <div className={styles.header__optionLine1} >Your</div>
                        <div className={styles.header__optionLine2} >Prime</div>
                    </div>
                    <div className={styles.header__optionBasket} onClick={() => router.push('/checkout')} >
                        <ShoppingCartIcon className={styles.cartIcon} />
                        <span className={styles.header__optionLine2, styles.header__basketCount}> {items.length} </span>
                    </div>

                </div>
            </div>

            {/* Tags */}
            <div className={styles.header__bar2}>
                {
                    tags.map((tag, key) => (
                        <a className={styles.tag, (key > 4 ? styles.hideInSmall : undefined)} key={key}>{tag}</a>
                    ))
                }
            </div>





        </header>
    )
}

export default Header
