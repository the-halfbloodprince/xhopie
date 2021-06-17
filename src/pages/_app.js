import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { Provider as AuthProvider } from 'next-auth/client'
// import '../styles/globals.css'
import '../styles/globals.sass'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </AuthProvider>
  )
}

export default MyApp
