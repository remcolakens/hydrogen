import { HTMLAttributes } from 'react';

export interface IHydrogenImageProps extends HTMLAttributes<HTMLElement> {
	aspectRatio: number;
	src: string;
	crop?: 'center' | 'top' | 'bottom' | 'left' | 'right';
	width?: number;
	height?: number;
	alt?: string;
}
