import tailwindConfig from '@code-internet-applications/tailwind-config';

/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [tailwindConfig],
	content: ['./packages/components/**/*.{js,ts,jsx,tsx,mdx}'],
};
