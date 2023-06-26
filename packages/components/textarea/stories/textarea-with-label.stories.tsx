import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../label/src';
import { Textarea } from '../src';

const meta: Meta<typeof Textarea> = {
	title: 'Textarea/With Label',
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const valid: Story = {
	render: () => (
		<div className="grid items-center gap-2">
			<Label htmlFor="message">Message</Label>
			<Textarea id="message" placeholder="Type your message here." />
		</div>
	),
};
export const IsInvalid: Story = {
	render: () => (
		<div className="grid items-center gap-2">
			<Label htmlFor="message">Message</Label>
			<Textarea id="message" placeholder="Type your message here." isInvalid />
		</div>
	),
};
