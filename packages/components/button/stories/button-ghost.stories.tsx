import { BagIcon } from '@code-internet-applications/icon';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/button';

const meta: Meta<typeof Button> = {
	title: 'Buttons/Ghost',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ghost: Story = {
	render: () => (
		<div className="grid w-full grid-cols-3 gap-4">
			<div className="flex items-center justify-center">
				<Button variant="ghost" size="sm">
					Small button
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="ghost" size="md">
					Medium button
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="ghost" size="lg">
					Large button
				</Button>
			</div>
		</div>
	),
};

export const disabled: Story = {
	render: () => (
		<div className="grid w-full grid-cols-3 gap-4">
			<div className="flex items-center justify-center">
				<Button variant="ghost" size="sm" disabled>
					Small button
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="ghost" size="md" disabled>
					Medium button
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="ghost" size="lg" disabled>
					Large button
				</Button>
			</div>
		</div>
	),
};

export const leftIcon: Story = {
	render: () => (
		<div className="grid w-full grid-cols-3 gap-4">
			<div className="flex items-center justify-center">
				<Button variant="ghost" size="sm">
					<BagIcon className="mr-1 h-4" />
					Small button
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="ghost" size="md">
					<BagIcon className="mr-2.5" />
					Medium button
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="ghost" size="lg">
					<BagIcon className="mr-2.5" />
					Large button
				</Button>
			</div>
		</div>
	),
};

export const rightIcon: Story = {
	render: () => (
		<div className="grid w-full grid-cols-3 gap-4">
			<div className="flex items-center justify-center">
				<Button variant="ghost" size="sm">
					Small button
					<BagIcon className="ml-1 h-4" />
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="ghost" size="md">
					Medium button
					<BagIcon className="ml-2.5" />
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="ghost" size="lg">
					Large button
					<BagIcon className="ml-2.5" />
				</Button>
			</div>
		</div>
	),
};

export const icon: Story = {
	render: () => (
		<div className="grid w-full grid-cols-3 gap-4">
			<div className="flex items-center justify-center">
				<Button variant="ghost" size="sm" icon>
					<BagIcon className="h-5 w-5" />
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="ghost" size="md" icon>
					<BagIcon />
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="ghost" size="lg" icon>
					<BagIcon />
				</Button>
			</div>
		</div>
	),
};
