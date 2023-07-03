import { cn } from '@code-internet-applications/tailwind-utils';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';
import {
	NavigationMenuIndicatorProps,
	NavigationMenuIndicatorRef,
} from './types';

const NavigationMenuIndicator = forwardRef<
	NavigationMenuIndicatorRef,
	NavigationMenuIndicatorProps
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Indicator
		ref={ref}
		className={cn(
			'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
			className,
		)}
		{...props}
	>
		<div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-primary" />
	</NavigationMenuPrimitive.Indicator>
));

NavigationMenuIndicator.displayName =
	NavigationMenuPrimitive.Indicator.displayName;

export { NavigationMenuIndicator };
