/*
Thanks to Samuel Thornton.
https://codepen.io/sdthornton/pen/wBZdXq
*/
export const materialDesignCards = {
	card1: {
		boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
		transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
		'&:hover': {
			cursor: 'pointer',
			boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
		}
	},
	card2: {
		boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
	},
	card1to2: {
		boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
		transition: 'all .2s cubic-bezier(.25,.8,.25,1)',
		'&:hover': {
			cursor: 'pointer',
			boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
		}
	}
}

export const getBorder = (width = 1, color = 'lightgray') => [width, 'solid', color];

export const flexUtils = {
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}

export const createBackground = (size = 'cover') => ({
	backgroundSize: size,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center'
});

export const pixelsToRem = pixels => `${pixels / 16}rem`;
