import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from '@remix-run/react';
import type { Shop } from '@shopify/hydrogen/storefront-api-types';
import { type LinksFunction, type LoaderArgs } from '@shopify/remix-oxygen';
import favicon from '../public/favicon.svg';
import styles from './styles/tailwind.css';

export const links: LinksFunction = () => {
	return [
		{ rel: 'stylesheet', href: styles },
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap',
		},
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
		{ rel: 'icon', type: 'image/svg+xml', href: favicon },
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
				<Outlet />
				<ScrollRestoration />
				<Scripts />
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
