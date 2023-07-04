import { Container, ContainerContent } from '@code-internet-applications/react';
import { HeroImage } from '~/components';

export default function Homepage() {
	return (
		<Container className="mt-0">
			<ContainerContent className="p-0">
				<HeroImage
					title="Welcome to Code Shop!"
					description="Custom Domain Collection is now up, live, and running"
					image={{
						src: '//cdn.shopify.com/s/files/1/0551/4566/0472/files/Chalet_Collection_Feature_2.jpg?v=1654902306&crop=center&width=2880',
						alt: 'Chalet Collection',
					}}
					button={{
						text: 'Shop collection',
						handleClick: () => {
							console.log('Hello there');
						},
					}}
				/>
			</ContainerContent>
		</Container>
	);
}
