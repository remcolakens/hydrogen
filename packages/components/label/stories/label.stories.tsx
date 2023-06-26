import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../src/label';

const meta: Meta<typeof Label> = {
	title: 'Components/Label',
};

export default meta;
type Story = StoryObj<typeof Label>;

export const primary: Story = {
	render: () => <Label htmlFor="terms">Accept terms and conditions</Label>,
};
