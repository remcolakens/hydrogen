import { ChevronDownIcon } from '@code-internet-applications/icon';
import { cn } from '@code-internet-applications/tailwind-utils';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { NavigationMenuTriggerProps, NavigationMenuTriggerRef } from './types';

const navigationMenuTriggerStyle = cva(
	'group inline-flex h-7 w-max items-center justify-center border-b border-transparent bg-white transition-colors hover:border-primary hover:text-primary focus:border-primary focus:text-primary focus:outline-none active:border-primary-400 active:text-primary-400 data-[active]:border-primary-400 data-[state=open]:border-primary data-[active]:text-primary-400 data-[state=open]:text-primary disabled:pointer-events-none disabled:opacity-50',
);

const NavigationMenuTrigger = forwardRef<
	NavigationMenuTriggerRef,
	NavigationMenuTriggerProps
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Trigger
		ref={ref}
		className={cn(navigationMenuTriggerStyle(), 'group', className)}
		{...props}
	>
		{children}

		<ChevronDownIcon
			className="relative ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180"
			aria-hidden="true"
		/>
	</NavigationMenuPrimitive.Trigger>
));

NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

export { NavigationMenuTrigger, navigationMenuTriggerStyle };
