import {
	NavigationMenuLink,
	Text,
	navigationMenuTriggerStyle,
} from '@code-internet-applications/react';
import { cn } from '@code-internet-applications/tailwind-utils';
import { Link } from '@remix-run/react';
import { FC } from 'react';
import { IMainNavigationSubnavColumn } from './types';

const MainNavigationSubnavColumn: FC<IMainNavigationSubnavColumn> = ({
	name,
	navItems,
	className,
}) => (
	<ul className={cn('col-span-2 flex flex-col gap-2', className)}>
		{name ? (
			<li key={`${name}_title`}>
				<Text className="mb-4" weight="bold">
					{name}
				</Text>
			</li>
		) : null}

		{navItems.map((item, index) => (
			<li key={`${item.name}_${index}`}>
				<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
					<Link to={item.href}>{item.name}</Link>
				</NavigationMenuLink>
			</li>
		))}
	</ul>
);

export { MainNavigationSubnavColumn };
