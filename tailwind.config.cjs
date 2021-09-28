module.exports = {
	mode: 'jit',
	darkMode: 'class',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-image': 'url(/hero.png)'
			}
		}
	},
	plugins: []
};
