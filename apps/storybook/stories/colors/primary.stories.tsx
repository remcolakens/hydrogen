import type { Meta, StoryObj } from '@storybook/react';
import { ColorTile } from './ColorTile';

const storyTitle = 'Colors/Primary';

const primaryColors = [
	'bg-primary-50',
	'bg-primary-100',
	'bg-primary-200',
	'bg-primary-300',
	'bg-primary-400',
	'bg-primary-500',
	'bg-primary-600',
	'bg-primary-700',
	'bg-primary-800',
	'bg-primary-900',
];

const Primary = () => {
	return (
		<div className="flex">
			<div className="w-32">
				<h4>Primary</h4>
			</div>
			<div className="grid grid-cols-10 gap-4">
				{primaryColors.map((color, index) => (
					<ColorTile key={index} color={color} />
				))}
			</div>
		</div>
	);
};

const meta: Meta<typeof Primary> = {
	component: Primary,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof Primary>;

export const primary: Story = {
	decorators: [],
	name: 'Primary',
	parameters: {},
};
