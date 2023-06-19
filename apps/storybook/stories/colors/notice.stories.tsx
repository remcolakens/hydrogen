import type { Meta, StoryObj } from '@storybook/react';
import { ColorTile } from './ColorTile';

const storyTitle = 'Colors/Notice';

const noticeColors = [
	'bg-notice-50',
	'bg-notice-100',
	'bg-notice-200',
	'bg-notice-300',
	'bg-notice-400',
	'bg-notice-500',
	'bg-notice-600',
	'bg-notice-700',
	'bg-notice-800',
	'bg-notice-900',
];

const Notice = () => {
	return (
		<div className="flex">
			<div className="w-32">
				<h4>Notice</h4>
			</div>
			<div className="grid grid-cols-10 gap-4">
				{noticeColors.map((color, index) => (
					<ColorTile key={index} color={color} />
				))}
			</div>
		</div>
	);
};

const meta: Meta<typeof Notice> = {
	component: Notice,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof Notice>;

export const notice: Story = {
	decorators: [],
	name: 'Notice',
	parameters: {},
};
