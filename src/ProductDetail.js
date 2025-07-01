import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { FaStar } from "react-icons/fa";
import "./ProductDetail.css";

const ProductDetail = () => {
  const productImages = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1748525962/Croma%20Assets/Large%20Appliances/Air%20Conditioner/Images/270260_0_sncrny.png?tr=w-640",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1740038248/Croma%20Assets/Large%20Appliances/Air%20Conditioner/Images/270260_12_yrymmm.png?tr=w-640",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1740038226/Croma%20Assets/Large%20Appliances/Air%20Conditioner/Images/270260_1_as6tdf.png?tr=w-640",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1740038244/Croma%20Assets/Large%20Appliances/Air%20Conditioner/Images/270260_10_pwxx0p.png?tr=w-640",
  ];

  const [mainImage, setMainImage] = useState(productImages[0]);

  return (
    <div className="container mt-5 product-detail-container">
      <div className="row">
        <div className="col-6 col-md-1 d-flex flex-column align-items-center gap-2 mt-5">
          {productImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb-${index}`}
              className={`thumbnail-img ${mainImage === img ? "active" : ""}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        <div className=" ReactImageMagnify col-6 col-md-5 text-center">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Product",
                isFluidWidth: true,
                src: mainImage,
              },
              largeImage: {
                src: mainImage,
                width: 1200,
                height: 1200,
              },
              enlargedImageContainerDimensions: {
                width: "120%",
                height: "100%",
              },
            }}
          />
        </div>

        <div className="col-md-6 product-info-section mt-5 mb-5" style={{alignItems:"center"}}>
          <h4 className="text-light">VOLTAS 163V Vectra Pearl 4 in 1 Convertible 1.3 Ton 3 Star Inverter Split AC with Anti Dust Filter ( Copper Condenser, 4503543)</h4>
          <p className="text-success">Upto 24M No Cost EMI</p>
          <div> <strong className="offer-pill">Extra 3000 Discount</strong> <br/><br/>
           <strong className="offer-pill mt-4">Standard Installation Charge </strong>
          </div>
          <div className="star"> <p className="mt-3">
            <strong><FaStar /> 3.7</strong> (6 Ratings & 4 Reviews)
          </p></div>
          <h3 className="text-light">₹37,999.00</h3>
          <p>
            <del className="text-light">₹52,999.00</del><p className="text-light">(Save ₹15,000, 28.30% off)</p> 
          </p>
          <div className="border p-3 mb-3">
            <p className="text-light"><strong>With Exchange:</strong> <strong className="text-danger">Unavailable for your location</strong></p>
            <p className="text-light"><strong>Without Exchange:</strong> Available</p>
            <hr className="shield-border-bottom text-light"></hr>
          </div>
            <p className="text-light">
            <strong>Brand Color:</strong>{" "}</p>
            <span className="brand-color-box mb-2">White</span>
            <span className="brand-color-box mb-2 ms-3">black</span>

          <p className="text-light ">Airconditioner Capacity</p>
           <span className="brand-color-box">2</span>
            <span className="brand-color-box ms-3">2.0</span>
            <span className="brand-color-box ms-3">1</span>
            <span className="brand-color-box ms-3">1.5</span>
            <span className="brand-color-box ms-3">1.3</span>
            <span className="brand-color-box ms-3 mb-3">0.8</span>
            <p className="text-light">Super Savings (1 OFFERS)</p>
            
                <div className="offers-row mt-3">
                   
                    <div className="offer-card col-3 col-md-3 col-lg-3">
                      <div className="offer-header">
                        <img
                          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1639137723/Croma%20Assets/CMS/Bank%20Offer%20Logo/icici_sposdz.png"
                          alt="ICICI Bank"
                          className="bank-logo"
                        />
                        <h6 className="text-light">ICICI Bank</h6>
                      </div>
                      <p className="text-light small">
                        Rs.1000 Instant Discount on ICICI Bank Credit Card on AC selected products. Select the offer from “View all offers ”on...
                      </p>
                      <Link to="/">viewMore</Link>
                    </div>
                </div>
              <div className="keyfeature p-4 text-light">
                <p className="text-light">Key feature</p>
                <li>1.3 Ton Inverter AC, 5 Star Rating</li>
                <li>Copper Condenser</li>
                <li>1 Year Comprehensive Warranty, 10 Years Compressor Warranty</li>
                <li>For Rooms up to 150 sqft</li>
                <li>Power Consumption: 1160 W</li>
              </div>
            <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1744018884/Croma%20Assets/CMS/LP%20Page%20Banners/2025/BAU/PDP_ZipCare_4Oct2023_ssbs8t.png" className="img-fluid mt-4 rounded w-100 " />
            <div className="d-flex mt-3 ">
              <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662565562/Croma%20Assets/Categories/ServiceIcon/1_xp3txx.png" />
              <p className="text-light fw-bold">Within 72 Hours Installation/Demo</p>
              <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662565576/Croma%20Assets/Categories/ServiceIcon/2_u2h2gl.png" />
              <p className="text-light fw-bold ">7 Days Brand Replacement</p>
            </div>
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710427191/Croma%20Assets/ZipCare_PROD/PlanLogo/Protect/ZipCare_AdvancedProtect_200x200px_6March2024_kn2e1m.png"/>
        <h5 className="bg-light">Zipcare protect-advanced(Extended Warranty)</h5>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body d-flex">
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710427564/Croma%20Assets/ZipCare_PROD/HighlightIcons/protect/Extends_your_Device_s_Life_nlnnoo.png"/>
          <p className="text-light">Extends your Device's Life</p>
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710427574/Croma%20Assets/ZipCare_PROD/HighlightIcons/protect/Protection_Against_Sudden_Malfunctions_v38p9c.png"/>
          <p className="text-light">Protection against sudden malfunctions</p>
      </div>
      <div class="accordion-body d-flex">
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710427567/Croma%20Assets/ZipCare_PROD/HighlightIcons/protect/Genuine_Spare_Parts_xxyayn.png"/>
          <p className="text-light">Genuine Spare parts</p>
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721912618/Croma%20Assets/ZipCare_PROD/HighlightIcons/ZIPCARE_EW_V1/1_ucjvb8.png"/>
          <p className="text-light">Covers 100% of the repair cost</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710427092/Croma%20Assets/ZipCare_PROD/PlanLogo/AllinOne/ZipCare_AllInOne_200x200px_6March2024_ehh7kl.png"/>
     <h5 className="bg-light">ZipCare All in One (Extended Warranty + Maintenance)
