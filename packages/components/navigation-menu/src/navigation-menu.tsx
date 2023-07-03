import { cn } from '@code-internet-applications/tailwind-utils';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';
import { NavigationMenuProps, NavigationMenuRef } from './types';

const NavigationMenu = forwardRef<NavigationMenuRef, NavigationMenuProps>(
	({ className, children, ...props }, ref) => (
		<NavigationMenuPrimitive.Root
			ref={ref}
			className={cn(
				'z-10 flex w-full flex-1 leading-none [&>div]:w-full [&>div]:leading-[0]',
				className,
			)}
			{...props}
		>
			{children}
		</NavigationMenuPrimitive.Root>
	),
);

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

export { NavigationMenu };
