import React from "react";
import { FaUser, FaShoppingCart, FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top px-3 py-2">
      <div className="container-fluid">
        <Link to="/Home" className="navbar-brand text-white fs-3">Croma</Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-light"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <strong className="nav-link text-white">Menu</strong>
            </li>
          </ul>

          <div className="search-bar d-flex align-items-center mx-lg-auto my-2">
            <input
              type="text"
              className="form-control"
              placeholder="What are you looking for?"
            />
            <FaSearch className="ms-2 bg-light text-dark" />
          </div>

          <div className="d-flex align-items-center ms-lg-4 mt-3 mt-lg-0 text-white">
            <FaMapMarkerAlt />
            <strong className="ms-1">East Godavari, 533308</strong>

            <Link to="/LoginScreen" className="ms-4 text-white">
              <FaUser />
            </Link>

            <div className="cart-icon ms-4 position-relative">
              <Link to="/" className="text-white">
                <FaShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
