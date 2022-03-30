module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {
			colors: {
				jewel: {
					50: '#edfcf4',
					100: '#d4f7e3',
					200: '#adedcd',
					300: '#77deb0',
					400: '#40c78f',
					500: '#1dac76',
					600: '#108b5f',
					700: '#0d6f4e',
					800: '#0e6246',
					900: '#0b4935'
				},
				'storm-gray': {
					50: '#fafafa',
					100: '#f4f4f5',
					200: '#e3e4e8',
					300: '#d3d4d9',
					400: '#9fa1ac',
					500: '#787a87',
					600: '#50525d',
					700: '#3d3e48',
					800: '#26272b',
					900: '#17181c'
				}
			},
			gridTemplateRows: {
				// Simple 8 row grid
				8: 'repeat(8, minmax(0, 1fr))',

				// Complex site-specific row configuration
				column: 'auto 1fr auto'
			}
		}
	},
	plugins: []
};
