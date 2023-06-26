import * as LabelPrimitive from '@radix-ui/react-label';
import { ComponentPropsWithoutRef, ElementRef } from 'react';

export type LabelRef = ElementRef<typeof LabelPrimitive.Root>;
export type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;
