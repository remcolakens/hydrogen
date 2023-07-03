import { cn } from '@code-internet-applications/tailwind-utils';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';
import { NavigationMenuContentProps, NavigationMenuContentRef } from './types';

const NavigationMenuContent = forwardRef<
	NavigationMenuContentRef,
	NavigationMenuContentProps
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		ref={ref}
		className={cn(
			'absolute left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52',
			className,
		)}
		{...props}
	/>
));

NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

export { NavigationMenuContent };
