module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins : []
	// purge: {  content: ['./public/**/*.html', './src/**/*.vue'] }
	// purge: ['./index.html', './src/**/*.{vue,js}'],
};
