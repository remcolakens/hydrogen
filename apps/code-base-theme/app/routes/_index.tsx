import { Container, ContainerContent } from '@code-internet-applications/react';
import { Await, useLoaderData } from '@remix-run/react';
import { LoaderArgs, defer } from '@shopify/remix-oxygen';
import { print } from 'graphql';
import { Suspense } from 'react';
import { HeroImage, ProductGrid, TextBlock } from '~/components';
import { HOMEPAGE_FEATURED_PRODUCTS_QUERY } from '~/queries/homepageFeaturedProduct';

export async function loader({ context }: LoaderArgs) {
	return defer({
		featuredProducts: context.storefront.query(
			print(HOMEPAGE_FEATURED_PRODUCTS_QUERY),
		),
	});
}

export default function Homepage() {
	const { featuredProducts } = useLoaderData<typeof loader>();

	return (
		<Container className="mt-0">
			<ContainerContent className="p-0">
				<HeroImage
					title="Welcome to Code Shop!"
					description="Custom Domain Collection is now up, live, and running"
					image={{
						desktop: {
							url: 'https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Chalet_Collection_Feature_2.jpg?v=1654902306',
							altText: 'Chalet Collection',
							width: 2500,
							height: 2500,
						},
						mobile: {
							url: 'https://cdn.shopify.com/s/files/1/0551/4566/0472/articles/mads-schmidt-rasmussen-tSp5_w9h5TQ-unsplash.jpg?v=1654967781',
							altText: 'Hats_and_Accessories',
							width: 4500,
							height: 3375,
						},
					}}
					button={{
						text: 'Shop collection',
						href: '/collections',
					}}
				/>
			</ContainerContent>

			<ContainerContent>
				<TextBlock
					title="Say hello to Code Shop. A new kinda Shop."
					description="In our world, everything is always moving. And so has Code, for over 15
				years. Occasionally we re-invent ourselves and a couple of years ago we
				embraced Shopify — the worlds fastest-growing, SaaS-powered e-commerce
				platform."
				/>
			</ContainerContent>

			<ContainerContent>
				<Suspense>
					<Await resolve={featuredProducts}>
						{({ products }) => (
							<ProductGrid
								title="Our bestsellers"
								products={{ products: products }}
								button={{
									text: 'Shop all',
									handleClick: () => console.log('Hello'),
								}}
							/>
						)}
					</Await>
				</Suspense>
			</ContainerContent>
		</Container>
	);
}
