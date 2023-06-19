import type { Meta, StoryObj } from '@storybook/react';
import { ColorTile } from './ColorTile';

const storyTitle = 'Colors/Info';

const infoColors = [
	'bg-info-50',
	'bg-info-100',
	'bg-info-200',
	'bg-info-300',
	'bg-info-400',
	'bg-info-500',
	'bg-info-600',
	'bg-info-700',
	'bg-info-800',
	'bg-info-900',
];

const Info = () => {
	return (
		<div className="flex">
			<div className="w-32">
				<h4>Info</h4>
			</div>
			<div className="grid grid-cols-10 gap-4">
				{infoColors.map((color, index) => (
					<ColorTile key={index} color={color} />
				))}
			</div>
		</div>
	);
};

const meta: Meta<typeof Info> = {
	component: Info,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof Info>;

export const info: Story = {
	decorators: [],
	name: 'Info',
	parameters: {},
};
