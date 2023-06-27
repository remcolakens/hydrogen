import { cn } from '@code-internet-applications/tailwind-utils';
import { cva } from 'class-variance-authority';
import { FC } from 'react';
import { EURO } from './currencies';
import type { IPriceProps } from './types';

const priceVariants = cva('text-black', {
	variants: {
		size: {
			sm: ['text-xs leading-label3'],
			md: ['text-sm leading-label2'],
			lg: ['text-base leading-label1'],
		},
	},
	defaultVariants: {
		size: 'sm',
	},
});

const Price: FC<IPriceProps> = ({
	originalAmount,
	discountAmount,
	size,
	orientation = 'vertical',
	className,
}) => (
	<div
		className={cn(
			'flex',
			orientation === 'vertical' && 'space-x-2',
			orientation === 'horizontal' && 'flex-col',
		)}
	>
		<span
			className={cn(
				priceVariants({ size }),
				discountAmount && 'text-funnel-500',
				className,
			)}
		>
			{EURO(originalAmount).format()}
		</span>

		{discountAmount && (
			<span
				className={cn(
					priceVariants({ size }),
					discountAmount && 'text-gray-500 line-through',
					className,
				)}
			>
				{EURO(discountAmount).format()}
			</span>
		)}
	</div>
);

export { Price, priceVariants };
