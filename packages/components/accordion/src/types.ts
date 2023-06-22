import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ComponentPropsWithoutRef, ElementRef } from 'react';

// AccordionPrimitive.Item
export type AccordionItemRef = ElementRef<typeof AccordionPrimitive.Item>;
export type AccordionItemProps = ComponentPropsWithoutRef<
	typeof AccordionPrimitive.Item
>;

// AccordionPrimitive.Trigger
export type AccordionTriggerRef = ElementRef<typeof AccordionPrimitive.Trigger>;
export type AccordionTriggerProps = ComponentPropsWithoutRef<
	typeof AccordionPrimitive.Trigger
>;

// AccordionPrimitive.Content
export type AccordionContentRef = ElementRef<typeof AccordionPrimitive.Content>;
export type AccordionContentProps = ComponentPropsWithoutRef<
	typeof AccordionPrimitive.Content
>;
