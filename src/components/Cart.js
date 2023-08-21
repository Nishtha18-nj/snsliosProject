import React from 'react'

import CartItem from './CartItem'

import Navbar from "./Navbar"

export default function Cart({cart,deleteCart,updateCart}) {

  let totalAmont = 0
  
  cart.forEach(item => totalAmont+=(item.quantity*item.price))
  return (
    <div> 
    <section className="coloured-section" id="title">
    <div className="container-fluid ">
      {/* Nav Bar */}
      <Navbar />
      {
        cart.length == 0 ?   <h1>Your Cart is Empty !</h1> : <h1>Your Cart: &#8377;{totalAmont}</h1>
      }
      

     </div>

    <div className="row">
    {
        cart.map((item,index) => <CartItem updateCart={updateCart} index={index} deleteCart={deleteCart} img={item.image} title={item.title} price={item.price} quantity={item.quantity} /> )
    }
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
    </div>
  )
}
