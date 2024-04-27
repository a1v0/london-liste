/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: { serif: ["Bodoni Moda", "serif"] },
		colors: { emerald: "#004d24" },
		extend: {},
	},
	plugins: [],
};
