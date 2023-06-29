import { cn } from '@code-internet-applications/tailwind-utils';
import { HTMLAttributes, forwardRef } from 'react';

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn('flex flex-col p-4 pt-0', className)}
			{...props}
		/>
	),
);

CardContent.displayName = 'CardContent';

export { CardContent };
