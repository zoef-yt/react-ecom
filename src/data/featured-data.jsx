import faker from 'faker';
faker.seed(123);
const featuredData = [...Array(20)].map((item) => ({
	id: faker.random.uuid(),
	name: faker.commerce.productName(),
	image: faker.random.image(),
	price: faker.commerce.price(),
	brand: faker.lorem.word(),
	inStock: faker.random.boolean(),
	fastDelivery: faker.random.boolean(),
	type: faker.random.arrayElement(['Consoles', 'Games', 'Accessories ']),
	ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
	hasOffer: faker.random.boolean(),
	offer: faker.random.arrayElement(['Save 50', '10% off', 'Buy one get one free', 'Stock clearance sale']),
	genre: faker.random.arrayElement([
		'Dance',
		'Simulation',
		'Strategy',
		'Survival',
		'Action Adventure',
		'Fighting',
		'First Person Shooter',
		'Platformer',
		'Puzzle',
		'Racing',
		'Role Playing Game',
		'Sports',
		'Stealth',
		'Survival Horror',
		'Third Person Shooter',
	]),
	color: faker.commerce.color(),
}));
export { featuredData };
