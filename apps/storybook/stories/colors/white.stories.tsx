import type { Meta, StoryObj } from '@storybook/react';
import { ColorTile } from './ColorTile';

const storyTitle = 'Colors/White';

const whiteColors = ['bg-white'];

const White = () => {
	return (
		<div className="flex">
			<div className="w-32">
				<h4>White</h4>
			</div>
			<div className="grid grid-cols-10 gap-4">
				{whiteColors.map((color, index) => (
					<ColorTile key={index} color={color} border />
				))}
			</div>
		</div>
	);
};

const meta: Meta<typeof White> = {
	component: White,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof White>;

export const white: Story = {
	decorators: [],
	name: 'White',
	parameters: {},
};
