module.exports = {
	content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
	],
	theme:
	{
	  extend: {
		fontFamily: {
			'sans':['Poppins'],
			'roby': ['Roboto']
		},
		
		colors: {
			'black': {
				100: "#0C0C0C",
				200: "#0F0F0F",
				300: "#131313"
			},
			'purple': {
				100: "#7456FF",
				200: "#8368FF",
				300: "#A693FF"
			},
			'silver': {
				100: "#707070",
				200: "#999999"
			}
		},
	  },
	},
	plugins: [],
  }