import React from "react";
import "./CartPage.css";
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div className="cart-container d-flex bg-light mt-5">
      <div className="left-section bg-light">
        <h3 className="bg-light fw-bold">YOUR CART</h3>
        <div className="cart-item">
          <img
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1748525962/Croma%20Assets/Large%20Appliances/Air%20Conditioner/Images/270260_0_sncrny.png?tr=w-400"
            alt="AC"
            className="product-image img-fluid bg-light"
           />
           <div className="item-details text-dark bg-light">
            <h3 className="bg-light">
              VOLTAS 163V Vectra Pearl 4 in 1 Convertible 1.3 Ton 3 Star Inverter Split AC
            </h3>
            <p className="text-dark bg-light">Standard Delivery by 23 June 2025</p>

            <div className="action-buttons bg-light">
              <button>Move to Wishlist</button>
              <button className="remove-btn">Remove</button>
            </div>
          </div>

          <div className="item-price bg-light">
            <h2 className="bg-light">₹37,990.00</h2>efe
            <p className="bg-light">(Incl. all Taxes)</p>
            <p className="strike bg-light">MRP ₹52,999.00</p>
            <p className="save bg-light">(Save ₹15,999.00)</p>
            <h4 className="bg-light">₹1459/mo*</h4>
            <Link to="/" className="bg-light ">Emi option</Link> 
          </div>
        </div>
       </div>

       <div className="right-section ">
        <h3 className="bg-light">Order Summary (1 item)</h3>
        <div className="price-summary bg-light">
          <div className="row bg-light">
            <span className="bg-light">Original Price</span>
            <span className="bg-light">₹37,990.00</span>
          </div>
          <div className="row total bg-light">
            <span className="bg-light">Total</span>
            <span className="bg-light">₹37,990.00</span>
          </div>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};
export default CartPage;
