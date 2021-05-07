import GlobalStyle from '../styles/global'
import { Provider } from 'next-auth/client'
import { SideBarProvider } from '../contexts/SideBarContext'

function MyApp({ Component, pageProps }) {
    return (
        <SideBarProvider>
            <Provider session={pageProps.session}>
                <Component {...pageProps} />
                <GlobalStyle />
            </Provider>
        </SideBarProvider>
    )
}

export default MyApp
