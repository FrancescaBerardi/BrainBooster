import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {

    const location = useLocation();
    const hiddenFooterRoutes = ['/login', '/register1', '/register2'];
    const shouldShowFooter = !hiddenFooterRoutes.includes(location.pathname);
    if (!shouldShowFooter) {
        return null;
    }
    
  return (
    <div className='footer-container'>
        <div className="footer1">
            <ul className="fList1">
                <li>About us</li>
                <li>Contact</li>
                <li>Help</li>
            </ul>
        </div>
        <div className="footer2">
        <ul className="fList2">
                <li>Dove siamo</li>
                <li>Lavora con noi</li>
                <li>Info</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;