import {
	Button,
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@code-internet-applications/react';
import { FC } from 'react';
import { IHeaderCtaButton } from './types';

const HeaderCtaButtons: FC<IHeaderCtaButton> = ({ buttons }) => (
	<NavigationMenu className="md:col-span-2 " aria-label="secondary-nav">
		<NavigationMenuList className="-mr-4 flex justify-end gap-0 md:mr-0">
			{buttons.map((button) => (
				<NavigationMenuItem key={button.name} className={button.className}>
					<NavigationMenuLink asChild>
						<Button
							icon
							variant="ghost"
							onClick={button.handleClick}
							className="h-12 w-12 text-black"
						>
							{button.svg}
						</Button>
					</NavigationMenuLink>
				</NavigationMenuItem>
			))}
		</NavigationMenuList>
	</NavigationMenu>
);

export { HeaderCtaButtons };
