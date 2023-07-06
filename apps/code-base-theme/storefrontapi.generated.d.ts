/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types';

export type ProductCardImageFragment = Pick<
	StorefrontAPI.Image,
	'url' | 'altText' | 'width' | 'height'
>;

export type ProductCardFragment = Pick<
	StorefrontAPI.Product,
	'id' | 'title' | 'handle' | 'vendor'
> & {
	variants: {
		nodes: Array<
			Pick<StorefrontAPI.ProductVariant, 'id'> & {
				price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
				compareAtPrice?: StorefrontAPI.Maybe<
					Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
				>;
				product: Pick<StorefrontAPI.Product, 'handle' | 'title' | 'tags'> & {
					featuredImage?: StorefrontAPI.Maybe<
						Pick<StorefrontAPI.Image, 'url' | 'altText' | 'width' | 'height'>
					>;
					images: {
						nodes: Array<
							Pick<StorefrontAPI.Image, 'url' | 'altText' | 'width' | 'height'>
						>;
					};
				};
			}
		>;
	};
};

export type HomepageFeaturedProductsQueryVariables = StorefrontAPI.Exact<{
	[key: string]: never;
}>;

export type HomepageFeaturedProductsQuery = {
	products: {
		nodes: Array<
			Pick<StorefrontAPI.Product, 'id' | 'title' | 'handle' | 'vendor'> & {
				variants: {
					nodes: Array<
						Pick<StorefrontAPI.ProductVariant, 'id'> & {
							price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
							compareAtPrice?: StorefrontAPI.Maybe<
								Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
							>;
							product: Pick<
								StorefrontAPI.Product,
								'handle' | 'title' | 'tags'
							> & {
								featuredImage?: StorefrontAPI.Maybe<
									Pick<
										StorefrontAPI.Image,
										'url' | 'altText' | 'width' | 'height'
									>
								>;
								images: {
									nodes: Array<
										Pick<
											StorefrontAPI.Image,
											'url' | 'altText' | 'width' | 'height'
										>
									>;
								};
							};
						}
					>;
				};
			}
		>;
	};
};

export type LayoutQueryVariables = StorefrontAPI.Exact<{
	[key: string]: never;
}>;

export type LayoutQuery = {
	shop: Pick<StorefrontAPI.Shop, 'name' | 'description'>;
};

interface GeneratedQueryTypes {
	'\n\t#graphql\n\tquery homepageFeaturedProducts {\n\t\tproducts(first: 4) {\n\t\t\tnodes {\n\t\t\t\t...ProductCard\n\t\t\t}\n\t\t}\n\t}\n\t#REQUIRED_VAR=PRODUCT_CARD_FRAGMENT\n': {
		return: HomepageFeaturedProductsQuery;
		variables: HomepageFeaturedProductsQueryVariables;
	};
	'#graphql\n  query layout {\n    shop {\n      name\n      description\n    }\n  }\n': {
		return: LayoutQuery;
		variables: LayoutQueryVariables;
	};
}

interface GeneratedMutationTypes {}

declare module '@shopify/hydrogen' {
	interface StorefrontQueries extends GeneratedQueryTypes {}
	interface StorefrontMutations extends GeneratedMutationTypes {}
}
