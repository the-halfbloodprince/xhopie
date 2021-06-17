import Link from 'next/link'

import styles from '../styles/NotFound.module.sass'

function NotFound() {
    return (
        <div className={styles.container}>
            <h1>404</h1>
            <p>The page you were searching for couldn't be found</p>
            <button><Link href="/"><a>Go back to home</a></Link></button>
        </div>
    )
}

export default NotFound