import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import { IoMdStar, IoMdCheckmark } from "react-icons/io";
import { calculateDiscount, displayMoney } from "../helpers/utils";
import useDocTitle from "../hooks/useDocTitle";
import useActive from "../hooks/useActive";
import cartContext from "../contexts/cart/cartContext";
import productsData from "../data/productsData";
import SectionsHead from "../components/common/SectionsHead";
import RelatedSlider from "../components/sliders/RelatedSlider";
import LocationSummary from "../components/product/LocationSummary";
import Services from "../components/common/Services";

const LocationDetails = () => {
  useDocTitle("Location Details");
  const location = useLocation();
  const propsData = location.state;
  return (
    <>
      <section id="product_details" className="section">
        <div className="container">
          <div className="wrapper prod_details_wrapper">
            {/*=== Product Details Left-content ===*/}
            <div className="prod_details_left_col">
              <div className="prod_details_tabs"></div>
              <figure className="prod_details_img">
                <img src={propsData.imageUrl} alt="product-img" />
              </figure>
            </div>

            {/*=== Product Details Right-content ===*/}
            <div className="prod_details_right_col">
              <h1 className="prod_details_title">{propsData.name}</h1>
              <h4 className="prod_details_info">{propsData.Description}</h4>

              <div className="separator"></div>

              <div className="separator"></div>

              <div className="prod_details_offers">
                <h4>Offers and Discounts</h4>
                <ul>
                  <li>No Cost EMI on Credit Card</li>
                  <li>Pay Later & Avail Cashback</li>
                </ul>
              </div>

              <div className="separator"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="related_products" className="section">
        <div className="container">
          <SectionsHead heading="Location Overview" />
        {/* Specification Accomodation Journey */}
        <LocationSummary {...propsData} />
         
        </div>
      </section>

      <Services />
    </>
  );
};

export default LocationDetails;
