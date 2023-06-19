import type { Meta, StoryObj } from '@storybook/react';
import { ColorTile } from './ColorTile';

const storyTitle = 'Colors/Gray';

const grayColors = [
	'bg-gray-50',
	'bg-gray-100',
	'bg-gray-200',
	'bg-gray-300',
	'bg-gray-400',
	'bg-gray-500',
	'bg-gray-600',
	'bg-gray-700',
	'bg-gray-800',
	'bg-gray-900',
];

const Gray = () => {
	return (
		<div className="flex">
			<div className="w-32">
				<h4>Gray</h4>
			</div>
			<div className="grid grid-cols-10 gap-4">
				{grayColors.map((color, index) => (
					<ColorTile key={index} color={color} />
				))}
			</div>
		</div>
	);
};

const meta: Meta<typeof Gray> = {
	component: Gray,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof Gray>;

export const gray: Story = {
	decorators: [],
	name: 'Gray',
	parameters: {},
};
