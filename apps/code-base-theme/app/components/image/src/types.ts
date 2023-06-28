import { HTMLAttributes } from 'react';

export interface IImageProps extends HTMLAttributes<HTMLElement> {
	aspectRatio: number;
	src: string;
	width: number;
	height: number;
	srcSet?: string;
	sizes?: string;
	alt?: string;
	loading?: 'lazy' | 'eager';
}
