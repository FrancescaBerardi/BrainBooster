import React, { useContext } from 'react'
import Footer from './Footer'
import Header from './Header'
import { AuthContext } from '../Login/AuthContext';

const Layout = (body) => {
    const { userId, login, logout } = useContext(AuthContext);
    return (
        <div className="layout">
            <Header />
            <div>
                {body.children}
            </div >
            <Footer />
        </div>
    )
}

export default Layout