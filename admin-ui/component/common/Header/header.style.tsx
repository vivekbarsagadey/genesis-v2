import { colors } from '../../../themes';

const headerstyle = {
	headercontainer: {
		backgroundColor: colors.baseBackGround,
	},
	box: {
		display: 'flex' as const,
		alignItems: 'left' as const,
		textAlign: 'center' as const,
	},
	avtar: {
		width: 32,
		height: 32,
	},
	menu: {
		height: '0.3rem',
		padding: '0.3rem',
	},
	link: {
		textDecoration: 'none',
		color: 'black',
	},
};

export { headerstyle };
