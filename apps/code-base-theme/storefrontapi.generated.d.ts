/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types';

export type CollectionDetailsQueryVariables = StorefrontAPI.Exact<{
	handle: StorefrontAPI.Scalars['String'];
	filters?: StorefrontAPI.InputMaybe<
		Array<StorefrontAPI.ProductFilter> | StorefrontAPI.ProductFilter
	>;
	sortKey: StorefrontAPI.ProductCollectionSortKeys;
	reverse?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Boolean']>;
	first?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']>;
	last?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']>;
	startCursor?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['String']>;
	endCursor?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['String']>;
}>;

export type CollectionDetailsQuery = {
	collection?: StorefrontAPI.Maybe<
		Pick<
			StorefrontAPI.Collection,
			'id' | 'handle' | 'title' | 'description'
		> & {
			products: {
				filters: Array<
					Pick<StorefrontAPI.Filter, 'id' | 'label' | 'type'> & {
						values: Array<
							Pick<
								StorefrontAPI.FilterValue,
								'id' | 'label' | 'count' | 'input'
							>
						>;
					}
				>;
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
				pageInfo: Pick<
					StorefrontAPI.PageInfo,
					'hasPreviousPage' | 'hasNextPage' | 'startCursor' | 'endCursor'
				>;
			};
		}
	>;
};

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
	'#graphql\n\tquery CollectionDetails(\n\t\t$handle: String!\n\t\t$filters: [ProductFilter!]\n\t\t$sortKey: ProductCollectionSortKeys!\n\t\t$reverse: Boolean\n\t\t$first: Int\n\t\t$last: Int\n\t\t$startCursor: String\n\t\t$endCursor: String\n\t) {\n\t\tcollection(handle: $handle) {\n\t\t\tid\n\t\t\thandle\n\t\t\ttitle\n\t\t\tdescription\n\t\t\tproducts(\n\t\t\t\tfirst: $first\n\t\t\t\tlast: $last\n\t\t\t\tbefore: $startCursor\n\t\t\t\tafter: $endCursor\n\t\t\t\tfilters: $filters\n\t\t\t\tsortKey: $sortKey\n\t\t\t\treverse: $reverse\n\t\t\t) {\n\t\t\t\tfilters {\n\t\t\t\t\tid\n\t\t\t\t\tlabel\n\t\t\t\t\ttype\n\t\t\t\t\tvalues {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tlabel\n\t\t\t\t\t\tcount\n\t\t\t\t\t\tinput\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tnodes {\n\t\t\t\t\t...ProductCard\n\t\t\t\t}\n\t\t\t\tpageInfo {\n\t\t\t\t\thasPreviousPage\n\t\t\t\t\thasNextPage\n\t\t\t\t\tstartCursor\n\t\t\t\t\tendCursor\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t#graphql\n\tfragment ProductCard on Product {\n\t\tid\n\t\ttitle\n\t\thandle\n\t\tvendor\n\t\tvariants(first: 1) {\n\t\t\tnodes {\n\t\t\t\tid\n\t\t\t\tprice {\n\t\t\t\t\tamount\n\t\t\t\t\tcurrencyCode\n\t\t\t\t}\n\t\t\t\tcompareAtPrice {\n\t\t\t\t\tamount\n\t\t\t\t\tcurrencyCode\n\t\t\t\t}\n\t\t\t\tproduct {\n\t\t\t\t\thandle\n\t\t\t\t\ttitle\n\t\t\t\t\ttags\n\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\t...ProductCardImage\n\t\t\t\t\t}\n\t\t\t\t\timages(first: 2) {\n\t\t\t\t\t\tnodes {\n\t\t\t\t\t\t\t...ProductCardImage\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t#graphql\n\tfragment ProductCardImage on Image {\n\t\turl\n\t\taltText\n\t\twidth\n\t\theight\n\t}\n\n\n': {
		return: CollectionDetailsQuery;
		variables: CollectionDetailsQueryVariables;
	};
	'#graphql\n\tquery homepageFeaturedProducts {\n\t\tproducts(first: 4) {\n\t\t\tnodes {\n\t\t\t\t...ProductCard\n\t\t\t}\n\t\t}\n\t}\n\t#graphql\n\tfragment ProductCard on Product {\n\t\tid\n\t\ttitle\n\t\thandle\n\t\tvendor\n\t\tvariants(first: 1) {\n\t\t\tnodes {\n\t\t\t\tid\n\t\t\t\tprice {\n\t\t\t\t\tamount\n\t\t\t\t\tcurrencyCode\n\t\t\t\t}\n\t\t\t\tcompareAtPrice {\n\t\t\t\t\tamount\n\t\t\t\t\tcurrencyCode\n\t\t\t\t}\n\t\t\t\tproduct {\n\t\t\t\t\thandle\n\t\t\t\t\ttitle\n\t\t\t\t\ttags\n\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\t...ProductCardImage\n\t\t\t\t\t}\n\t\t\t\t\timages(first: 2) {\n\t\t\t\t\t\tnodes {\n\t\t\t\t\t\t\t...ProductCardImage\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t#graphql\n\tfragment ProductCardImage on Image {\n\t\turl\n\t\taltText\n\t\twidth\n\t\theight\n\t}\n\n\n': {
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
