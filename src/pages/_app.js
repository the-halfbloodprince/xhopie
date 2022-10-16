import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { SessionProvider } from 'next-auth/react'
// import '../styles/globals.css'
import '../styles/globals.sass'

const MyApp = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
