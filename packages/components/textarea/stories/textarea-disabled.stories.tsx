import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../src';

const meta: Meta<typeof Textarea> = {
	title: 'Textarea/Disabled',
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const disabled: Story = {
	render: () => (
		<Textarea id="message" placeholder="Type your message here." disabled />
	),
};
