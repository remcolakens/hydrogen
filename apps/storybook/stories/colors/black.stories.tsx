import type { Meta, StoryObj } from '@storybook/react';
import { ColorTile } from './ColorTile';

const storyTitle = 'Colors/Black';

const blackColors = ['bg-black'];

const Black = () => {
	return (
		<div className="flex">
			<div className="w-32">
				<h4>Black</h4>
			</div>
			<div className="grid grid-cols-10 gap-4">
				{blackColors.map((color, index) => (
					<ColorTile key={index} color={color} />
				))}
			</div>
		</div>
	);
};

const meta: Meta = {
	component: Black,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof Black>;

export const black: Story = {
	decorators: [],
	name: 'Black',
	parameters: {},
};
