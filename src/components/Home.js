import React from 'react'
import Front from "../images/front-img.jpeg"
import Review1 from "../images/review1.jpeg"
import Review2 from "../images/review2.jpeg"
import Review3 from "../images/review3.jpeg"
import Press1 from "../images/bizinsider.png"
import Press2 from "../images/mashable.png"
import Press3 from "../images/TechCrunch.png"
import Press4 from "../images/tnw.png"
import Product from './Product'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Home({products,addToCart,loading}) {


  return (
    <>
  <section className="coloured-section" id="title">
    <div className="container-fluid">
      {/* Nav Bar */}
      <Navbar />
      {/* Title */}
      <div className="row ">
        <div className="col-lg-6">
          <h1 className="big-heading">Add and Buy Products online</h1>
          <button type="button" className="btn download-button btn-dark btn-lg">
            <span className="fa-brands fa-apple" /> Download
          </button>
          <button
            type="button"
            className="btn download-button  btn-lg btn-outline-light "
          >
            <i className="fa-brands fa-google-play" /> Download
          </button>
        </div>
        <div className="col-lg-6">
          <img
            className="title-image"
            src={Front}
            alt="iphone-mockup"
          />
        </div>
      </div>
    </div>
  </section>
  {/* Features */}
  <section className="white-section" id="features">
    <div className="container-fluid">
      <div className="row ">
        <div className=" feature-box col-lg-4 col-md-12">
          <i className="fa-solid fa-circle-check fa-4x" />
          <h3 className="feature-text">Easy to use.</h3>
          <p className="feature-para">
            So easy to use, even your kids could do it.
          </p>
        </div>
        <div className=" feature-box col-lg-4 col-md-12">
          <i className="fa-solid fa-bullseye fa-4x" />
          <h3 className="feature-text">Get Offers </h3>
          <p className="feature-para">
            We all love offers, you would get the greatest here .
          </p>
        </div>
        <div className=" feature-box  col-lg-4 col-md-12">
          <i className="fa-solid fa-heart fa-4x" />
          <h3 className="feature-text">Fastest service </h3>
          <p className="feature-para">
            Find the best delivery services - provided by us .
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials */}
  <section className="coloured-section" id="testimonials">
    <div id="testimonial-carousel" className="carousel slide" data-ride="false">
      <div className="carousel-inner">
        <div className="carousel-item  container-fluid active">
          <h2 className="testimonial-text">
            Shopping on this website was a breeze. The user-friendly interface
            and clear categories made finding what I needed a snap. Plus, the
            checkout process was smooth and hassle-free!
          </h2>
          <img
            className="testimonial-image"
            src={Review1}
            alt="lady-image"
          />
          <em>Pebbles, New York</em>
        </div>
        <div className=" container-fluid carousel-item">
          <h2 className="testimonial-text">
            I was pleasantly surprised by how easy it was to navigate this
            website. The search feature worked like a charm, and the product
            filters helped me narrow down my choices quickly. Definitely saved
            me time!
          </h2>
          <img
            className="testimonial-image"
            src={Review2}
            alt="man-profile"
          />
          <em>Beverly, Illinois</em>
        </div>
        <div className=" container-fluid carousel-item">
          <h2 className="testimonial-text">
            I'm not very tech-savvy, but this website was incredibly intuitive.
            From adding items to my cart to checking out, I never felt lost.
            They've done a great job making it accessible to everyone!
          </h2>
          <img
            className="testimonial-image"
            src={Review3}
            alt="lady-profile"
          />
          <em>Dallas , Texas</em>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#testimonial-carousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </a>
      <a
        className="carousel-control-next"
        href="#testimonial-carousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  </section>
  {/* Press */}
  <section className="coloured-section" id="press">
    <img className="press-logo" src={Press3} alt="tc-logo" />
    <img className="press-logo" src={Press4} alt="tnw-logo" />
    <img
      className="press-logo"
      src={Press1}
      alt="biz-insider-logo"
    />
    <img className="press-logo" src={Press2} alt="mashable-logo" />
  </section>
  {/* Pricing */}
  <section className="white-section" id="pricing">
    <div className="container-fluid">
      {
        loading ?  <h2 className="section-heading">Fetching Products....</h2> : 
        <h2 className="section-heading">Products for you </h2>
      }
     
      <p className="pricing-para">Affordable prices for you ....</p>
      <div className="row">
           
      {
        products.length >= 3 ?  <>
        <Product addToCart={addToCart} index={0} title={products[0].title} price={products[0].price} desc={products[0].description} 
        rating={products[0].rating.rate} img={products[0].image} />
        <Product addToCart={addToCart} index={1} title={products[1].title} price={products[1].price} desc={products[1].description} 
        rating={products[1].rating.rate} img={products[1].image} />
        <Product addToCart={addToCart} index={2} title={products[2].title} price={products[2].price} desc={products[2].description} 
        rating={products[2].rating.rate} img={products[2].image} /></> : null
      }
   
    
    
      </div>
    </div>
  </section>
  {/* Call to Action */}
  <section className="coloured-section" id="cta">
    <div className=" container-fluid">
      <h3 className="section-heading">Find us on MySHOP APP </h3>
      <button type="button" className="btn download-button btn-dark btn-lg">
        <span className="fa-brands fa-apple" /> Download
      </button>
      <button type="button" className="btn download-button  btn-lg btn-light ">
        <i className="fa-brands fa-google-play" /> Download
      </button>
    </div>
  </section>
  {/* Footer */}
  <footer className="white-section" id="footer">
    <div className="container-fluid">
      <div>
        <span className="social-icon fa-brands fa-twitter" />
        <span className="social-icon fa-brands fa-facebook" />
        <span className="social-icon fa-brands fa-instagram" />
        <span className="social-icon fa-solid fa-envelope" />
      </div>
      <p>© Copyright MySHOP</p>
    </div>
  </footer>
</>

  )
}
