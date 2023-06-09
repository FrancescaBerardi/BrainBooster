import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = (body) => {
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