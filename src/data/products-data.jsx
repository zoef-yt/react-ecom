import faker from 'faker';
import IMAGES from '../assets/images';
faker.seed(13);

const genres = [
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
];
const types = ['Consoles', 'Games', 'Accessories '];

export { genres, types };
