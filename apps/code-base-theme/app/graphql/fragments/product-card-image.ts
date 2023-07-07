export const PRODUCT_CARD_IMAGE_FRAGMENT = `#graphql
	fragment ProductCardImage on Image {
		url
		altText
		width
		height
	}
` as const;
