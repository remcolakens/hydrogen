import { IMenuData } from '~/types';

export const mainNavigationData: IMenuData[] = [
	{
		name: 'T-shirts',
		navigation: [
			{
				type: 'column',
				className: 'col-start-2',
				navItems: [
					{ name: 'V-Neck', href: '/collections/freestyle' },
					{ name: 'Crew-neck', href: '/collections/backcountry' },
					{ name: 'Polo', href: '/collections/thermals-and-layers' },
					{ name: 'Henley', href: '/collections/insulated-and-puffy-jackets' },
				],
			},
		],
	},
	{
		name: 'Hoodies',
		navigation: [
			{
				name: 'Women',
				type: 'column',
				className: 'col-start-2',
				navItems: [
					{ name: 'V-Neck', href: '/collections/freestyle' },
					{ name: 'Crew-neck', href: '/collections/backcountry' },
					{ name: 'Polo', href: '/collections/thermals-and-layers' },
					{ name: 'Henley', href: '/collections/insulated-and-puffy-jackets' },
				],
			},
			{
				name: 'Men',
				type: 'column',
				navItems: [
					{ name: 'Kangaroos', href: '/collections/freestyle' },
					{ name: 'Zip', href: '/collections/backcountry' },
					{ name: 'Polo', href: '/collections/thermals-and-layers' },
					{ name: 'Henley', href: '/collections/insulated-and-puffy-jackets' },
				],
			},
			{
				name: 'hoodie_image',
				type: 'image',
				className: 'col-start-8',
				image: {
					src: 'https://cdn.shopify.com/s/files/1/0551/4566/0472/collections/full.png?v=1654902705&width=432&height=243&crop=center',
					alt: 'Hoodie',
					height: 243,
					width: 432,
				},
			},
		],
	},
	{
		name: 'Sweaters',
		href: '/collections/freestyle',
	},
	{
		name: 'Accessories',
		href: '/collections/freestyle',
	},
	{
		name: 'Blog',
		href: '#',
	},
];
