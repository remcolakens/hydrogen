import { cn } from '@code-internet-applications/tailwind-utils';
import { HTMLAttributes, forwardRef } from 'react';

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn('rounded-2xl border border-gray-200', className)}
			{...props}
		/>
	),
);

Card.displayName = 'Card';

export { Card };
