import { cn } from '@code-internet-applications/tailwind-utils';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';
import { NavigationMenuListProps, NavigationMenuListRef } from './types';

const NavigationMenuList = forwardRef<
	NavigationMenuListRef,
	NavigationMenuListProps
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		ref={ref}
		className={cn('flex flex-1 list-none gap-8', className)}
		{...props}
	/>
));

NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

export { NavigationMenuList };
