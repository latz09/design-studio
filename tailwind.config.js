const colors = {
	primary: '#18a1ad',
	secondary: '#779E43',
	dark: '#001D20',
	light: '#E4FDFF',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: colors, // This line extends the colors object with your custom colors
      fontFamily: {
        tinos: ['Tinos', 'serif'],
        mulish: ['Mulish', 'sans-serif'],
        questrial: ['Questrial', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
		},
	},

	plugins: [],
};
