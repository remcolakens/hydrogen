import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../label/src';
import { Text } from '../../text/src';
import { Textarea } from '../src';

const meta: Meta<typeof Textarea> = {
	title: 'Textarea/With Text',
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const valid: Story = {
	render: () => (
		<div className="grid items-center gap-2">
			<Label htmlFor="message">Message</Label>
			<Textarea id="message" placeholder="Type your message here." />
			<Text size="xs">Enter your message</Text>
		</div>
	),
};

export const isInvalid: Story = {
	render: () => (
		<div className="grid items-center gap-2">
			<Label htmlFor="message">Message</Label>
			<Textarea isInvalid id="message" placeholder="Type your message here." />
			<Text className="text-notice-500" size="xs">
				Enter your message
			</Text>
		</div>
	),
};
