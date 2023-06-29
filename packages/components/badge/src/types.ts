import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import { badgeVariants } from './badge';

export interface IBadgeProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

export type BadgeVariants = 'primary' | 'outline';

export type BadgeSizes = 'sm' | 'md' | 'lg';
