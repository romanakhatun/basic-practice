import React from 'react';
import Footerlogo from './footer-img/medicare-logo-white.png';
import img1 from './footer-img/img1.jpg';
import img2 from './footer-img/img2.jpg';
import img3 from './footer-img/img3.jpg';
import img5 from './footer-img/img5.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

function Footer(props) {
    return (
        <div className="main-footer">
            <div className="footer-top">
                {/* Footer Medicare */}
                <div className="footer-medicare col">
                    <img src={Footerlogo} alt="madicare logo" />
                    <p>Sed magna nulla, pulvinar vel ante vel, fringilla vulputate nibh. In placerat facilisis tincidunt. Integer quis erat dictum, placerat massa non, bibendum ante. Duis aliquet tellus magna, quis egestas enim vulputate sed. Phasellus in dui malesuada, lacinia urna sed.</p>
                </div>

                {/* Recent Post */}
                <div className="col recent-post">
                    <h2>Recent Posts</h2>

                    <div className="popular-post">
                        <div className="post-img">
                            <img src={img1} alt="USA Hospitals" />
                        </div>
                        <div className="img-side-content">
                            <p>OCTOBER 18, 2015</p>
                            <p>2015 Best USA Hospitals and Clinics</p>
                        </div>
                    </div>

                    <div className="popular-post">
                        <div className="post-img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="img-side-content">
                            <p>SEPTEMBER 22, 2015</p>
                            <p>Are drugs the best solution?</p>
                        </div>
                    </div>

                </div>

                {/* Product */}
                <div className="col product">
                    <h2>Products</h2>

                    <div className="popular-post">
                        <div className="post-img">
                            <img src={img5} alt="Room Chairs" />
                        </div>
                        <div className="img-side-content">
                            <p>Waiting Room Chairs</p>
                            <p>$15.00</p>
                        </div>
                    </div>

                    <div className="popular-post">
                        <div className="post-img">
                            <img src={img3} alt="Special Weight" />
                        </div>
                        <div className="img-side-content">
                            <p>Special Weight scale</p>
                            <div className="faStarIcon">
                                {/* <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} /> */}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Services */}
                <div className="col">
                    <h2>Our services</h2>
                    <p>Appointments</p>
                    <p>Working hours</p>
                    <p>Cost calculator</p>
                    <p>Procedures</p>
                    <p>Special offers</p>
                    <p>Testimonials</p>
                </div>
            </div>
            <div className="footer">
                <p>&copy;All Right Reserved By-Romana | <span className="privacy">privacy policy</span></p>
            </div>
        </div>
    );
}

export default Footer;