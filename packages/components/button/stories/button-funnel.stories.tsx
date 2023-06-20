import { AddToBagIcon } from '@code-internet-applications/icon';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/button';

const meta: Meta<typeof Button> = {
	title: 'Buttons/Funnel',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const funnel: Story = {
	render: () => (
		<div className="grid w-full grid-cols-3 gap-4">
			<div className="flex items-center justify-center">
				<Button variant="funnel" size="sm">
					Small button
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="funnel" size="md">
					Medium button
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="funnel" size="lg">
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
				<Button variant="funnel" size="sm" disabled>
					Small button
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="funnel" size="md" disabled>
					Medium button
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="funnel" size="lg" disabled>
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
				<Button variant="funnel" size="sm">
					<AddToBagIcon className="mr-1 h-4" />
					Small button
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="funnel" size="md">
					<AddToBagIcon className="mr-2.5" />
					Medium button
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="funnel" size="lg">
					<AddToBagIcon className="mr-2.5" />
					Large button
				</Button>
			</div>
		</div>
	),
};

export const rightIcon: Story = {
	render: () => (
		<div className="grid w-full grid-cols-3 gap-4">
			<div className="flex items-center justify-center ">
				<Button variant="funnel" size="sm">
					Small button
					<AddToBagIcon className="ml-1 h-4" />
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="funnel" size="md">
					Medium button
					<AddToBagIcon className="ml-2.5" />
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="funnel" size="lg">
					Large button
					<AddToBagIcon className="ml-2.5" />
				</Button>
			</div>
		</div>
	),
};

export const icon: Story = {
	render: () => (
		<div className="grid w-full grid-cols-3 gap-4">
			<div className="flex items-center justify-center">
				<Button variant="funnel" size="sm" icon>
					<AddToBagIcon className="h-5 w-5" />
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="funnel" size="md" icon>
					<AddToBagIcon />
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<Button variant="funnel" size="lg" icon>
					<AddToBagIcon />
				</Button>
			</div>
		</div>
	),
};
