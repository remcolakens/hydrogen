import type { Config } from 'tailwindcss';
import { tailwindConfig } from '../../packages/config/tailwind-config/tailwind.config';

export default {
	presets: [tailwindConfig],
	content: [
		// monorepo components
		'../../packages/components/**/src/*.{js,ts,jsx,tsx}',
		'../../packages/utilities/tailwind-utils/src/styles/*.{js,ts,jsx,tsx}',

		// code base theme specific components
		'./app/components/**/*.{js,jsx,ts,tsx}',
		'./app/routes/*.{js,jsx,ts,tsx}',
	],
} satisfies Config;
