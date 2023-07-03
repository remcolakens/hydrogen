import { cn } from '@code-internet-applications/tailwind-utils';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';
import {
	NavigationMenuViewportProps,
	NavigationMenuViewportRef,
} from './types';

const NavigationMenuViewport = forwardRef<
	NavigationMenuViewportRef,
	NavigationMenuViewportProps
>(({ className, ...props }, ref) => (
	<div className={cn('absolute left-0 top-full flex w-full justify-center')}>
		<NavigationMenuPrimitive.Viewport
			className={cn(
				'origin-top-center relative h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90',
				className,
			)}
			ref={ref}
			{...props}
		/>
	</div>
));

NavigationMenuViewport.displayName =
	NavigationMenuPrimitive.Viewport.displayName;

export { NavigationMenuViewport };
