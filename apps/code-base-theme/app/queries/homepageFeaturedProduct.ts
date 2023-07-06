import gql from 'graphql-tag';

export const PRODUCT_CARD_IMAGE_FRAGMENT = gql`
	fragment ProductCardImage on Image {
		url
		altText
		width
		height
	}
`;

export const PRODUCT_CARD_FRAGMENT = gql`
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
`;

export const HOMEPAGE_FEATURED_PRODUCTS_QUERY = gql`
	query homepageFeaturedProducts {
		products(first: 4) {
			nodes {
				...ProductCard
			}
		}
	}
	${PRODUCT_CARD_FRAGMENT}
`;
