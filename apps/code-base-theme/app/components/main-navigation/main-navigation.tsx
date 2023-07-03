import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuViewport,
} from '@code-internet-applications/react';
import { FC, HTMLAttributes } from 'react';
import { IMenuData } from '~/types';
import { multipleMenu } from './main-navigation-data';
import { MainNavigationItem } from './main-navigation-item';
import { MainNavigationSubnav } from './main-navigation-subnav';

const MainNavigation: FC<HTMLAttributes<HTMLElement>> = ({ className }) => (
	<NavigationMenu className={className} aria-label="primary-nav">
		<NavigationMenuList>
			{multipleMenu.map((item: IMenuData) => {
				if (item.href) {
					return (
						<MainNavigationItem
							key={item.name}
							name={item.name}
							href={item.href}
						/>
					);
				}

				if (item.navigation) {
					return (
						<MainNavigationSubnav
							key={item.name}
							name={item.name}
							navItems={item.navigation}
						/>
					);
				}
			})}
		</NavigationMenuList>

		<NavigationMenuViewport />
	</NavigationMenu>
);

export { MainNavigation };
