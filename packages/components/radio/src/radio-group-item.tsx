import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '@code-internet-applications/tailwind-utils';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Icon } from '../../icon/src';
import { RadioItemProps, RadioItemRef } from './types';

const radioVariants = cva(
	'aspect-square h-4 w-4 rounded-full border focus:outline-none disabled:cursor-not-allowed disabled:opacity-5',
	{
		variants: {
			size: {
				md: 'h-4 w-4 p-0.5',
				lg: 'h-10 w-10 p-1.5',
			},
			variant: {
				hidden: 'hidden',
			},
		},
		defaultVariants: {
			size: 'md',
		},
	},
);

const RadioGroupItem = forwardRef<RadioItemRef, RadioItemProps>(
	({ size, variant, className, ...props }, ref) => {
		if (variant === 'hidden') {
			return (
				<RadioGroupPrimitive.Item ref={ref} {...props}>
					<RadioGroupPrimitive.Indicator></RadioGroupPrimitive.Indicator>
				</RadioGroupPrimitive.Item>
			);
		}

		return (
			<RadioGroupPrimitive.Item
				ref={ref}
				className={cn(radioVariants({ size }), className)}
				{...props}
			>
				<RadioGroupPrimitive.Indicator className="flex items-center justify-center">
					<Icon className="h-full w-full fill-current text-current">
						<circle cx="12" cy="12" r="12" />
					</Icon>
				</RadioGroupPrimitive.Indicator>
			</RadioGroupPrimitive.Item>
		);
	},
);

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroupItem, radioVariants };
