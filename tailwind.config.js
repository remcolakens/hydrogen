/** @type {import('tailwindcss').Config} */

module.exports = {
	// presets: [require('./packages/config/tailwind-config/tailwind.config')],
	presets: [require('@code-internet-applications/tailwind-config')],
	content: ['./**/*.{js,ts,jsx,tsx,mdx}'],
};
