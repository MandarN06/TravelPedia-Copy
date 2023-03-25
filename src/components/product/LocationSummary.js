import React from 'react';
import reviewsData from '../../data/reviewsData';
import useActive from '../../hooks/useActive';
import ProductReviews from './ProductReviews';


const LocationSummary = (props) => {

    const { brand, title, info, category, type, connectivity } = props;

    const { active, handleActive, activeClass } = useActive('specs');


    return (
        <>
            <section id="product_summary" className="section">
                <div className="container">

                    {/*===== Product-Summary-Tabs =====*/}
                    <div className="prod_summary_tabs">
                        <ul className="tabs">
                            <li
                                className={`tabs_item ${activeClass('specs')}`}
                                onClick={() => handleActive('specs')}
                            >
                               Overview
                            </li>
                            <li
                                className={`tabs_item ${activeClass('overview')}`}
                                onClick={() => handleActive('overview')}
                            >
                                Accomodation
                            </li>
                            <li
                                className={`tabs_item ${activeClass('reviews')}`}
                                onClick={() => handleActive('reviews')}
                            >
                                Journey
                            </li>
                        </ul>
                    </div>

                    {/*===== Product-Summary-Details =====*/}
                    <div className="prod_summary_details">
                        {
                            active === 'specs' ? (
                                <div className="prod_specs">
                                    <ul>
                                        <li>
                                            <span>Name</span>
                                            <span>{brand}</span>
                                        </li>
                                        <li>
                                            <span>City</span>
                                            <span>{title}</span>
                                        </li>
                                        <li>
                                            <span>State</span>
                                            <span>{category}</span>
                                        </li>
                                        <li>
                                            <span> Type</span>
                                            <span>{type}</span>
                                        </li>
                                        <li>
                                            <span>Famous Spots</span>
                                            <span>{connectivity}</span>
                                        </li>
                                        <li>
                                            <span>About </span>
                                            <span>Yes</span>
                                        </li>
                                    </ul>
                                </div>
                            ) : active === 'overview' ? (
                                <div className="prod_overview">
                                    
                                    <ul>
                                        <li>Stay Safe</li>
                                        <li>Comfortable Hotels</li>
                                        <li>24/7 services</li>
                                    </ul>
                                    <p>Your hotels are going to add here by using external api for your service</p>
                                </div>
                            ) : (
                                <div className="prod_reviews">
                                    <ul>
                                      This is your E-Guide who will bw your partner in your jounrey 
                                    </ul>
                                </div>
                            )

                        }

                    </div>

                </div>
            </section>
        </>
    );
};

export default LocationSummary;