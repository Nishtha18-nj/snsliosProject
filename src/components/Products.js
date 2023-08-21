import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Product from './Product'
export default function Products({products,addToCart,loading}) {
  return (
    <>
    <section className="coloured-section" id="title">
      <div className="container-fluid ">
        {/* Nav Bar */}
        <Navbar />
      </div>
    </section>
    {/* Pricing */}
    <section
      className="coloured-section"
      id="pricing"
      style={{ marginTop: "-16%" }}
    >
      <div className="container">
        {
          loading ?  <h2 className="section-heading">Fetching Products...</h2> : <h2 className="section-heading">Products for you !!</h2>
        }
       
        <div className="row">
          {
            products.map((item,index) => <Product addToCart={addToCart} index={index} key={index} title={item.title} desc={item.description} img={item.image}  price={item.price} rating={item.rating.rate}/> )
          }
        </div>


      </div>
    </section>

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
