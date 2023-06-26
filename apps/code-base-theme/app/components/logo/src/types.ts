import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import { logoVariants } from './logo';

export interface ILogoProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof logoVariants> {
	brand?: boolean;
}
