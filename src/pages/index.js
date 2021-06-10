import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import Footer from "../components/Footer";
import {getSession} from 'next-auth/client'

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Xhoppie</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" /> 
      </Head>

      <Header />

      {/* <div className="mainContainer"> */}
        <Banner />

        <ProductFeed products={products} />
        
      {/* </div> */}
      
      <Footer />

    </div>
  );
}

export async function getServerSideProps(context) {

    const session = await getSession(context)

    const products = await fetch('https://fakestoreapi.com/products')
                              .then(res => res.json())

  return {
    props: { products, session },
  }
}
