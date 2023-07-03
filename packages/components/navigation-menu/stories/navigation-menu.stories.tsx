import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from '../../button';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from '../src';

const meta: Meta<typeof NavigationMenu> = {
	title: 'Components/Navigation Menu',
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

const singleMenu = [
	{
		name: 'T-shirts',
		subNav: [
			{ name: 'V-neck', href: '#' },
			{ name: 'Crew-neck', href: '#' },
			{ name: 'Polo', href: '#' },
			{ name: 'Henley', href: '#' },
		],
	},
];

export const single: Story = {
	render: () => (
		<BrowserRouter>
			<div className="relative max-w-xs">
				<NavigationMenu>
					<NavigationMenuList>
						{singleMenu.map((item) => (
							<NavigationMenuItem key={item.name}>
								<NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4">
										{item.subNav.map((subItem) => (
											<li key={subItem.name}>
												<Button
													variant="ghost"
													className="text-black"
													onClick={() => (location.href = subItem.href)}
												>
													{subItem.name}
												</Button>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>

					<NavigationMenuViewport />
				</NavigationMenu>
			</div>
		</BrowserRouter>
	),
};
