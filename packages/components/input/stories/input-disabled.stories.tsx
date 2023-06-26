import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/input';

const meta: Meta<typeof Input> = {
	title: 'Inputs/Disabled',
};

export default meta;
type Story = StoryObj<typeof Input>;

export const disabled: Story = {
	render: () => <Input type="email" placeholder="Your email" disabled />,
};
