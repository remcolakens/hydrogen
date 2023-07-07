import { PRODUCT_CARD_IMAGE_FRAGMENT } from './product-card-image';

export const PRODUCT_CARD_FRAGMENT = `#graphql
	fragment ProductCard on Product {
		id
		title
		handle
		vendor
		variants(first: 1) {
			nodes {
				id
				price {
					amount
					currencyCode
				}
				compareAtPrice {
					amount
					currencyCode
				}
				product {
					handle
					title
					tags
					featuredImage {
						...ProductCardImage
					}
					images(first: 2) {
						nodes {
							...ProductCardImage
						}
					}
				}
			}
		}
	}
	${PRODUCT_CARD_IMAGE_FRAGMENT}
` as const;
