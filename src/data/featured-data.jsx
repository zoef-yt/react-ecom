import faker from 'faker';
faker.seed(123);
const featuredData = [...Array(20)].map((item) => ({
	id: faker.random.uuid(),
	name: faker.commerce.productName(),
	image: faker.random.image(),
	inStock: faker.random.boolean(),
	type: faker.random.arrayElement(['Consoles', 'Games', 'Accessories ']),
	hasOffer: faker.random.boolean(),
	offer: faker.random.arrayElement(['Save $20', '10% off', 'Buy one get one free', 'Stock clearance sale ']),

	//! COMMENTED FOR FUTURE
	// ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
	// brand: faker.lorem.word(),
	// fastDelivery: faker.random.boolean(),
	// price: faker.commerce.price(),
	// genre: faker.random.arrayElement([
	// 	'Dance',
	// 	'Simulation',
	// 	'Strategy',
	// 	'Survival',
	// 	'Action Adventure',
	// 	'Fighting',
	// 	'First Person Shooter',
	// 	'Platformer',
	// 	'Puzzle',
	// 	'Racing',
	// 	'Role Playing Game',
	// 	'Sports',
	// 	'Stealth',
	// 	'Survival Horror',
	// 	'Third Person Shooter',
	// ]),
}));
export { featuredData };
