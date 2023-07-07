import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import { logoVariants } from '~/components';

export interface ILogoProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof logoVariants> {
	text?: boolean;
	variant?: 'regular' | 'monochrome';
}
