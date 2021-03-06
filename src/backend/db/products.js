import { v4 as uuid } from 'uuid';
import IMAGES from '../../assets/images/index';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	// 'Ghost of Tsushima Directors Cut PS5'
	{
		_id: 'NG_01',
		id: '0',
		name: 'Ghost of Tsushima Directors Cut PS5',
		image: IMAGES.GOT1,
		image2: IMAGES.GOT2,
		categoryName: 'Games',
		brand: 'Sucker Punch Productions',
		ratings: '4.9',
		price: 3099,
		hasOffer: true,
		offerPrice: 2099,
		offerMessage: 'Save ₹1000',
		preOrder: false,
		inStock: true,
	},
	// The Last of Us Part II for PS4
	{
		_id: 'NG_02',
		id: '1',
		name: 'The Last of Us Part II for PS4',
		image: IMAGES.LOUS1,
		image2: IMAGES.LOUS2,
		categoryName: 'Games',
		brand: 'Naughty Dog',
		ratings: '3.8',
		price: 4000,
		hasOffer: true,
		offerPrice: 2499,
		offerMessage: 'Save ₹1501',
		preOrder: false,
		inStock: false,
	},
	// Horizon Forbidden West for PS5
	{
		_id: 'NG_03',

		id: '2',
		name: 'Horizon Forbidden West for PS5',
		image: IMAGES.HFW1,
		image2: IMAGES.HFW2,
		categoryName: 'Games',
		brand: 'Guerrilla Games',
		ratings: '5',
		price: 3099,
		hasOffer: false,
		offerPrice: 3099,
		offerMessage: 'PRE-ORDER NOW!',
		preOrder: true,
		inStock: false,
	},
	// Marvel Spiderman Miles Morales: Ultimate Edition for PS5
	{
		_id: 'NG_04',

		id: '3',
		name: 'Marvel Spiderman Miles Morales: Ultimate Edition for PS5',
		image: IMAGES.MilesMorales1,
		image2: IMAGES.MilesMorales2,
		categoryName: 'Games',
		brand: 'Sony Interactive Entertainment',
		ratings: '4',
		price: 4999,
		hasOffer: true,
		offerPrice: 4599,
		offerMessage: 'Save ₹400',
		preOrder: false,
		inStock: true,
	},
	// Uncharted Legacy of Thieves Collection for PS5
	{
		_id: 'NG_05',
		id: '4',
		name: 'Uncharted Legacy of Thieves Collection for PS5',
		image: IMAGES.Uncharted1,
		image2: IMAGES.Uncharted2,
		categoryName: 'Games',
		brand: 'Naughty Dog',
		ratings: '4.5',
		price: 4999,
		hasOffer: true,
		offerPrice: 2999,
		offerMessage: 'Save ₹2000',
		preOrder: false,
		inStock: true,
	},
	// Nintendo Switch - MARIO RED & BLUE EDITION
	{
		_id: 'NG_06',
		id: '5',
		name: 'Nintendo Switch - MARIO RED & BLUE EDITION',
		image: IMAGES.NintendoSwitchMario1,
		image2: IMAGES.NintendoSwitchMario2,
		categoryName: 'Consoles',
		brand: 'Nintendo',
		ratings: '2',
		price: 49999,
		hasOffer: true,
		offerPrice: 32999,
		offerMessage: 'Save ₹17000 on pre-order',
		preOrder: true,
		inStock: false,
	},
	// Sony PlayStation 4 1TB Console
	{
		_id: 'NG_07',
		id: '6',
		name: 'Sony PlayStation 4 1TB Console',
		image: IMAGES.PS4_1,
		image2: IMAGES.PS4_2,
		categoryName: 'Consoles',
		brand: 'Sony',
		ratings: '3',
		price: 49999,
		hasOffer: true,
		offerPrice: 29990,
		offerMessage: 'Stock Clearance Sale',
		preOrder: false,
		inStock: true,
	},
	// PlayStation 5 Console
	{
		_id: 'NG_08',
		id: '7',
		name: 'PlayStation 5 Console',
		image: IMAGES.PS5_1,
		image2: IMAGES.PS5_2,
		categoryName: 'Consoles',
		brand: 'Sony',
		ratings: '4.5',
		price: 49990,
		hasOffer: false,
		offerPrice: 49990,
		offerMessage: 'FEW LEFT!',
		preOrder: false,
		inStock: true,
	},
	// Microsoft Xbox Series X
	{
		_id: 'NG_09',
		id: '8',
		name: 'Microsoft Xbox Series X',
		image: IMAGES.XBOX1,
		image2: IMAGES.XBOX2,
		categoryName: 'Consoles',
		brand: 'Microsoft',
		ratings: '1.5',
		price: 49990,
		hasOffer: false,
		offerPrice: 49990,
		offerMessage: 'Coming Soon',
		preOrder: false,
		inStock: false,
	},
	// Nintendo Joy-Con (L/R) - Neon Red/Neon Blue
	{
		_id: 'NG_10',
		id: '9',
		name: 'Nintendo Joy-Con (L/R) - Neon Red/Neon Blue',
		image: IMAGES.NintendoSwitchJoycon1,
		image2: IMAGES.NintendoSwitchJoycon2,
		categoryName: 'Accessories',
		brand: 'Nintendo',
		ratings: '4.5',
		price: 6999,
		hasOffer: true,
		offerPrice: 5999,
		offerMessage: 'Save ₹1000',
		preOrder: false,
		inStock: true,
	},
	// PS5 Dualsense Wireless Controller Midnight Black
	{
		_id: 'NG_11',
		id: '10',
		name: 'PS5 Dualsense Wireless Controller Midnight Black',
		image: IMAGES.PS5ControllerB1,
		image2: IMAGES.PS5ControllerB2,
		categoryName: 'Accessories',
		brand: 'Sony',
		ratings: '4.5',
		price: 5990,
		hasOffer: false,
		offerPrice: 5990,
		offerMessage: '10% off for new customers',
		preOrder: false,
		inStock: true,
	},
	// PS5 Dualsense Wireless Controller Cosmic Red
	{
		_id: 'NG_12',
		id: '11',
		name: 'PS5 Dualsense Wireless Controller Cosmic Red',
		image: IMAGES.PS5ControllerR1,
		image2: IMAGES.PS5ControllerR2,
		categoryName: 'Accessories',
		brand: 'Sony',
		ratings: '4.5',
		price: 6390,
		hasOffer: false,
		offerPrice: 6390,
		offerMessage: '3 LEFT!!!',
		preOrder: false,
		inStock: true,
	},
	// Xbox Wireless Controller – Shock Blue

	{
		_id: 'NG_13',
		id: '12',
		name: 'Xbox Wireless Controller – Shock Blue',
		image: IMAGES.XboxController1,
		image2: IMAGES.XboxController2,
		categoryName: 'Accessories',
		brand: 'Microsoft',
		ratings: '4.5',
		price: 5890,
		hasOffer: false,
		offerPrice: 5890,
		offerMessage: 'PRE-ORDER NOW!',
		preOrder: true,
		inStock: false,
	},
];
