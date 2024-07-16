import './style.css'
const Layout = ({children}) => {
    return(
        <>
        <header>
            <navbar />
        </header>
        <main>
            {children}
        </main>
        <footer>
            <p>&copy; 2022 My Website. All rights reserved.</p>
        </footer>
        </>
    );
};
export default Layout