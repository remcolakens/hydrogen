import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '@code-internet-applications/tailwind-utils';
import { forwardRef } from 'react';
import { RadioGroupProps, RadioGroupRef } from './types';

const RadioGroup = forwardRef<RadioGroupRef, RadioGroupProps>(
	({ className, ...props }, ref) => {
		return (
			<RadioGroupPrimitive.Root
				className={cn('grid gap-2', className)}
				{...props}
				ref={ref}
			/>
		);
	},
);

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export { RadioGroup };
