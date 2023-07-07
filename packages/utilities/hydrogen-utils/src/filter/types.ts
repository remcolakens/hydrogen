import type { ProductCollectionSortKeys } from '@shopify/hydrogen/storefront-api-types';

export type SortParam =
	| 'price-low-high'
	| 'price-high-low'
	| 'best-selling'
	| 'newest'
	| 'featured';

export interface getSortValuesFromParamProps {
	sortKey: ProductCollectionSortKeys;
	reverse?: boolean;
}
