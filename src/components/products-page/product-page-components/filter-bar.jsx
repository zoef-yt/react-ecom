import React, { useState } from 'react';
import { useFilter } from '../../../context/index.js';
import { types } from '../../../data/products-data';

const FilterDropDownbutton = (props) => {
	return (
		<div className='dropdown'>
			<button className='btn btn-products btn-primary dropdown-btn'>{props.buttonName}</button>
			<div style={{ transform: `translateX(-${props.scroll}px)` }} className='dropdown-content'>
				{props.children}
			</div>
		</div>
	);
};

const FilterBar = () => {
	const { FilterState, FilterDispatch } = useFilter();
	const [scroll, setScrolled] = useState('');
	const scrollHandler = (event) => {
		setScrolled((scroll) => (scroll = event.target.scrollLeft));
	};

	return (
		<aside className='filter-section'>
			<div className='product-filter-bar'>
				<div className='filter-items' onScroll={scrollHandler}>
					<h3>Filter By:</h3>
					<FilterDropDownbutton
						key='Sort-By-Price'
						scroll={scroll}
						buttonName='Sort By'
						children={
							<>
								<label>
									<input
										type='radio'
										name='sort-by-price'
										checked={FilterState.sortByPrice === 'LOW_TO_HIGH' ? true : false}
										onChange={() => FilterDispatch({ type: 'SORT_BY_PRICE', payload: 'LOW_TO_HIGH' })}
									/>
									Price: Low to High
								</label>

								<label>
									<input
										type='radio'
										name='sort-by-price'
										checked={FilterState.sortByPrice === 'HIGH_TO_LOW' ? true : false}
										onChange={() => FilterDispatch({ type: 'SORT_BY_PRICE', payload: 'HIGH_TO_LOW' })}
									/>
									Price: High to Low
								</label>

								<label>
									<input
										type='checkbox'
										name='include-out-of-stock'
										value={FilterState.includesOutOfStock}
										checked={FilterState.includesOutOfStock}
										onChange={() => FilterDispatch({ type: 'INCLUDE_OUT_OF_STOCK' })}
									/>
									Include Out of Stock
								</label>
							</>
						}
					/>

					<FilterDropDownbutton
						key='Price-Range'
						scroll={scroll}
						buttonName='Price Range'
						children={
							<>
								<label className='slider'>Price: </label>
								<div className='slider'>
									<input
										type='range'
										step='4000'
										min='4000'
										max='52000'
										value={FilterState.priceRange}
										onChange={(e) => FilterDispatch({ type: 'PRICE_RANGE', payload: e.target.value })}
									/>
								</div>

								<h2>{FilterState.priceRange}</h2>
							</>
						}
					/>

					<FilterDropDownbutton
						key='Type-of-Product'
						scroll={scroll}
						buttonName='Type of Product'
						children={
							<>
								{types.map((type, index) => (
									<label key={index}>
										<input
											type='radio'
											name='platform'
											value={FilterState.types !== '' ? FilterState.types : ''}
											onChange={() => FilterDispatch({ type: 'TYPES_OF_PRODUCT', payload: type })}
										/>
										{type}
									</label>
								))}
							</>
						}
					/>

					<FilterDropDownbutton
						key='Ratings'
						buttonName='Ratings'
						scroll={scroll}
						children={
							<>
								<label>
									<input
										type='radio'
										name='ratings'
										value={FilterState.ratings === '5'}
										onChange={() => FilterDispatch({ type: 'RATING', payload: 5 })}
									/>
									5 Stars & below
								</label>
								<label>
									<input
										type='radio'
										name='ratings'
										value={FilterState.ratings === '4'}
										onChange={() => FilterDispatch({ type: 'RATING', payload: 4 })}
									/>
									4 Stars & below
								</label>
								<label>
									<input
										type='radio'
										name='ratings'
										value={FilterState.ratings === '3'}
										onChange={() => FilterDispatch({ type: 'RATING', payload: 3 })}
									/>
									3 Stars & below
								</label>
								<label>
									<input
										type='radio'
										name='ratings'
										value={FilterState.ratings === '2'}
										onChange={() => FilterDispatch({ type: 'RATING', payload: 2 })}
									/>
									2 Stars & below
								</label>

								<label>
									<input
										type='radio'
										name='ratings'
										value={FilterState.ratings === '1'}
										onChange={() => FilterDispatch({ type: 'RATING', payload: 1 })}
									/>
									1 Stars & below
								</label>
							</>
						}
					/>

					<button className='btn btn-link btn-products' onClick={() => FilterDispatch({ type: 'CLEAR_FILTER' })}>
						Clear Filters
					</button>
				</div>
			</div>
		</aside>
	);
};

export { FilterBar };
