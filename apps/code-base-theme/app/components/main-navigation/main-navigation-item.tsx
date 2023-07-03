import {
	NavigationMenuItem,
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from '@code-internet-applications/react';
import { Link } from '@remix-run/react';
import { FC } from 'react';
import { IMainNavigationItem } from './types';

const MainNavigationItem: FC<IMainNavigationItem> = ({ name, href }) => (
	<NavigationMenuItem>
		<NavigationMenuLink
			href={href}
			className={navigationMenuTriggerStyle()}
			asChild
		>
			<Link to={href} title={name}>
				{name}
			</Link>
		</NavigationMenuLink>
	</NavigationMenuItem>
);

export { MainNavigationItem };
