const baseStyle = {
	display: { display: 'flex' },

	flex: {
		Col: { display: 'flex', flexDirection: 'column' },
		Row: { display: 'flex', flexDirection: 'row' },
	},

	row: {
		around: { flexDirection: 'row', justifyContent: 'space-around' },
		between: { flexDirection: 'row', justifyContent: 'space-between' },
		evenly: { flexDirection: 'row', justifyContent: 'space-evenly' },
	},

	rowAlignItem: {
		center: { flexDirection: 'row', alignItems: 'center' },
		stretch: { flexDirection: 'row', alignItems: 'stretch' },
	},

	col: {
		Around: { flexDirection: 'column', justifyContent: 'space-around' },
		between: { flexDirection: 'column', justifyContent: 'space-between' },
		evenly: { flexDirection: 'column', justifyContent: 'space-evenly' },
	},

	colAlignContent: {
		Center: { flexDirection: 'column', alignContent: 'center' },
		Around: { flexDirection: 'column', alignContent: 'space-around' },
		Between: { flexDirection: 'column', alignContent: 'space-between' },
	},

	textAlign: {
		center: { textAlign: 'center' },
		justify: { textAlign: 'justify' },
		left: { textAlign: 'left' },
		right: { textAlign: 'right' },
	},

	Width: {
		full: { width: '100%' },
		half: { width: '50%' },
	},

	Height: {
		full: { height: '100%' },
		half: { height: '50%' },
	},

	position: {
		abs: { position: 'absolute' },
		rel: { position: 'relative' },
	},

	textTransForm: {
		cap: { textTransform: 'capitalize' },
		upper: { textTransform: 'uppercase' },
		low: { textTransform: 'lowercase' },
	},

	backgroundSize: {
		Contain: { backgroundSize: 'contain' },
		Cover: { backgroundSize: 'cover' },
		Length: { backgroundSize: 'length' },
	},

	cursorPoint: { cursor: 'pointer' },

	borderRadius: {
		full: '100',
		semi: '75',
		low: '50%',
		normal: '20px',
	},

	textDecoration: {
		none: { textDecoration: 'none' },
		underline: { textDecoration: 'underline' },
		overline: { textDecoration: 'overline' },
		lineThrough: { textDecoration: 'line-through' },
	},
};

export { baseStyle };
