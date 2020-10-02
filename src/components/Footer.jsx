import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';
import { ReactComponent as Book} from '../assets/icons/book.svg';
import { ReactComponent as Books } from '../assets/icons/books.svg';
// Importam CSS.
import './Footer.css';

function Footer() {
    return(
        // Am mai adaugat clase(footer-group) pentru stilizares pe mobile!
        <footer className="pt-3 mt-3 bg-light">
            <div className="container-fluid container-min-max-width d-flex justify-content-between">
                <div className="footer-group d-flex flex-column">
                    <h3 className="h5">Learn more:</h3>
                    <Link to='/about' className="text-dark">
                         <Book/> About
                        </Link>
                    <Link to='/blind' className="text-dark"><Books/> Blind Date with a Book</Link>
                </div>
                <div className="footer-group">
                    <h3 className="h5">Contact me:</h3>
                    <p className="m-0">
                        <a href="mailto:madalina.scheaua@gmail.com" className="text-dark">
                            <Mail className="mr-1 mb-1 footer-icon"/>
                            madalina.scheaua@gmail.com
                        </a>
                    </p>
                    <p className="m-0"><Phone className="mr-1 footer-icon"/>+40732224011</p>
                </div>
                <div className="footer-group">
                    <h3 className="h5">Check out:</h3>
                    <p className="m-0">
                        <a href="https://github.com/madalinascheaua98" className="text-dark">
                            <GitHub className="mr-1 mb-1 footer-icon"/>
                            madalinascheaua98
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="https://www.linkedin.com/in/m%C4%83d%C4%83lina-%C8%99cheaua-0476591a3/" className="text-dark">
                            <LinkedIn className="mr-1 footer-icon"/>
                            madalinascheaua
                        </a>
                    </p>
                </div>
            </div>
            <div className="text-center py-3">
                &copy; Mad's Shelf, 2020
            </div>
        </footer>
    );
}

export default Footer;