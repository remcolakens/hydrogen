import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@code-internet-applications/tailwind-utils';
import { forwardRef } from 'react';
import { AccordionItemProps, AccordionItemRef } from './types';

export const AccordionItem = forwardRef<AccordionItemRef, AccordionItemProps>(
	({ className, ...props }, ref) => (
		<AccordionPrimitive.Item
			ref={ref}
			className={cn('border-b border-gray-200 first:border-t', className)}
			{...props}
		/>
	),
);

AccordionItem.displayName = 'AccordionItem';
