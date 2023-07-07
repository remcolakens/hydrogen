import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '~/components';

const meta: Meta<typeof Footer> = {
	title: 'Hydrogen/Footer',
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const footer: Story = {
	render: () => (
		<BrowserRouter>
			<Footer
				title="Code Shop is the best Shopify Plus Shop"
				description="Lorem ipsum dolor sit amet consectetur. Nunc egestas at nibh quisque ornare nulla semper id."
			/>
		</BrowserRouter>
	),
};
