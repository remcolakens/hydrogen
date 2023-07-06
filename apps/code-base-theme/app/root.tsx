import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
	useRouteError,
} from '@remix-run/react';
import type { Shop } from '@shopify/hydrogen/storefront-api-types';

import {
	Container,
	ContainerContent,
	ContainerDebug,
} from '@code-internet-applications/react';
import {
	V2_MetaFunction,
	type LinksFunction,
	type LoaderArgs,
} from '@shopify/remix-oxygen';
import { HeroImage, Layout } from '~/components';
import styles from '../../../packages/config/tailwind-config/tailwind.css';
import appleTouchIcon from '../public/apple-touch-icon.png';
import appleTouchIcon16 from '../public/favicon-16x16.png';
import appleTouchIcon32 from '../public/favicon-32x32.png';
import safariPinnedTab from '../public/safari-pinned-tab.svg';
import siteWebmanifest from '../public/site.webmanifest';
import { IDocumentProps } from './types';

export const links: LinksFunction = () => {
	return [
		{
			rel: 'preconnect',
			href: 'https://cdn.shopify.com',
		},
		{
			rel: 'preconnect',
			href: 'https://shop.app',
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.googleapis.com',
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
			crossOrigin: 'anonymous',
		},
		{ rel: 'stylesheet', href: styles },
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap',
		},
		{ rel: 'apple-touch-icon', sizes: '180x180', href: appleTouchIcon },
		{ rel: 'icon', type: 'image/png', sizes: '32x32', href: appleTouchIcon32 },
		{ rel: 'icon', type: 'image/png', sizes: '16x16', href: appleTouchIcon16 },
		{ rel: 'manifest', href: siteWebmanifest },
		{ rel: 'mask-icon', href: safariPinnedTab, color: '#000000' },
	];
};

export const meta: V2_MetaFunction = () => {
	return [
		{ title: 'Code Base Theme Hydrogen' },
		{
			name: 'description',
			content:
				"🚀 Code Base Theme Hydrogen: Simple, modular and accessible components for Shopify's headless commerce ",
		},
		{
			name: 'msapplication-TileColor',
			content: '#000000',
		},
		{
			name: 'theme-color',
			content: '#ffffff',
		},
	];
};

export async function loader({ context }: LoaderArgs) {
	const layout = await context.storefront.query<{ shop: Shop }>(LAYOUT_QUERY);
	return { layout };
}

function Document({ hasError, children }: IDocumentProps) {
	if (!hasError) {
		const data = useLoaderData<typeof loader>();
		const { name } = data.layout.shop;
		console.log(name);
	}

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<ContainerDebug />
				<Layout>{children}</Layout>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	);
}

export function ErrorBoundary() {
	const error = useRouteError();
	console.error(error);

	return (
		<Document hasError>
			<Container className="mt-0">
				<ContainerContent className="p-0">
					<HeroImage
						title="404 ;("
						description="The page is currently on quarantine, come backto visit later."
						image={{
							mobile: {
								url: 'https://cdn.shopify.com/s/files/1/0551/4566/0472/articles/mads-schmidt-rasmussen-tSp5_w9h5TQ-unsplash.jpg?v=1654967781',
								altText: 'Hats_and_Accessories',
								width: 4500,
								height: 3375,
							},
							desktop: {
								url: 'https://cdn.shopify.com/s/files/1/0551/4566/0472/articles/mads-schmidt-rasmussen-tSp5_w9h5TQ-unsplash.jpg?v=1654967781',
								altText: 'Hats_and_Accessories',
								width: 4500,
								height: 3375,
							},
						}}
						button={{
							text: 'Back to Homepage',
							href: '/',
						}}
					/>
				</ContainerContent>
			</Container>
		</Document>
	);
}
const LAYOUT_QUERY = `#graphql
  query layout {
    shop {
      name
      description
    }
  }
`;
