import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
    <Link className="navbar-brand" to="/">
      MySHOP
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggleDemo2"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarToggleDemo2">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#footer">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">
            <i className="fa fa-shopping-cart" aria-hidden="true" />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}
