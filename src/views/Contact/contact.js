import React from "react";
import { image17, image20, image23 } from "../../assets/img";
import "./../../../src/assets/css/style.css";
//$fa-font-path: "~font-awesome/fonts/";
//import "~font-awesome/scss/font-awesome";
//import "./../../../src/assets/jss/owl.carousel.js";
//import OwlCarousel from "react-owl-carousel";
import {image21} from '../../assets/img'

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function contact(props) {
    return (
        <div>
            <section className="w3l-bootstrap-header">
                <nav className="navbar navbar-expand-lg navbar-light py-lg-3 py-2">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            <span className="fa fa-info"> -</span> Architect
                        </a>
                        {/* <!-- if logo is image enable this   
                        <a className="navbar-brand" href="#index.html">
                            <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                        </a> --> */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon fa fa-bars"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="" onClick={()=> props.history.push("/")}>
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="services.html"
                                    >
                                        Services
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <div className="nav-item">
                                <a
                                    className="btn btn-secondary btn-theme2 mt-md-5 mt-4"
                                    href="#"
                                >
                                    Login
                                </a>
                                &nbsp;&nbsp;
                                <a
                                    className="btn btn-secondary btn-theme2 mt-md-5 mt-4"
                                    href="#"
                                >
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
            <section className="w3l-contact-breadcrum">
                <div className="breadcrum-bg">
                    <div className="container py-5">
                        <p>
                            <a href="index.html">Home</a> &nbsp; / &nbsp;
                            Contact
                        </p>
                        <h2 className="my-3">Contact Us</h2>
                        <p>
                            Nulla dolorem perferendis inventore! posuere cubilia
                            Curae; Nunc non risus in justo convallis feugiat.
                            consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </section>
            {/* <!-- contact --> */}
            <section className="w3l-contacts-12" id="contact">
                <div className="contact-top pt-5">
                    <div className="container py-md-3">
                        <div className="row cont-main-top">
                            {/* <!-- contact address --> */}
                            <div className="contact col-lg-4">
                                <div className="cont-subs">
                                    <div className="cont-add">
                                        <div className="cont-add-rgt">
                                            <h4>Address:</h4>
                                            <p className="contact-text-sub">
                                                PO Box 1212, California, US
                                            </p>
                                        </div>
                                        <div className="cont-add-lft">
                                            <span
                                                className="fa fa-map-marker"
                                                aria-hidden="true"
                                            ></span>
                                        </div>
                                    </div>
                                    <div className="cont-add add-2">
                                        <div className="cont-add-rgt">
                                            <h4>Email:</h4>
                                            <a href="mailto:info@example.com">
                                                <p className="contact-text-sub">
                                                    info@example.com
                                                </p>
                                            </a>
                                        </div>
                                        <div className="cont-add-lft">
                                            <span
                                                className="fa fa-envelope"
                                                aria-hidden="true"
                                            ></span>
                                        </div>
                                    </div>
                                    <div className="cont-add">
                                        <div className="cont-add-rgt">
                                            <h4>Phone:</h4>
                                            <a href="tel:+7-800-999-800">
                                                <p className="contact-text-sub">
                                                    +7-800-999-800
                                                </p>
                                            </a>
                                        </div>
                                        <div className="cont-add-lft">
                                            <span
                                                className="fa fa-phone"
                                                aria-hidden="true"
                                            ></span>
                                        </div>
                                    </div>
                                    <div className="cont-add add-3">
                                        <div className="cont-add-rgt">
                                            <h4>Find Us On</h4>
                                            <div className="main-social-1 mt-2">
                                                <a
                                                    href="#facebook"
                                                    className="facebook"
                                                >
                                                    <span className="fa fa-facebook"></span>
                                                </a>
                                                <a
                                                    href="#twitter"
                                                    className="twitter"
                                                >
                                                    <span className="fa fa-twitter"></span>
                                                </a>
                                                <a
                                                    href="#instagram"
                                                    className="instagram"
                                                >
                                                    <span className="fa fa-instagram"></span>
                                                </a>
                                                <a
                                                    href="#google-plus"
                                                    className="google-plus"
                                                >
                                                    <span className="fa fa-google-plus"></span>
                                                </a>
                                                <a
                                                    href="#linkedin"
                                                    className="linkedin"
                                                >
                                                    <span className="fa fa-linkedin"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="cont-add-lft"></div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- //contact address --> */}
                            {/* <!-- contact form --> */}
                            <div className="contacts12-main col-lg-8 mt-lg-0 mt-5">
                                <form
                                    action="https://sendmail.w3layouts.com/submitForm"
                                    method="post"
                                    className="main-input"
                                >
                                    <div className="top-inputs d-grid">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            name="w3lName"
                                            id="w3lName"
                                            required=""
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            id="w3lSender"
                                            required=""
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        name="w3lName"
                                        id="w3lName"
                                        required=""
                                    />
                                    <textarea
                                        placeholder="Message"
                                        name="w3lMessage"
                                        id="w3lMessage"
                                        required=""
                                    ></textarea>
                                    <div className="text-right">
                                        <button
                                            type="submit"
                                            className="btn btn-theme2"
                                        >
                                            Submit Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- //contact form --> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3l-footer-29-main" id="footer">
                <div className="footer-29">
                    <div className="grids-forms-1 pb-5">
                        <div className="container">
                            <div className="grids-forms">
                                <div className="main-midd">
                                    <h4 className="title-head">
                                        Newsletter – Get Updates & Latest News
                                    </h4>
                                </div>
                                <div className="main-midd-2">
                                    <form
                                        action="#"
                                        method="post"
                                        className="rightside-form"
                                    >
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                        />
                                        <button className="btn" type="submit">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-5">
                        <div className="d-grid grid-col-4 footer-top-29">
                            <div className="footer-list-29 footer-1">
                                <h6 className="footer-title-29">About Us</h6>
                                <ul>
                                    <p>
                                        Vestibulum ante ipsum primis in faucibus
                                        orci luctus et ultrices posuere cubilia
                                        Curae
                                    </p>
                                </ul>
                                <div className="main-social-footer-29">
                                    <h6 className="footer-title-29">
                                        Social Links
                                    </h6>
                                    <a href="#facebook" className="facebook">
                                        <span className="fa fa-facebook"></span>
                                    </a>
                                    <a href="#twitter" className="twitter">
                                        <span className="fa fa-twitter"></span>
                                    </a>
                                    <a href="#instagram" className="instagram">
                                        <span className="fa fa-instagram"></span>
                                    </a>
                                    <a
                                        href="#google-plus"
                                        className="google-plus"
                                    >
                                        <span className="fa fa-google-plus"></span>
                                    </a>
                                    <a href="#linkedin" className="linkedin">
                                        <span className="fa fa-linkedin"></span>
                                    </a>
                                </div>
                            </div>
                            <div className="footer-list-29 footer-2">
                                <ul>
                                    <h6 className="footer-title-29">
                                        Useful Links
                                    </h6>
                                    <li>
                                        <a href="services.html">
                                            Plans and Projects
                                        </a>
                                    </li>
                                    <li>
                                        <a href="services.html">Architecture</a>
                                    </li>
                                    <li>
                                        <a href="services.html">
                                            {" "}
                                            Apartment Buildings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="services.html">
                                            Skyscrapers Buildings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="services.html">
                                            {" "}
                                            Restauration Projects
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-list-29 footer-3">
                                <div className="properties">
                                    <h6 className="footer-title-29">
                                        Recent Projects
                                    </h6>
                                    <a href="#">
                                        <img
                                            src={image17}
                                            className="img-responsive"
                                            alt=""
                                        />
                                        <p>
                                            We Are Leading International
                                            Consultiing Agency
                                        </p>
                                    </a>
                                    <a href="#">
                                        <img
                                            src={image23}
                                            className="img-responsive"
                                            alt=""
                                        />
                                        <p>
                                            Digital Marketing Agency all the
                                            foundational tools
                                        </p>
                                    </a>
                                    <a href="#">
                                        <img
                                            src={image21}
                                            className="img-responsive"
                                            alt=""
                                        />
                                        <p>
                                            Doloremque velit sapien labore eius
                                            itna
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div className="footer-list-29 footer-4">
                                <ul>
                                    <h6 className="footer-title-29">
                                        Quick Links
                                    </h6>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li>
                                        <a href="services.html">Services</a>
                                    </li>
                                    <li>
                                        <a href="#"> Blog</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom-copies text-center">
                            <p className="copy-footer-29">
                                © 2020 Interior Architect. All rights reserved |
                                Designed by{" "}
                                <a href="https://w3layouts.com">W3layouts</a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- move top --> */}
                <button onClick={topFunction} id="movetop" title="Go to top">
                    <span className="fa fa-angle-up"></span>
                </button>

                {/* //  <!-- /move top --> */}
            </section>
        </div>
    );
}
export default contact;
