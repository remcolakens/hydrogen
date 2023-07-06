import { HTMLAttributes } from 'react';
import { IProductCardImage } from '~/types';

export interface IHydrogenImageProps extends HTMLAttributes<HTMLElement> {
	aspectRatio?: string;
	image: IProductCardImage;
	sizes: string;
	name: string;
	alt?: string;
	loading?: 'lazy' | 'eager';
}
