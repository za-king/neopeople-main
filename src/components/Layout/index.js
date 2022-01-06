import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'


export default function Layout(props) {
    const { children } = props
    return (
        <div>
            <Head>
                <link
                rel="preload"
                href="/fonts/fonts/TentangNanti/TNanti-Demo.otf"
                as="font"
                crossOrigin=""
            />
            </Head>
            
            <body className="h-screen">
                <Header/>
                <div >{children}</div>
                <Footer />
            </body>
        </div>
    )
}


