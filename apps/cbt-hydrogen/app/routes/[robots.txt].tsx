import {type LoaderArgs} from '@shopify/remix-oxygen';

export const loader = ({request}: LoaderArgs) => {
	const url = new URL(request.url);

	return new Response(robotsTxtData({url: url.origin}), {
		status: 200,
		headers: {
			'content-type': 'text/plain',
			// Cache for 24 hours
			'cache-control': `max-age=${60 * 60 * 24}`,
		},
	});
};

function robotsTxtData({url}: {url: string}) {
	const sitemapUrl = url ? `${url}/sitemap.xml` : undefined;

	return `
User-agent: *
Disallow: /admin
Disallow: /cart
Disallow: /orders
Disallow: /checkouts/
Disallow: /checkout
Disallow: /carts
Disallow: /account
${sitemapUrl ? `Sitemap: ${sitemapUrl}` : ''}

# Google adsbot ignores robots.txt unless specifically named!
User-agent: adsbot-google
Disallow: /checkouts/
Disallow: /checkout
Disallow: /carts
Disallow: /orders

User-agent: Pinterest
Crawl-delay: 1
`.trim();
}
