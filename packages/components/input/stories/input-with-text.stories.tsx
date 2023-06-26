import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../label/src';
import { Text } from '../../text/src';
import { Input } from '../src/input';

const meta: Meta<typeof Input> = {
	title: 'Inputs/With Text',
};

export default meta;
type Story = StoryObj<typeof Input>;

export const valid: Story = {
	render: () => (
		<div className="grid items-center gap-2">
			<Label htmlFor="email-2">Email</Label>
			<Input type="email" id="email-2" placeholder="Your email" />
			<Text size="xs">Enter your email</Text>
		</div>
	),
};

export const isInvalid: Story = {
	render: () => (
		<div className="grid items-center gap-2">
			<Label htmlFor="email-2">Email</Label>
			<Input isInvalid type="email" id="email-2" placeholder="Your email" />
			<Text className="text-notice-500" size="xs">
				Enter your email
			</Text>
		</div>
	),
};
