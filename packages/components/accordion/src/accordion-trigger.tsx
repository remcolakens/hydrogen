import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { MinusIcon, PlusIcon } from '@code-internet-applications/icon';
import { cn } from '@code-internet-applications/tailwind-utils';
import { forwardRef } from 'react';
import { AccordionTriggerProps, AccordionTriggerRef } from './types';

export const AccordionTrigger = forwardRef<
	AccordionTriggerRef,
	AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'flex flex-1 items-center justify-between py-4 text-sm leading-5 transition-all [&[data-state=open]>.svgMinus]:block [&[data-state=open]>.svgPlus]:hidden',
				className,
			)}
			{...props}
		>
			{children}

			<MinusIcon aria-hidden="true" className="svgMinus hidden" />
			<PlusIcon aria-hidden="true" className="svgPlus" />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