Starting at just ₹250/month</h5>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
     <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body d-flex">
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710427574/Croma%20Assets/ZipCare_PROD/HighlightIcons/protect/Protection_Against_Sudden_Malfunctions_v38p9c.png"/>
          <p className="text-light">Comprehensive Plan including Repair & Maintenance</p>
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710427430/Croma%20Assets/ZipCare_PROD/HighlightIcons/AllinOne/AC/Unlimited_Wet_Service_bvgebe.png"/>
          <p className="text-light">Unlimited Wet Service</p>
      </div>
      <div class="accordion-body d-flex">
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710427424/Croma%20Assets/ZipCare_PROD/HighlightIcons/AllinOne/AC/Gas_Refill_xwnlft.png"/>
          <p className="text-light">Gas Refill</p>
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710427418/Croma%20Assets/ZipCare_PROD/HighlightIcons/AllinOne/AC/Complete_Breakdown_Support_including_Spares_and_Labours_vp3vbw.png"/>
          <p className="text-light">Complete Breakdown Support including Spares and Labours</p>
      </div>
    </div>
    </div>
  </div>
  </div>

  <div className="text-light mt-3 p-2" style={{border:"1px solid white", borderRadius:"10px"}}>
    <h5>Note:</h5>

    <li>Standard Installation Cost at Rs. 1199 + GST. For Additional charges and detailed TnCs on Installation of Air Conditioners, please</li>
  </div>
        </div>
       <div
  className="fixed-bottom d-flex justify-content-end align-items-center px-4 py-2"
  style={{ backgroundColor: "#111", borderTop: "1px solid #333" }}>
  <button className="btn btn-success me-3 px-4 fw-bold">Buy Now</button>
<Link to="/CartPage">
  <button className="btn btn-outline-light px-4 fw-bold">Add to Cart</button>
</Link></div>

      </div>
    </div>
  );
};
export default ProductDetail;