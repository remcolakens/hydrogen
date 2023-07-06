import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { HomepageFeaturedProductsQuery } from 'storefrontapi.generated';
import { ProductGrid } from '~/components';
import products from './data/homepageFeaturedProducts.json';

const meta: Meta<typeof ProductGrid> = {
	title: 'Hydrogen/Product Grid',
};

export default meta;
type Story = StoryObj<typeof ProductGrid>;

export const productGrid: Story = {
	render: () => (
		<BrowserRouter>
			<ProductGrid
				title="Our bestsellers"
				products={products as HomepageFeaturedProductsQuery}
				button={{
					text: 'Shop all',
					handleClick: () => console.log('Hello'),
				}}
			/>
		</BrowserRouter>
	),
};
