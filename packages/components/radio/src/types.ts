import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef } from 'react';
import { radioVariants } from './radio-group-item';

export type RadioGroupRef = ElementRef<typeof RadioGroupPrimitive.Root>;
export type RadioGroupProps = ComponentPropsWithoutRef<
	typeof RadioGroupPrimitive.Root
>;

export type RadioItemRef = ElementRef<typeof RadioGroupPrimitive.Item>;
export interface RadioItemProps
	extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
		VariantProps<typeof radioVariants> {}
