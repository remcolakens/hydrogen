import { cn } from '@code-internet-applications/tailwind-utils';
import { HTMLAttributes, forwardRef } from 'react';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn('flex flex-col p-4 pt-0', className)}
			{...props}
		/>
	),
);

CardFooter.displayName = 'CardFooter';

export { CardFooter };
