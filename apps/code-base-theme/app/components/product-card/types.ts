import type { PriceOrientation } from '@code-internet-applications/react';
import * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types';

export interface IProductCardProps {
	id: string;
	brand: string;
	name: string;
	url: string;
	aspectRatio?: string;
	price: IProductCardPrice;
	badges: IProductCardBadge[];
	featuredImage?: IProductCardImage;
	images?: IProductCardImage[];
}
export interface IProductCardPrice {
	orginal: number;
	discount?: number;
	orientation?: PriceOrientation;
}

export interface IProductCardBadge {
	id: string;
	name: string;
}

export type IProductCardImage = Pick<
	StorefrontAPI.Image,
	'url' | 'altText' | 'width' | 'height'
>;
