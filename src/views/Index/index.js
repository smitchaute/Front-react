import React from "react";
//import { Link } from "react-router"
import "./../../../src/assets/css/style.css";
//$fa-font-path: "~font-awesome/fonts/";
//import "~font-awesome/scss/font-awesome";
//import "./../../../src/assets/jss/owl.carousel.js";
//import OwlCarousel from 'react-owl-carousel';

import {image1, image17, image18, image6, image20, image21, image23} from '../../assets/img'

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}

//  When the user clicks on the button, scroll to the top of the document
function topFunction() {
    //console.log("hello");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function Index(props) {
    return (
        <div>
            <section className="w3l-bootstrap-header">
                <nav className="navbar navbar-expand-lg navbar-light py-lg-3 py-2">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            <span className="fa fa-info"> -</span> Architect
                        </a>
                        {/* <!-- if logo is image enable this   
    <a classNameName="navbar-brand" href="#index.html">
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
                                    <a className="nav-link" href="" onClick={()=> props.history.push("/contact")}>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <div className="nav-item">
                                <a className="btn btn-secondary btn-theme2 mt-md-5 mt-4" href="#">Login</a>
                                &nbsp;&nbsp;
                                <a className="btn btn-secondary btn-theme2 mt-md-5 mt-4" href="#">Sign up</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>

            <section className="w3l-main-slider" id="home">
                {/* <!-- main-slider --> */}
                <div className="companies20-content">
                    <div className="owl-one owl-carousel owl-theme">
                        <div className="item">
                            <li>
                                <div
                                    className="slider-info banner-view bg bg2"
                                    data-selector=".bg.bg2"
                                >
                                    <div className="banner-info">
                                        <div className="container">
                                            <div className="banner-info-bg mr-auto">
                                                <h5>
                                                    {" "}
                                                    We are architects, planners
                                                    &amp; designers.
                                                </h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Quae, velit recusandae
                                                    eum necessitatibus
                                                    blanditiis porro cum
                                                </p>
                                                <a
                                                    className="btn btn-secondary btn-theme2 mt-md-5 mt-4"
                                                    href="services.html"
                                                >
                                                    {" "}
                                                    Our Services
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="item">
                            <li>
                                <div
                                    className="slider-info  banner-view banner-top1 bg bg2"
                                    data-selector=".bg.bg2"
                                >
                                    <div className="banner-info">
                                        <div className="container">
                                            <div className="banner-info-bg mr-auto">
                                                <h5>
                                                    We Create Beautiful Home
                                                    Exteriors.
                                                </h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Quae, velit recusandae
                                                    eum necessitatibus
                                                    blanditiis porro cum
                                                </p>
                                                <a
                                                    className="btn btn-secondary btn-theme2 mt-md-5 mt-4"
                                                    href="contact.html"
                                                >
                                                    {" "}
                                                    Contact Us
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="item">
                            <li>
                                <div
                                    className="slider-info banner-view banner-top2 bg bg2"
                                    data-selector=".bg.bg2"
                                >
                                    <div className="banner-info">
                                        <div className="container">
                                            <div className="banner-info-bg mr-auto">
                                                <h5>
                                                    Exceptional Designing For
                                                    Exceptional Spaces
                                                </h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Quae, velit recusandae
                                                    eum necessitatibus
                                                    blanditiis porro cum
                                                </p>
                                                <a
                                                    className="btn btn-secondary btn-theme2 mt-md-5 mt-4"
                                                    href="about.html"
                                                >
                                                    {" "}
                                                    About Us
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="item">
                            <li>
                                <div
                                    className="slider-info banner-view banner-top3 bg bg2"
                                    data-selector=".bg.bg2"
                                >
                                    <div className="banner-info">
                                        <div className="container">
                                            <div className="banner-info-bg mr-auto">
                                                <h5>
                                                    Giving Your Home a New Style
                                                    Every Style
                                                </h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Quae, velit recusandae
                                                    eum necessitatibus
                                                    blanditiis porro cum
                                                </p>
                                                <a
                                                    className="btn btn-secondary btn-theme2 mt-md-5 mt-4"
                                                    href="services.html"
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w3l-about1 py-5" id="about">
                <div className="container py-lg-3">
                    <div className="aboutgrids row">
                        <div className="col-lg-6 aboutgrid2">
                            <img
                                src={image1}
                                alt="about image"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-lg-6 aboutgrid1 mt-lg-0 mt-4 pl-lg-5">
                            <h4>We never stop to create new ideas</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quae, velit recusandae eum
                                necessitatibus blanditiis porro cum, facere qui
                                impedit dolor doloribus quis reiciendis ullam
                                repellendus.Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Quae, velit
                                recusandae eum{" "}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quae, velit recusandae eum
                                necessitatibus blanditiis porro cum, facere qui
                                impedit dolor doloribus quis reiciendis ullam
                                repellendus.
                            </p>

                            <a
                                className="btn btn-secondary btn-theme2"
                                href="about.html"
                            >
                                {" "}
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products-4" id="gallery">
                {/* <!-- Products4 block --> */}
                <div id="products4-block" className="text-center">
                    <div className="container">
                        <div className="heading text-center mx-auto mb-5">
                            <h3 className="head">Projects</h3>
                            <p className="my-3 head">
                                {" "}
                                Vestibulum ante ipsum primis in faucibus orci
                                luctus et ultrices posuere cubilia Curae; Nulla
                                mollis dapibus nunc, ut rhoncus turpis sodales
                                quis. Integer sit amet mattis quam.
                            </p>
                        </div>
                        <input id="tab1" type="radio" name="tabs" defaultChecked />
                        <label className="tabtle" htmlFor="tab1">
                            All Projects
                        </label>

                        <input id="tab2" type="radio" name="tabs" />
                        <label className="tabtle" htmlFor="tab2">
                            Design
                        </label>

                        <input id="tab3" type="radio" name="tabs" />
                        <label className="tabtle" htmlFor="tab3">
                            Architecture
                        </label>

                        <input id="tab4" type="radio" name="tabs" />
                        <label className="tabtle" htmlFor="tab4">
                            Interior
                        </label>

                        <section id="content1" className="tab-content text-left">
                            <div className="d-grid grid-col-3">
                                <div className="product">
                                    <a
                                        href="#"
                                        data-lightbox="example-set"
                                        data-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto, ex veritatis"
                                    >
                                        <figure>
                                            <img
                                                src={image6}
                                                className="img-responsive"
                                                alt=""
                                            />
                                        </figure>
                                    </a>
                                </div>
                                <div className="product">
                                    <a
                                        href='#'
                                        data-lightbox="example-set"
                                        data-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto, ex veritatis"
                                    >
                                        <figure>
                                            <img
                                                src={image17}
                                                className="img-responsive"
                                                alt=""
                                            />
                                        </figure>
                                    </a>
                                </div>
                                <div className="product">
                                    <a
                                        href="#"
                                        data-lightbox="example-set"
                                        data-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto, ex veritatis"
                                    >
                                        <figure>
                                            <img
                                                src={image18}
                                                className="img-responsive"
                                                alt=""
                                            />
                                        </figure>
                                    </a>
                                </div>
                                <div className="product">
                                    <a
                                        href="#"
                                        data-lightbox="example-set"
                                        data-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto, ex veritatis"
                                    >
                                        <figure>
                                            <img
                                                src={image18}
                                                className="img-responsive"
                                                alt=""
                                            />
                                        </figure>
                                    </a>
                                </div>
                                <div className="product">
                                    <a
                                        href="#"
                                        data-lightbox="example-set"
                                        data-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto, ex veritatis"
                                    >
                                        <figure>
                                            <img
                                                src={image20}
                                                className="img-responsive"
                                                alt=""
                                            />
                                        </figure>
                                    </a>
                                </div>
                                <div className="product">
                                    <a
                                        href="#"
                                        data-lightbox="example-set"
                                        data-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto, ex veritatis"
                                    >
                                        <figure>
                                            <img
                                                src={image21}
                                                className="img-responsive"
                                                alt=""
                                            />
                                        </figure>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
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
                                    <a href="#google-plus" className="google-plus">
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
                                    <h6 className="footer-title-29">Quick Links</h6>
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

export default Index;
