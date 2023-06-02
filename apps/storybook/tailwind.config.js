// import tailwindConfig from '../../packages/config/tailwind-config/tailwind.config';
import tailwindConfig from '@code-internet-applications/tailwind-config';

/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [tailwindConfig],
	content: ['../../packages/components/**/*.{js,ts,jsx,tsx,mdx}'],
};
