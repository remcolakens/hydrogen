import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@code-internet-applications/react';
import { cn } from '@code-internet-applications/tailwind-utils';
import { Link } from '@remix-run/react';
import { FC } from 'react';
import {
	IFooterNavigationSocialsItemProps,
	IFooterNavigationSocialsProps,
} from '~/types';

const FooterNavigationSocials: FC<IFooterNavigationSocialsProps> = ({
	navigation,
	className,
}) => {
	return (
		<NavigationMenu aria-label="social-nav">
			<NavigationMenuList
				className={cn('inline-grid grid-cols-8 gap-2', className)}
			>
				{navigation.map((item: IFooterNavigationSocialsItemProps) => (
					<NavigationMenuItem key={item.id}>
						<NavigationMenuLink
							className="outline-none transition-colors hover:text-primary-500 focus:text-primary-500 active:text-primary-400"
							asChild
						>
							<Link to={item.href} title={item.title}>
								{item.svg}
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export { FooterNavigationSocials };
