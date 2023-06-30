import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '~/components';

const meta: Meta<typeof Footer> = {
	title: 'Hydrogen/Footer',
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const footer: Story = {
	render: () => (
		<Footer
			title="Code Shop is the best Shopify Plus Shop"
			description="Lorem ipsum dolor sit amet consectetur. Nunc egestas at nibh quisque ornare nulla semper id."
		/>
	),
};
