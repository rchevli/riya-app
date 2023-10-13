import React from 'react';
import logo from '../images/Logo .svg';
const Footer = () => {
    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="logo"/>
                    <p>
                    Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>

                </div>
                <div>
                    <ul>
                    <h3>Important Links</h3>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservation</a></li>
                    <li><a href="/">Order online</a></li>
                    <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>
                        Contact Us
                    </h3>
                    <ul>
                        <li>Address: <br/>456 Towncity, USA. </li>
                        <li>Phone : <br/>+1 159 569 7891 </li>
                        <li>Email: <br/>littlelemon77@gmail.com </li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Twitter</a></li>
                    <li><a href="/">Instgram</a></li>
                    </ul>
                </div>
            </section>

        </footer>
    );
};
export default Footer;