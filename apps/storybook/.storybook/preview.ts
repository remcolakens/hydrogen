import { Preview } from '@storybook/react';
import '../../../packages/config/tailwind-config/tailwind.css';

const preview: Preview = {
	parameters: {
		options: {
			storySort: {
				order: [
					'Colors',
					[
						'Black',
						'White',
						'Gray',
						'Primary',
						'Secondary',
						'Tertiary',
						'Funnel',
						'Positive',
						'Negative',
						'Info',
						'Notice',
					],
					'Grid',
					'Typography',
					'Icons',
					[
						'Primary',
						'Secondary',
						'USP',
						'Payment',
						'Social Media',
						'Flag',
						'Icons',
					],
					'Buttons',
					['Primary', 'Secondary', 'Outline', 'Funnel', 'Ghost'],
					'Badge',
					['Primary', 'Outline'],
					'Inputs',
					[
						'Input',
						'Disabled',
						'With Label',
						'With Text',
						'With Button',
						'With Element',
					],
					'Select',
					['Select', 'Disabled', 'With Label', 'With Text'],
					'Textarea',
					['Textarea', 'Disabled', 'Upload', 'With Label', 'With Text'],
					'Components',
				],
			},
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
