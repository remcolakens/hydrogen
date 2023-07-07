import { HomepageFeaturedProductsQuery } from 'storefrontapi.generated';
import { IProductCardProps } from '~/types';

const productGridMapper = ({
	products,
}: HomepageFeaturedProductsQuery): IProductCardProps[] => {
	return products.nodes.map((product) => {
		const {
			id,
			vendor,
			handle,
			title,
			variants: {
				nodes: [variant],
			},
		} = product;

		const { price, compareAtPrice, product: variantProduct } = variant;

		return {
			id,
			brand: vendor,
			url: `/products/${handle}`,
			name: title,
			price: {
				orginal: parseFloat(price.amount),
				discount: compareAtPrice
					? parseFloat(compareAtPrice.amount)
					: undefined,
			},
			badges: compareAtPrice ? [{ id: product.id, name: 'Sale' }] : [],
			featuredImage: variantProduct.featuredImage ?? undefined,
			images: variantProduct.images.nodes,
		};
	});
};

export { productGridMapper };
