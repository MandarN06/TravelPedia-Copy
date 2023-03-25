import React from 'react';
import reviewsData from '../../data/reviewsData';
import useActive from '../../hooks/useActive';
import ProductReviews from './ProductReviews';


const LocationSummary = (props) => {

    const { id, name, cityName, state, Description, imgUrl, category, transport } = props;

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
                                Itinerary
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
                                    <h4 className="prod_details_info">{Description}</h4>
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