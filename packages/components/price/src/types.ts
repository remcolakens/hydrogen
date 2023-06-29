import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import { priceVariants } from './price';

export interface IPriceProps
	extends HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof priceVariants> {
	originalAmount: number | string;
	discountAmount?: number | string;
	orientation?: PriceOrientation;
}

export type PriceOrientation = 'horizontal' | 'vertical';
