import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductCard } from '~/components';
import type { IProductCardProps } from '~/types';

const meta: Meta<typeof ProductCard> = {
	title: 'Hydrogen/Product Card',
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

const product: IProductCardProps = {
	id: 'gid://shopify/Product/989531616',
	brand: 'Code Shop',
	name: 'Code Hoodie with a long name',
	url: './products/code-hoodie-with-a-long-name',
	price: {
		orginal: 45,
	},
	badges: [
		{
			id: 'gid://shopify/Badge/989531616',
			name: 'New',
		},
	],
	featuredImage: {
		width: 3908,
		height: 3908,
		url: 'https://cdn.shopify.com/s/files/1/0551/4566/0472/products/Main.jpg?v=1655932274',
	},
	images: [
		{
			width: 3097,
			height: 3908,
			url: 'https://cdn.shopify.com/s/files/1/0551/4566/0472/products/PDP1.jpg?v=1655932274',
		},
		{
			width: 3097,
			height: 3908,
			url: 'https://cdn.shopify.com/s/files/1/0551/4566/0472/products/PDP2.jpg?v=1655932274',
		},
	],
};

export const productCard: Story = {
	render: () => (
		<BrowserRouter>
			<div className="w-80">
				<ProductCard {...product} />
			</div>
		</BrowserRouter>
	),
};
