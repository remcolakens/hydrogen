import type { PriceOrientation } from '@code-internet-applications/react';

export interface IProductCardProps {
	id: string;
	brand: string;
	name: string;
	url: string;
	price: IProductCardPrice;
	badges: IProductCardBadge[];
	featuredImage: IProductCardImage;
	images: IProductCardImage[];
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

export interface IProductCardImage {
	width: number;
	height: number;
	src: string;
}
