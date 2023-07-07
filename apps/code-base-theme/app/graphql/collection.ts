import { PRODUCT_CARD_FRAGMENT } from './fragments/product-card';

export const COLLECTION_QUERY = `#graphql
	query CollectionDetails(
		$handle: String!
		$filters: [ProductFilter!]
		$sortKey: ProductCollectionSortKeys!
		$reverse: Boolean
		$first: Int
		$last: Int
		$startCursor: String
		$endCursor: String
	) {
		collection(handle: $handle) {
			id
			handle
			title
			description
			products(
				first: $first
				last: $last
				before: $startCursor
				after: $endCursor
				filters: $filters
				sortKey: $sortKey
				reverse: $reverse
			) {
				filters {
					id
					label
					type
					values {
						id
						label
						count
						input
					}
				}
				nodes {
					...ProductCard
				}
				pageInfo {
					hasPreviousPage
					hasNextPage
					startCursor
					endCursor
				}
			}
		}
	}
	${PRODUCT_CARD_FRAGMENT}
` as const;
