import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../src/textarea';

const meta: Meta<typeof Textarea> = {
	title: 'Textarea/Textarea',
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const valid: Story = {
	render: () => <Textarea placeholder="Type your message here." />,
};

export const isInvalid: Story = {
	render: () => <Textarea placeholder="Type your message here." isInvalid />,
};
