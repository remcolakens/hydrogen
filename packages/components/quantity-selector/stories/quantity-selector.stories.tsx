import type { Meta, StoryObj } from '@storybook/react';
import { QuantitySelector } from '../src/quantity-selector';

const meta: Meta<typeof QuantitySelector> = {
	title: 'Components/Quantity Selector',
};

export default meta;
type Story = StoryObj<typeof QuantitySelector>;

export const regular: Story = {
	render: () => <QuantitySelector />,
};
