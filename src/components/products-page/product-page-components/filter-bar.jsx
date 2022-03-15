import React, { useState } from 'react';
import { genres, types } from '../../../data/products-data';

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
						buttonName='Sort By Price'
						children={
							<>
								<label>
									<input type='radio' name='sort-by-price' />
									Price: Low to High
								</label>

								<label>
									<input type='radio' name='sort-by-price' />
									Price: High to Low
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
									{' '}
									<input type='range' min='10' max='1000' />
								</div>

								<h2>$1000</h2>
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
										<input type='radio' name='platform' />
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
									<input type='radio' name='ratings' />4 Stars & above
								</label>
								<label>
									<input type='radio' name='ratings' /> Stars & above
								</label>
								<label>
									<input type='radio' name='ratings' />2 Stars & above
								</label>
								<label>
									<input type='radio' name='ratings' />1 Stars & above
								</label>
							</>
						}
					/>

					<FilterDropDownbutton
						key='Genre'
						buttonName='Genre'
						scroll={scroll}
						children={
							<>
								{genres.map((product, index) => {
									return (
										<label key={index}>
											<input type='checkbox' name='genre' />
											{product}
										</label>
									);
								})}
							</>
						}
					/>
				</div>
			</div>
		</aside>
	);
};

export { FilterBar };
