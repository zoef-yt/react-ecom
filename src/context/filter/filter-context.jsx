import { useContext, createContext, useState, useEffect, useReducer } from 'react';

const initialData = {
	search: '',
	sortByPrice: '',
	priceRange: 52000,
	types: '',
	rating: 1,
	includesOutOfStock: true,
	dataToShow: [],
	originalData: [],
};
const FilterContext = createContext();

const FilterProvider = ({ children }) => {
	const [FilterState, FilterDispatch] = useReducer(reducer, initialData);
	return <FilterContext.Provider value={{ FilterState, FilterDispatch }}>{children}</FilterContext.Provider>;
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_DATA':
			return {
				...state,
				dataToShow: action.payload,
				originalData: action.payload,
			};

		case 'CLEAR_FILTER':
			return {
				...state,
				search: state.search,
				sortByPrice: '',
				priceRange: 52000,
				types: '',
				rating: 1,
				includesOutOfStock: true,
				dataToShow: state.originalData,
				originalData: state.originalData,
			};

		case 'SORT_BY_PRICE':
			if (action.payload === 'LOW_TO_HIGH') {
				return {
					...state,
					sortByPrice: 'LOW_TO_HIGH',
					dataToShow: [...state.dataToShow].sort((a, b) => a.offerPrice - b.offerPrice),
				};
			} else if (action.payload === 'HIGH_TO_LOW') {
				return {
					...state,
					sortByPrice: 'HIGH_TO_LOW',
					dataToShow: state.dataToShow.sort((a, b) => b.offerPrice - a.offerPrice),
				};
			}
		case 'PRICE_RANGE':
			return {
				...state,
				priceRange: action.payload,
			};
		case 'TYPES_OF_PRODUCT':
			return {
				...state,
				types: action.payload,
			};
		case 'INCLUDE_OUT_OF_STOCK':
			return {
				...state,
				includesOutOfStock: !state.includesOutOfStock,
			};
		case 'RATING':
			return {
				...state,
				rating: action.payload,
			};
		case 'SEARCH':
			return {
				...state,
				search: action.payload,
			};

		default:
			return state;
	}
};
