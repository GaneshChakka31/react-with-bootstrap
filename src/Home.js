import React from "react";
import BoxCarousel from './BoxCarousel';
import { Link } from "react-router-dom";
import CategoryCarousel from './CategoryCarousel';

import './Home.css';
const Home = () => {
  return (
    <div className="container-fluid">    
      <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-indicators" style={{backgroundColor:"transparent"}}>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710743257/Croma%20Assets/CMS/Testing/2024/March/18th/Exclusively%20Curated%20For%20You/Desktop/Jpg/1Gift_dflts4.png?tr=w-1024" className="d-block w-100" alt="First slide" /> 
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div> */}
          </div>
          <div className="carousel-item">
            <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710743258/Croma%20Assets/CMS/Testing/2024/March/18th/Exclusively%20Curated%20For%20You/Desktop/Jpg/Indulge_rve6v9.png?tr=w-1024" className="d-block w-100" alt="Second slide" />
            {/* <div className="carousel-caption d-none d-md-block">
          
            </div> */}
           </div>
           <div className="carousel-item">
            <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1748587547/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Sanity/LP/May/30052025/Apple/Desktop/iPhone16_Desktop_o0xgoj.png?tr=w-1024" className="d-block w-100" alt="Third slide" />
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div> */}
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
          <CategoryCarousel/>

      <img 
        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1748351097/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Our%20New%20Favourites/may/27052025/SOH/HP_SingleSplit_Boult_27May25_goojmk.jpg?tr=w-1024"
        alt="Sample"
        className="img-fluid mt-4 w-100"
      />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 ">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1748350449/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Our%20New%20Favourites/may/27052025/Samung%20S25/HP_2Split_SOH_SamsungS25_27may2025_tlcskl.png?tr=w-1024"
              alt="Samsung Offer 1"
              className="img-fluid rounded mb-5"
            />
          </div>
          <div className="col-md-6">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1750770744/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Our%20New%20Favourites/June/Oneplus%20bullets/SOH%202%20split/HP_2Split_SOH_oneplus_18June2025_ojaqu5.png?tr=w-1024"
              alt="Samsung Offer 2"
              className="img-fluid mb-5 rounded"
            />
          </div>
        </div>
      </div>

      <h4 className="text-white mt-3">Summer Special Deals</h4>
      <div className="row " >
        <div className=" col-md-6 col-lg-4 col-xl-3">
          <div className="card " style={{ width: "100%",border:"none", }}>
            <Link to="/air-conditioner"><img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1741356430/311927_0_qbldwa.png?tr=w-720" className="card-img-top card-bg " alt="..."  /></Link>
            <div className="card-body">
              <h5 className="card-title text-light fw-bold text-center">Air conditioner</h5>
              <p className="card-text text-light text-center fw-bold">7 in 1 Convertible 1 Ton 3 Star Inverter Split AC</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card" style={{ width: "100%",border:"none"  }}>
             <Link to="/air-conditioner"><img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747750920/Croma%20Assets/Communication/Mobiles/Images/300700_0_m0ffoy.png?tr=w-400" className="card-img-top card-bg" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title text-light text-center">Mobiles</h5>
              <p className="card-text text-light text-center fw-bold">Some quick example text to build on the card title.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card" style={{ width: "100%",border:"none"  }}>
             <Link to="/air-conditioner"><img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1744262948/312250_0_wwpjso.png?tr=w-720" className="card-img-top card-bg img-fluid" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title text-light text-center">Coolers</h5>
              <p className="card-text text-light text-center fw-bold">Some quick example text to build on the card title.</p>

            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card" style={{ width: "100%", border:"none" }}>
 <Link to="/air-conditioner"><img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697622730/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/247655_epvwtx.png?tr=w-400" className="card-img-top card-bg img-fluid" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title text-light text-center">Earbuds</h5>
              <p className="card-text text-light text-center fw-bold">Some quick example text to build on the card title.</p>

            </div>
          </div>
        </div>
      </div>

      <img
        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1744026927/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Zipcare/April/HP_ZipCare_SS_AC_3April2025_zjkrqc.jpg?tr=w-1024"
        alt="Sample"
        className="img-fluid mt-4 w-100 h-50"
      />

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6  ">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1743012224/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Our%20New%20Favourites/March/Summer%20campaign/HP_2Split_SOH_Summer_26March2025_unzusu.jpg?tr=w-1024"
              alt="Samsung Offer 1"
              className="img-fluid rounded mb-5"
            />
          </div>
          <div className="col-md-6">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1748572671/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Our%20New%20Favourites/may/29052025/Revised/HP_2Split_SOH_WM_29may2025_cwigax.png?tr=w-1024"
              alt="Samsung Offer 2"
              className="img-fluid mb-5 rounded"
            />
          </div>
          <h5 className="text-light fw-bold">Why Croma?</h5>
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710743309/Croma%20Assets/CMS/Testing/2024/March/18th/Why%20Croma/Desktop/JPG/Why-Croma_t2lgxr.png?tr=w-1024"/>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
