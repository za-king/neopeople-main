import Header from '../Header'
import Footer from '../Footer'


export default function Layout(props) {
    const { children } = props
    return (
        <div className="static h-screen">
            
            <div>{children}</div>
            <Footer />
            <Header/>
        </div>
    )
}


