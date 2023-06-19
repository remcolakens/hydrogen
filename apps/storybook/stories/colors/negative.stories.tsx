import type { Meta, StoryObj } from '@storybook/react';
import { ColorTile } from './ColorTile';

const storyTitle = 'Colors/Negative';

const negativeColors = [
	'bg-negative-50',
	'bg-negative-100',
	'bg-negative-200',
	'bg-negative-300',
	'bg-negative-400',
	'bg-negative-500',
	'bg-negative-600',
	'bg-negative-700',
	'bg-negative-800',
	'bg-negative-900',
];

const Negative = () => {
	return (
		<div className="flex">
			<div className="w-32">
				<h4>Negative</h4>
			</div>
			<div className="grid grid-cols-10 gap-4">
				{negativeColors.map((color, index) => (
					<ColorTile key={index} color={color} />
				))}
			</div>
		</div>
	);
};

const meta: Meta<typeof Negative> = {
	component: Negative,
	title: storyTitle,
};

export default meta;
type Story = StoryObj<typeof Negative>;

export const negative: Story = {
	decorators: [],
	name: 'Negative',
	parameters: {},
};
