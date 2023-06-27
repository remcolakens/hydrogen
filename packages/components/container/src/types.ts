import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import { containerVariants } from './container-content';

export interface IContainerProps
	extends HTMLAttributes<HTMLElement>,
		VariantProps<typeof containerVariants> {}
