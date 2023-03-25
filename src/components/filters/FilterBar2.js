import React, { useContext } from 'react';
import { BiSort, BiFilterAlt } from 'react-icons/bi';
import filtersContext from '../../contexts/filters/filtersContext';
import FilterBarOptions from './FilterBarOptions';
import FilterLocations from './FilterLocations';

const FilterBar = () => {

    // const { handleMobSortVisibility, handleMobFilterVisibility } = useContext(filtersContext);


    return (
        <>
            {/*===== Filterbar-default =====*/}
            <aside id="filterbar">
                <div className="filterbar_wrapper">
                    <FilterLocations />
                </div>
            </aside>

            {/*===== Filterbar-mobile =====*/}
           
        </>
    );
};

export default FilterBar;