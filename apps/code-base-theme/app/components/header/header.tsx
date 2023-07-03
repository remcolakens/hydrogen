import {
	AccountIcon,
	BagIcon,
	HamburgerIcon,
	SearchIcon,
} from '@code-internet-applications/icon';

import {
	Button,
	Container,
	ContainerContent,
} from '@code-internet-applications/react';

import { Link } from '@remix-run/react';
import { FC, useState } from 'react';
import { Logo, MainNavigation } from '~/components';
import type { IHeaderProps } from '~/types';
import { HeaderCtaButtons } from './header-cta-buttons';

const Header: FC<IHeaderProps> = () => {
	const [toggleMenu, setToggleMenu] = useState<boolean>(false);

	return (
		<header className="border-b border-gray-200">
			<Container className="my-0">
				<ContainerContent>
					<div className="relative flex items-center py-3 md:grid md:grid-cols-12 md:gap-4">
						<div className="flex-1 md:hidden">
							<Button
								variant="ghost"
								className="-ml-4 h-12 w-12 p-0 text-black"
								onClick={() => setToggleMenu(!toggleMenu)}
							>
								<HamburgerIcon />
							</Button>
						</div>

						<Link
							to="/"
							className="flex flex-none justify-center rounded-lg border-4 border-transparent leading-none focus:border-notice-400 focus:outline-none md:justify-start"
						>
							<Logo brand={false} />
						</Link>

						<MainNavigation className="col-span-9 hidden md:block" />

						<HeaderCtaButtons
							buttons={[
								{
									name: 'Search',
									svg: <SearchIcon />,
									handleClick: () => console.log('Hello there'),
								},
								{
									name: 'Account',
									className: 'hidden md:block',
									svg: <AccountIcon />,
									handleClick: () => console.log('Hello there'),
								},
								{
									name: 'Add to Cart',
									svg: <BagIcon />,
									handleClick: () => console.log('Hello there'),
								},
							]}
						/>
					</div>
				</ContainerContent>
			</Container>
		</header>
	);
};

export { Header };
