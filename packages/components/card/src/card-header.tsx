import { cn } from '@code-internet-applications/tailwind-utils';
import { HTMLAttributes, forwardRef } from 'react';

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('flex flex-col p-4', className)} {...props} />
	),
);

CardHeader.displayName = 'CardHeader';

export { CardHeader };
