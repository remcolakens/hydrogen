import type { Meta, StoryObj } from '@storybook/react';
import { ColorTile } from './ColorTile';

const storyTitle = 'Colors/Tertiary';

const tertiaryColors = [
	'bg-tertiary-50',
	'bg-tertiary-100',
	'bg-tertiary-200',
	'bg-tertiary-300',
	'bg-tertiary-400',
	'bg-tertiary-500',
	'bg-tertiary-600',
	'bg-tertiary-700',
	'bg-tertiary-800',
	'bg-tertiary-900',
];

const Tertiary = () => {
	return (
		<div className="flex">
			<div className="w-32">
				<h4>Tertiary</h4>
			</div>
			<div className="grid grid-cols-10 gap-4">
				{tertiaryColors.map((color, index) => (
					<ColorTile key={index} color={color} />
				))}
			</div>
		</div>
	);
};

const meta: Meta<typeof Tertiary> = {
	component: Tertiary,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof Tertiary>;

export const tertiary: Story = {
	decorators: [],
	name: 'Tertiary',
	parameters: {},
};
