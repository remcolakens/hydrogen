import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from '@remix-run/react';
import type { Shop } from '@shopify/hydrogen/storefront-api-types';

import {
	V2_MetaFunction,
	type LinksFunction,
	type LoaderArgs,
} from '@shopify/remix-oxygen';
import { Layout } from '~/components';
import styles from '../../../packages/config/tailwind-config/tailwind.css';
import appleTouchIcon from '../public/apple-touch-icon.png';
import appleTouchIcon16 from '../public/favicon-16x16.png';
import appleTouchIcon32 from '../public/favicon-32x32.png';
import safariPinnedTab from '../public/safari-pinned-tab.svg';
import siteWebmanifest from '../public/site.webmanifest';

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

export default function App() {
	const data = useLoaderData<typeof loader>();

	const { name } = data.layout.shop;

	console.log(name);

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Layout>
					<Outlet />
				</Layout>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
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
