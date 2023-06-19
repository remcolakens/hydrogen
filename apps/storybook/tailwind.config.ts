import type { Config } from 'tailwindcss';
import { tailwindConfig } from '../../packages/config/tailwind-config/tailwind.config';

export default {
	presets: [tailwindConfig],
	content: [
		// storybook components
		'./stories/**/*.stories.{js,ts,jsx,tsx}',
		'./stories/**/*.{js,ts,jsx,tsx}',

		// monorepo components
		'../../packages/components/icon/src/ikonate/*.{js,ts,jsx,tsx}',
		'../../packages/components/**/src/*.{js,ts,jsx,tsx}',
		'../../packages/components/**/stories/*.stories.{js,ts,jsx,tsx}',
		'../../packages/components/**/stories/*.{js,ts,jsx,tsx}',

		// code base theme specific components
		'../code-base-theme/app/components/**/**/src/*.{js,jsx,ts,tsx}',
		'../code-base-theme/app/components/**/stories/*.stories.{js,jsx,ts,tsx}',
	],
} satisfies Config;
