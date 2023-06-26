import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../label/src';
import { Input } from '../src/input';

const meta: Meta<typeof Input> = {
	title: 'Inputs/With Label',
};

export default meta;
type Story = StoryObj<typeof Input>;

export const valid: Story = {
	render: () => (
		<div className="grid items-center gap-2">
			<Label htmlFor="nameLabel">Email</Label>
			<Input type="email" id="nameLabel" placeholder="Your email" />
		</div>
	),
};
export const IsInvalid: Story = {
	render: () => (
		<div className="grid items-center gap-2">
			<Label htmlFor="nameLabel">Email</Label>
			<Input isInvalid type="email" id="nameLabel" placeholder="Your email" />
		</div>
	),
};
