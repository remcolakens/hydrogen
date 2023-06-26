import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/input';

const meta: Meta<typeof Input> = {
	title: 'Inputs/Input',
};

export default meta;
type Story = StoryObj<typeof Input>;

export const valid: Story = {
	render: () => <Input type="email" placeholder="Your email" />,
};

export const isInvalid: Story = {
	render: () => <Input type="email" placeholder="Your email" isInvalid />,
};
