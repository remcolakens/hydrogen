import { PRODUCT_CARD_FRAGMENT } from './fragments/product-card';

export const HOMEPAGE_FEATURED_PRODUCTS_QUERY = `#graphql
	query homepageFeaturedProducts {
		products(first: 4) {
			nodes {
				...ProductCard
			}
		}
	}
	${PRODUCT_CARD_FRAGMENT}
` as const;
