import type { Meta, StoryObj } from '@storybook/react';
import { ColorTile } from './ColorTile';

const storyTitle = 'Colors/Secondary';

const secondaryColors = [
	'bg-secondary-50',
	'bg-secondary-100',
	'bg-secondary-200',
	'bg-secondary-300',
	'bg-secondary-400',
	'bg-secondary-500',
	'bg-secondary-600',
	'bg-secondary-700',
	'bg-secondary-800',
	'bg-secondary-900',
];

const Secondary = () => {
	return (
		<div className="flex">
			<div className="w-32">
				<h4>Secondary</h4>
			</div>
			<div className="grid grid-cols-10 gap-4">
				{secondaryColors.map((color, index) => (
					<ColorTile key={index} color={color} />
				))}
			</div>
		</div>
	);
};

const meta: Meta<typeof Secondary> = {
	component: Secondary,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof Secondary>;

export const secondary: Story = {
	decorators: [],
	name: 'Secondary',
	parameters: {},
};
