// Virtual entry point for the app
import * as remixBuild from '@remix-run/dev/server-build';
import {createRequestHandler} from '@remix-run/server-runtime';
import {createStorefrontClient, storefrontRedirect} from '@shopify/hydrogen';
import {getStorefrontHeaders} from '@shopify/remix-oxygen';
import {HydrogenSession} from '~/lib/session.server';

/**
 * Export a fetch handler in module format.
 */
export default async function (request: Request): Promise<Response> {
	try {
		/**
		 * This has to be done so messy because process.env can't be destructured
		 * and only variables explicitly named are present inside a Vercel Edge Function.
		 * See https://github.com/vercel/next.js/pull/31237/files
		 */
		const env: Env = {
			SESSION_SECRET: '',
			PUBLIC_STOREFRONT_API_TOKEN: '',
			PUBLIC_STOREFRONT_API_VERSION: '',
			PRIVATE_STOREFRONT_API_TOKEN: '',
			PUBLIC_STORE_DOMAIN: '',
			PUBLIC_STOREFRONT_ID: '',
		};
		env.SESSION_SECRET = process.env.SESSION_SECRET as string;
		env.PUBLIC_STOREFRONT_API_TOKEN = process.env
			.PUBLIC_STOREFRONT_API_TOKEN as string;
		env.PRIVATE_STOREFRONT_API_TOKEN = process.env
			.PRIVATE_STOREFRONT_API_TOKEN as string;
		env.PUBLIC_STOREFRONT_API_VERSION = process.env
			.PUBLIC_STOREFRONT_API_VERSION as string;
		env.PUBLIC_STORE_DOMAIN = process.env.PUBLIC_STORE_DOMAIN as string;

		/**
		 * Open a cache instance in the worker and a custom session instance.
		 */
		if (!env?.SESSION_SECRET) {
			throw new Error('SESSION_SECRET environment variable is not set');
		}

		const [session] = await Promise.all([
			HydrogenSession.init(request, [process.env.SESSION_SECRET as string]),
		]);

		/**
		 * Create Hydrogen's Storefront client.
		 */
		const {storefront} = createStorefrontClient({
			buyerIp: request.headers.get('x-forwarded-for') ?? undefined,
			i18n: {language: 'EN', country: 'US'},
			publicStorefrontToken: env.PUBLIC_STOREFRONT_API_TOKEN,
			privateStorefrontToken: env.PRIVATE_STOREFRONT_API_TOKEN,
			storeDomain: `https://${env.PUBLIC_STORE_DOMAIN}`,
			storefrontApiVersion: env.PUBLIC_STOREFRONT_API_VERSION || '2023-04',
			storefrontId: env.PUBLIC_STOREFRONT_ID,
			storefrontHeaders: getStorefrontHeaders(request),
		});

		const handleRequest = createRequestHandler(
			remixBuild as any,
			process.env.NODE_ENV,
		);

		const response = await handleRequest(request, {
			session,
			storefront,
			env,
			waitUntil: () => Promise.resolve(),
		});

		if (response.status === 404) {
			/**
			 * Check for redirects only when there's a 404 from the app.
			 * If the redirect doesn't exist, then `storefrontRedirect`
			 * will pass through the 404 response.
			 */
			return storefrontRedirect({request, response, storefront});
		}

		return response;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error);
		return new Response('An unexpected error occurred', {status: 500});
	}
}
