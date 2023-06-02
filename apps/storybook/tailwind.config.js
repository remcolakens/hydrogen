/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('../../packages/config/tailwind-config/tailwind.config')],
	content: [
		'../../packages/**/**/*.{js,ts,jsx,tsx,mdx}',
		'../../packages/**/**/**/*.{js,ts,jsx,tsx,mdx}',
	],
};
