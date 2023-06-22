import { cva } from 'class-variance-authority';

import { cn } from '@code-internet-applications/tailwind-utils';
import { IBadgeProps } from './types';

const badgeVariants = cva(
	'inline-flex items-center justify-center rounded-5xl text-xs leading-5 [&>svg]:h-4 [&>svg]:w-4',
	{
		variants: {
			variant: {
				primary: 'bg-black text-white',
				outline: 'border',
			},
			size: {
				sm: 'h-6 px-2.5 py-0.5',
				md: 'h-8 px-3.5 py-2',
				lg: 'h-10 px-5 py-3',
			},
			icon: {
				true: true,
			},
		},
		compoundVariants: [
			{
				variant: ['primary', 'outline'],
				size: 'sm',
				icon: true,
				class: 'h-6 w-6 p-0',
			},
			{
				variant: ['primary', 'outline'],
				size: 'md',
				icon: true,
				class: 'h-8 w-8 p-0',
			},
			{
				variant: ['primary', 'outline'],
				size: 'lg',
				icon: true,
				class: 'h-10 w-10 p-0',
			},
		],
		defaultVariants: {
			variant: 'primary',
			size: 'md',
		},
	},
);

function Badge({ icon, size, className, variant, ...props }: IBadgeProps) {
	return (
		<div
			className={cn(badgeVariants({ icon, size, variant }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
