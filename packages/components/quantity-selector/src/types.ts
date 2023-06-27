import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import { quantityVariants } from './quantity-selector';

export interface IQuantitySelectorProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof quantityVariants> {
	isInvalid?: boolean;
	defaultValue?: number;
}
