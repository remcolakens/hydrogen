import type { Meta, StoryObj } from '@storybook/react';
import { ColorTile } from './ColorTile';

const storyTitle = 'Colors/Positive';

const positiveColors = [
	'bg-positive-50',
	'bg-positive-100',
	'bg-positive-200',
	'bg-positive-300',
	'bg-positive-400',
	'bg-positive-500',
	'bg-positive-600',
	'bg-positive-700',
	'bg-positive-800',
	'bg-positive-900',
];

const Positive = () => {
	return (
		<div className="flex">
			<div className="w-32">
				<h4>Positive</h4>
			</div>
			<div className="grid grid-cols-10 gap-4">
				{positiveColors.map((color, index) => (
					<ColorTile key={index} color={color} />
				))}
			</div>
		</div>
	);
};

const meta: Meta<typeof Positive> = {
	component: Positive,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof Positive>;

export const positive: Story = {
	decorators: [],
	name: 'Positive',
	parameters: {},
};
