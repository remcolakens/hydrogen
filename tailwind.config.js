/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('./packages/config/tailwind-config/tailwind.config')],
	content: ['./packages/components/**/*.{js,ts,jsx,tsx,mdx}'],
};
