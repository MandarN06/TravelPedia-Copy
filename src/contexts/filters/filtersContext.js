import { createContext, useEffect, useReducer } from 'react';
import productsData from '../../data/productsData';
import { brandsMenu, categoryMenu } from '../../data/filterBarData';
import filtersReducer from './filtersReducer';
import Data from '../../data/Data.js'
// Filters-Context
const filtersContext = createContext();


// Initial State
const initialState = {
    allProducts: [],
    demo:[],
    sortedValue: null,
    updatedBrandsMenu: brandsMenu,
    updatedCategoryMenu: categoryMenu,
    selectedPrice: {
        price: 0,
        minPrice: 0,
        maxPrice: 0
    },
    mobFilterBar: {
        isMobSortVisible: false,
        isMobFilterVisible: false,
    },
};


// Filters-Provider Component
const FiltersProvider = ({ children }) => {
     console.log("inside context")
    const [state, dispatch] = useReducer(filtersReducer, initialState);
       console.log(initialState);

    /* Loading All Products on the initial render */
    useEffect(() => {

        // making a shallow copy of the original products data, because we should never mutate the orginal data.
        const products = [...productsData];
        const prod = [...Data];
        // const products = [...Data];
        console.log("product array")
        console.log(prod)
        // finding the Max and Min Price, & setting them into the state.
        const priceArr = products.map(item => item.finalPrice);
        const minPrice = Math.min(...priceArr);
        const maxPrice = Math.max(...priceArr);

        dispatch({
            type: 'LOAD_ALL_PRODUCTS',
            payload: {prod, products, minPrice, maxPrice }
        });
        console.log("after dispatch")
        console.log(initialState.allProducts);
        console.log(initialState.demo);
    }, []);


    /* function for applying Filters - (sorting & filtering) */
    const applyFilters = () => {

        let updatedProducts = [...Data];

        /*==== Sorting ====*/
        if (state.sortedValue) {
            switch (state.sortedValue) {
                case 'Asia':
                    updatedProducts = updatedProducts.filter(item => item.continent.toLowerCase()==="Asia".toLowerCase());
                    break;

                case 'Africa':
                    updatedProducts = updatedProducts.filter(item => item.continent.toLowerCase()==="Africa".toLowerCase());
                    break;

                case 'North America':
                    updatedProducts = updatedProducts.filter(item => item.continent.toLowerCase()==="North America".toLowerCase());
                    break;

                case 'Europe':
                    updatedProducts = updatedProducts.filter(item => item.continent.toLowerCase()==="Europe".toLowerCase());
                    break;

                case 'Australia':
                    updatedProducts = updatedProducts.filter(item => item.continent.toLowerCase()==="Australia".toLowerCase());
                    break;

                default:
                    throw new Error('Wrong Option Selected');
            }
        }

        /*==== Filtering ====*/

        // filter by Brands
        // const checkedBrandItems = state.updatedBrandsMenu.filter(item => {
        //     return item.checked;
        // }).map(item => item.label.toLowerCase());

        // if (checkedBrandItems.length) {
        //     updatedProducts = updatedProducts.filter(item => checkedBrandItems.includes(item.continent.toLowerCase()));
        // }

        // // filter by Category
        // const checkedCategoryItems = state.updatedCategoryMenu.filter(item => {
        //     return item.checked;
        // }).map(item => item.label.toLowerCase());

        // if (checkedCategoryItems.length) {
        //     updatedProducts = updatedProducts.filter(item => checkedCategoryItems.includes(item.category.toLowerCase()));
        // }

        // // filter by Price
        // if (state.selectedPrice) {
        //     updatedProducts = updatedProducts.filter(item => {
        //         return item.finalPrice <= state.selectedPrice.price;
        //     });
        // }

        dispatch({
            type: 'FILTERED_PRODUCTS',
            payload: { updatedProducts }
        });
    };

    useEffect(() => {
        applyFilters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.sortedValue, state.updatedBrandsMenu, state.updatedCategoryMenu, state.selectedPrice]);



    // Dispatched Actions
    const setSortedValue = (sortValue) => {
        return dispatch({
            type: 'SET_SORTED_VALUE',
            payload: { sortValue }
        });
    };

    const handleBrandsMenu = (id) => {
        return dispatch({
            type: 'CHECK_BRANDS_MENU',
            payload: { id }
        });
    };

    const handleCategoryMenu = (id) => {
        return dispatch({
            type: 'CHECK_CATEGORY_MENU',
            payload: { id }
        });
    };

    const handlePrice = (event) => {
        const value = event.target.value;

        return dispatch({
            type: 'HANDLE_PRICE',
            payload: { value }
        });
    };

    const handleMobSortVisibility = (toggle) => {
        return dispatch({
            type: 'MOB_SORT_VISIBILITY',
            payload: { toggle }
        });
    };

    const handleMobFilterVisibility = (toggle) => {
        return dispatch({
            type: 'MOB_FILTER_VISIBILITY',
            payload: { toggle }
        });
    };

    const handleClearFilters = () => {
        return dispatch({
            type: 'CLEAR_FILTERS'
        });
    };


    // Context values
    const values = {
        ...state,
        setSortedValue,
        handleBrandsMenu,
        handleCategoryMenu,
        handlePrice,
        handleMobSortVisibility,
        handleMobFilterVisibility,
        handleClearFilters,
    };


    return (
        <filtersContext.Provider value={values}>
            {children}
        </filtersContext.Provider>
    );
};

export default filtersContext;
export { FiltersProvider };