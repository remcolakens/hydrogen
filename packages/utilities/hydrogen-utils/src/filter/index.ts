import { SortParam, getSortValuesFromParamProps } from './types';

export const getSortValuesFromParam = (
	sortParam: SortParam | null,
): getSortValuesFromParamProps => {
	switch (sortParam) {
		case 'price-high-low':
			return {
				sortKey: 'PRICE',
				reverse: true,
			};
		case 'price-low-high':
			return {
				sortKey: 'PRICE',
				reverse: false,
			};
		case 'best-selling':
			return {
				sortKey: 'BEST_SELLING',
				reverse: false,
			};
		case 'newest':
			return {
				sortKey: 'CREATED',
				reverse: true,
			};
		case 'featured':
			return {
				sortKey: 'MANUAL',
				reverse: false,
			};
		default:
			return {
				sortKey: 'RELEVANCE',
				reverse: false,
			};
	}
};
