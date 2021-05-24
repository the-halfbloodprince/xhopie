import Image from 'next/image'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import styles from '../styles/Header.module.sass'

const tags = [<MenuIcon className={styles.menuIcon} /> ,'All', 'Electronics', 'Mobiles', 'Home & Grocery', 'Buy Again', 'Health and Personal Care', 'Eatables']
function Header() {
    return (
        <header className={styles.header} >

            {/* Top Nav */}
            <div className={styles.header__bar1} >
                {/* Logo */}
                <div className={styles.logoContainer} >
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

                    <div className={styles.header__option} >
                        <div className={styles.header__optionLine1} >Hello</div>
                        <div className={styles.header__optionLine2} >Sign In</div>
                    </div>
                    <div className={styles.header__option} >
                        <div className={styles.header__optionLine1} >Returns</div>
                        <div className={styles.header__optionLine2} >& Orders</div>
                    </div>
                    <div className={styles.header__option} >
                        <div className={styles.header__optionLine1} >Your</div>
                        <div className={styles.header__optionLine2} >Prime</div>
                    </div>
                    <div className={styles.header__optionBasket} >
                        <ShoppingCartIcon className={styles.cartIcon} />
                        <span className={styles.header__optionLine2, styles.header__basketCount}>0</span>
                    </div>

                </div>
            </div>

            {/* Tags */}
            <div className={styles.header__bar2}>
            {
                tags.map((tag, key) => (
                    <a class={styles.tag, key>4 && styles.hideInSmall} key={key}>{tag}</a>
                ))
            }
            </div>





        </header>
    )
}

export default Header
