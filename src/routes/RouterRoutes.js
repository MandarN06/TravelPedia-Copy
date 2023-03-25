import React from 'react';
import { Routes, Route } from 'react-router';
import useScrollRestore from '../hooks/useScrollRestore';
import AllProducts from '../pages/AllProducts';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ErrorPage from '../pages/ErrorPage';
import CountryDetails from '../pages/CountryDetails';
import LocationDetails from '../pages/LocationDetails';
import AllPlaces from '../pages/Allplaces';
const RouterRoutes = () => {

    useScrollRestore();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/all-locations" element={<AllProducts />} />
                <Route path="/all-locations/country-details/:countryId" element={<CountryDetails />} />
                <Route path="/all-locations/country-details/:countryId/place-details/:placeId" element={<LocationDetails />} />
                {/* <Route path="/all-places" element={<AllPlaces/>} /> */}
                <Route path="/detailfromhome/:placeId" element={<LocationDetails />} />
                {/* <Route path="/product-details/:productId" element={<ProductDetails/>} /> */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default RouterRoutes;