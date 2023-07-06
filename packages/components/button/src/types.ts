import { VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { buttonVariants } from './button';

export interface IButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	icon?: boolean;
}

export interface IButton {
	text?: string;
	handleClick?: () => void;
	href?: string;
	size?: buttonSizeProps;
	variant?: buttonVariantProps;
	className?: string;
}

export type buttonSizeProps = 'sm' | 'md' | 'lg';
export type buttonVariantProps =
	| 'primary'
	| 'secondary'
	| 'outline'
	| 'funnel'
	| 'ghost';
