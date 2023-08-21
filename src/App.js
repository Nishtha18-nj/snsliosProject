
import './App.css';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';


function App() {

  const [products,setProducts] = useState([])
  const [cart,setCart] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("https://fakestoreapi.com/products")
    .then( res => res.json())
    .then(data => {setProducts(data); setLoading(false)})
    .catch(err => {alert(err.message); setLoading(false)})
  },[])

  // add element in cart
  const addToCart = (index) => {
    let item = products[index]
    let cartItem = {...item,quantity: 1}
    setCart([...cart,cartItem])
    alert("Item Added")
  }

  // delete element from cart
  const deleteCart = (index) => {
    let temp = [...cart]
    temp.splice(index,1)
    setCart(temp)
  }

  // update
  const updateCart = (index,amount) => {
    let temp = [...cart]
    if(temp[index].quantity + amount > 0 )
    {
      temp[index].quantity += amount
      setCart(temp)
    }
   
  }

  return (
    <Routes>
      <Route path='/' element={<Home loading={loading} addToCart={addToCart} products={products} />} />
      <Route path='/products' element={<Products loading={loading} addToCart={addToCart} products={products} />} />
      <Route path='/cart' element={<Cart updateCart={updateCart} deleteCart={deleteCart} cart={cart}/>} />
    </Routes>
  );
}

export default App;
