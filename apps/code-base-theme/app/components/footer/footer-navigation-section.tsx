import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	Text,
	navigationMenuTriggerStyle,
} from '@code-internet-applications/react';
import { cn } from '@code-internet-applications/tailwind-utils';
import { Link } from '@remix-run/react';
import { FC } from 'react';
import {
	IFooterNavigationSectionItemProps,
	IFooterNavigationSectionProps,
} from '~/types';

const FooterNavigationSection: FC<IFooterNavigationSectionProps> = ({
	title,
	navigation,
	className,
	navigationMenuListClasses,
	orientation,
	ariaLabel,
}) => {
	return (
		<section
			className={cn('col-span-12 mt-6 md:col-span-2 md:mt-0', className)}
		>
			{title ? (
				<Text size="label1" weight="bold" className="mb-4 md:mb-6">
					{title}
				</Text>
			) : null}

			<NavigationMenu orientation={orientation} aria-label={ariaLabel}>
				<NavigationMenuList
					className={cn(
						'flex flex-col items-start gap-3',
						navigationMenuListClasses,
					)}
				>
					{navigation.map((item: IFooterNavigationSectionItemProps) => (
						<NavigationMenuItem key={item.id}>
							{item.href ? (
								<NavigationMenuLink
									className={navigationMenuTriggerStyle()}
									asChild
								>
									<Link to={item.href} title={item.title}>
										{item.title}
									</Link>
								</NavigationMenuLink>
							) : (
								<Text size="label1">{item.title}</Text>
							)}
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</section>
	);
};

export { FooterNavigationSection };
