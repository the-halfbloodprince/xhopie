import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from '../styles/Banner.module.sass'

function Banner() {
    return (
        <div className={styles.banner}>
            {/* <div className={styles.overlay} /> */}
            <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={true} showThumbs={false} interval={5000} centerMode={true} centerSlidePercentage={100} dynamicHeight={false} className={styles.carousel} >

                <div><img src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" loading="lazy" alt="" className={styles.carouselImages} /></div>
                <div><img src="https://images.unsplash.com/photo-1621963195287-b49c72376f31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1144&q=80" loading="lazy" alt="" className={styles.carouselImages} /></div>
                <div><img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" loading="lazy" alt="" className={styles.carouselImages} /></div>
                <div><img src="https://images.unsplash.com/photo-1621873493371-9aea49f66b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1132&q=80" loading="lazy" alt="" className={styles.carouselImages} /></div>

            </Carousel>
        </div>
    )
}

export default Banner
