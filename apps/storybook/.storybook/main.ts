import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	framework: '@storybook/react-vite',
	stories: [
		// storybook
		'../stories/**/*.mdx',
		'../stories/**/*.stories.tsx',

		// code-base-theme
		'../../code-base-theme/app/components/**/stories/*.stories.tsx',

		// monorepo packages
		'../../../packages/components/*/stories/*.mdx',
		'../../../packages/components/*/stories/*.stories.tsx',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	docs: {
		autodocs: 'tag',
	},
};

export default config;
