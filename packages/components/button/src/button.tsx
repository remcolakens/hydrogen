import { cn } from '@code-internet-applications/tailwind-utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import { IButtonProps } from './types';

const buttonVariants = cva(
	'box-border inline-flex items-center justify-center border-4 border-transparent font-semibold text-white transition-colors focus:outline-none disabled:pointer-events-none',
	{
		variants: {
			variant: {
				primary:
					'bg-primary-500 hover:bg-primary-400 focus:border-notice-400 active:bg-primary-300 disabled:bg-primary-200',
				secondary:
					'bg-secondary-500 hover:bg-secondary-400 focus:border-info-400 active:bg-secondary-500 disabled:bg-secondary-200',
				outline:
					'border border-primary-500 bg-transparent text-primary-500 hover:bg-primary-500 hover:text-white focus:border-4 focus:border-notice-400 active:bg-primary-400 active:text-white disabled:border-primary-200 disabled:text-primary-200',
				funnel:
					'bg-notice-500 hover:bg-notice-400 focus:border-info-400 focus:bg-notice-500 active:bg-notice-300 disabled:bg-notice-200',
				ghost:
					'bg-transparent text-primary-500 hover:text-primary-600 focus:border-negative-400 active:text-primary-700 disabled:text-primary-200',
			},
			size: {
				sm: 'h-8 rounded-2xl px-3 text-xs leading-5',
				md: 'h-10 rounded-3xl px-5 text-sm leading-6',
				lg: 'h-14 rounded-4xl px-8 text-base leading-7',
			},
			icon: {
				true: true,
			},
		},
		compoundVariants: [
			{
				variant: ['primary', 'secondary', 'outline', 'funnel', 'ghost'],
				size: 'sm',
				icon: true,
				class: 'h-8 w-8 p-0',
			},
			{
				variant: ['primary', 'secondary', 'outline', 'funnel', 'ghost'],
				size: 'md',
				icon: true,
				class: 'h-10 w-10 p-0',
			},
			{
				variant: ['primary', 'secondary', 'outline', 'funnel', 'ghost'],
				size: 'lg',
				icon: true,
				class: 'h-14 w-14 p-0',
			},
		],
		defaultVariants: {
			variant: 'primary',
			size: 'md',
		},
	},
);

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
	({ icon, className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';

		return (
			<Comp
				className={cn(buttonVariants({ icon, variant, size }), className)}
				ref={ref}
				{...props}
			/>
		);
	},
);

Button.displayName = 'Button';

export { Button, buttonVariants };
