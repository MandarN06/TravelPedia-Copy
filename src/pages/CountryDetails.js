import React, { useContext } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import useDocTitle from "../hooks/useDocTitle";
import FilterBar from "../components/filters/FilterBar";
import ProductCard from "../components/product/ProductCard";
import Services from "../components/common/Services";
import filtersContext from "../contexts/filters/filtersContext";
import EmptyView from "../components/common/EmptyView";
import PlaceCard from "../components/product/PlaceCard";
import { useParams } from "react-router-dom";
const CountryDetails = () => {
  useDocTitle("All Products");

  const { demo } = useContext(filtersContext);
  const { countryId } = useParams();

  return (
    <>
      <section id="all_products" className="section">
        <FilterBar />
        <div className="container">
          {demo.length > 0 ? (
            <div className="wrapper products_wrapper">
              {demo[countryId - 1].locations.map((item) => (
                <PlaceCard key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <EmptyView icon={<BsExclamationCircle />} msg="No Results Found" />
          )}
        </div>
      </section>

      <Services />
    </>
  );
};

export default CountryDetails;
