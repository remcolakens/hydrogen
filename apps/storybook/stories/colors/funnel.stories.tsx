import type { Meta, StoryObj } from '@storybook/react';
import { ColorTile } from './ColorTile';

const storyTitle = 'Colors/Funnel';

const funnelColors = [
	'bg-funnel-50',
	'bg-funnel-100',
	'bg-funnel-200',
	'bg-funnel-300',
	'bg-funnel-400',
	'bg-funnel-500',
	'bg-funnel-600',
	'bg-funnel-700',
	'bg-funnel-800',
	'bg-funnel-900',
];

const Funnel = () => {
	return (
		<div className="flex">
			<div className="w-32">
				<h4>Funnel</h4>
			</div>
			<div className="grid grid-cols-10 gap-4">
				{funnelColors.map((color, index) => (
					<ColorTile key={index} color={color} />
				))}
			</div>
		</div>
	);
};

const meta: Meta<typeof Funnel> = {
	component: Funnel,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof Funnel>;

export const funnel: Story = {
	decorators: [],
	name: 'Funnel',
	parameters: {},
};
