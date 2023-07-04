import type { Meta, StoryObj } from '@storybook/react';
import { TextBlock } from '~/components';

const meta: Meta<typeof TextBlock> = {
	title: 'Hydrogen/Text Block',
};

export default meta;
type Story = StoryObj<typeof TextBlock>;

export const textBlock: Story = {
	render: () => (
		<TextBlock
			title="Say hello to Code Shop. A new kinda Shop."
			description="In our world, everything is always moving. And so has Code, for over 15
	years. Occasionally we re-invent ourselves and a couple of years ago we
	embraced Shopify — the worlds fastest-growing, SaaS-powered e-commerce
	platform."
		/>
	),
};
