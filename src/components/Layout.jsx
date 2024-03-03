import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="max-w-screen-xl text-base mx-auto px-8">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;