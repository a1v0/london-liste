/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: { fraktur: ["UnifrakturMaguntia"] },
		colors: { "brand-blue": "#4175be" },
		extend: {
			maxWidth: {
				gutter: "768px",
			},
		},
	},
	plugins: [],
};
