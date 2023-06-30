import { Container, ContainerContent } from '@code-internet-applications/react';
import { FC } from 'react';
import { Logo } from '~/components';
import type { IHeaderProps } from '~/types';

const Header: FC<IHeaderProps> = () => {
	return (
		<header>
			<Container>
				<ContainerContent>
					<Logo brand={false} />
				</ContainerContent>
			</Container>
		</header>
	);
};

export { Header };
