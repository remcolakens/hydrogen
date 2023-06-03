import type { Config } from 'tailwindcss';

export default {
	presets: [require('../../packages/config/tailwind-config/tailwind.config')],
	content: [
		'../../packages/**/**/*.{js,ts,jsx,tsx,mdx}',
		'../../packages/**/**/**/*.{js,ts,jsx,tsx,mdx}',
	],
} satisfies Config;
