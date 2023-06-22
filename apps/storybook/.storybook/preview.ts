import { Preview } from '@storybook/react';
import './tailwind.css';

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
