/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: { logo: ["'Permanent Marker'"] },
		colors: { "brand-blue": "#4175be", "light-grey": "#cbe2ed" },
		extend: {
			maxWidth: {
				gutter: "768px",
			},
		},
	},
	plugins: [],
};
