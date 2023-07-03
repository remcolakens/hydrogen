import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { ComponentPropsWithoutRef, ElementRef } from 'react';

export type NavigationMenuRef = ElementRef<typeof NavigationMenuPrimitive.Root>;
export type NavigationMenuProps = ComponentPropsWithoutRef<
	typeof NavigationMenuPrimitive.Root
>;

export type NavigationMenuListRef = ElementRef<
	typeof NavigationMenuPrimitive.List
>;
export type NavigationMenuListProps = ComponentPropsWithoutRef<
	typeof NavigationMenuPrimitive.List
>;

export type NavigationMenuTriggerRef = ElementRef<
	typeof NavigationMenuPrimitive.Trigger
>;
export type NavigationMenuTriggerProps = ComponentPropsWithoutRef<
	typeof NavigationMenuPrimitive.Trigger
>;

export type NavigationMenuContentRef = ElementRef<
	typeof NavigationMenuPrimitive.Content
>;
export type NavigationMenuContentProps = ComponentPropsWithoutRef<
	typeof NavigationMenuPrimitive.Content
>;

export type NavigationMenuViewportRef = ElementRef<
	typeof NavigationMenuPrimitive.Viewport
>;
export type NavigationMenuViewportProps = ComponentPropsWithoutRef<
	typeof NavigationMenuPrimitive.Viewport
>;

export type NavigationMenuIndicatorRef = ElementRef<
	typeof NavigationMenuPrimitive.Indicator
>;
export type NavigationMenuIndicatorProps = ComponentPropsWithoutRef<
	typeof NavigationMenuPrimitive.Indicator
>;
