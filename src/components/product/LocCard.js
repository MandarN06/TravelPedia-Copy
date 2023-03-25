import React, { useContext } from "react";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { displayMoney } from "../../helpers/utils";
import cartContext from "../../contexts/cart/cartContext";
import useActive from "../../hooks/useActive";

const LocCard = (props) => {
  const { id, name, description, heroImage } = props;
  
  return (
    <>
      <div className="card products_card">
        <figure className="products_img">
          <Link to={`country-details/${id}`}>
            <img src={heroImage} alt="product-img" style={{height:"200px" ,width:"200px"}} />
          </Link>
        </figure>
        <div className="products_details">
          <h3 className="products_title">
            <Link to={`country-details/${id}`}>{name}</Link>
          </h3>
          <h5 className="products_info">{description}</h5>
          <div className="separator"></div>
        </div>
      </div>
    </>
  );
};

export default LocCard;
