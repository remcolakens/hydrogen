import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@code-internet-applications/tailwind-utils';
import { forwardRef } from 'react';
import { AccordionContentProps, AccordionContentRef } from './types';

export const AccordionContent = forwardRef<
	AccordionContentRef,
	AccordionContentProps
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cn(
			'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
			className,
		)}
		{...props}
	>
		<div className="pb-4 pt-0">{children}</div>
	</AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;
