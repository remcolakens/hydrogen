import {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuTrigger,
} from '@code-internet-applications/react';
import { FC } from 'react';
import { MainNavigationSubnavColumn } from './main-navigation-subnav-column';
import { MainNavigationSubnavImage } from './main-navigation-subnav-image';
import { IMainNavigationSubnav } from './types';

const MainNavigationSubnav: FC<IMainNavigationSubnav> = ({
	name,
	navItems,
}) => {
	return (
		<NavigationMenuItem>
			<NavigationMenuTrigger>{name}</NavigationMenuTrigger>
			<NavigationMenuContent>
				<div className="grid w-full grid-cols-12 gap-4 py-6 ">
					{navItems.map((item, index) => {
						switch (item.type) {
							case 'column': {
								return item.navItems ? (
									<MainNavigationSubnavColumn
										key={`${item.name}_${index}`}
										name={item.name}
										navItems={item.navItems}
										className={item.className}
									/>
								) : null;
							}
							case 'image': {
								return item.image && item.name ? (
									<MainNavigationSubnavImage
										key={`${item.name}_${index}`}
										name={item.name}
										image={item.image}
										className={item.className}
									/>
								) : null;
							}
						}
					})}
				</div>
			</NavigationMenuContent>
		</NavigationMenuItem>
	);
};

export { MainNavigationSubnav };
