import React, { useContext } from "react";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { displayMoney } from "../../helpers/utils";
import cartContext from "../../contexts/cart/cartContext";
import useActive from "../../hooks/useActive";

const PlaceCard = (props) => {
  const { id, name,cityName ,state , description, imageUrl , category } = props;
  
  return (
    <>
      <div className="card products_card">
        <figure className="products_img">
          <Link to={`place-details/${id}`}  state={props}>
            <img src={imageUrl} alt="product-img" style={{height:"200px" ,width:"200px"}} />
          </Link>
        </figure>
        <div className="products_details">
          <h3 className="products_title">
            <Link to={`place-details/${id}`}>{name}</Link>
          </h3>
          <h4>{cityName} ,{state && <span>{state}</span>}</h4>
         
          <div className="separator"></div>

          <h5 className="products_info">{description}</h5>
          <div className="separator"></div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
