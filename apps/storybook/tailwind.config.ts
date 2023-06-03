import type { Config } from 'tailwindcss';
import { tailwindConfig } from '../../packages/config/tailwind-config/tailwind.config';

export default {
	presets: [tailwindConfig],
	content: [
		'../../packages/**/**/*.{js,ts,jsx,tsx,mdx}',
		'../../packages/**/**/**/*.{js,ts,jsx,tsx,mdx}',
	],
} satisfies Config;
