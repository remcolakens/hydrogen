import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@code-internet-applications/tailwind-utils';
import { forwardRef } from 'react';
import { LabelProps, LabelRef } from './types';

const Label = forwardRef<LabelRef, LabelProps>(
	({ className, ...props }, ref) => (
		<LabelPrimitive.Root
			ref={ref}
			className={cn('text-base font-semibold leading-7', className)}
			{...props}
		/>
	),
);

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
