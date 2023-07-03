import { IMenuData } from '~/types';

export const multipleMenu: IMenuData[] = [
	{
		name: 'T-shirts',
		navigation: [
			{
				type: 'column',
				className: 'col-start-2',
				navItems: [
					{ name: 'V-Neck', href: '#' },
					{ name: 'Crew-neck', href: '#' },
					{ name: 'Polo', href: '#' },
					{ name: 'Henley', href: '#' },
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
					{ name: 'V-Neck', href: '#' },
					{ name: 'Crew-neck', href: '#' },
					{ name: 'Polo', href: '#' },
					{ name: 'Henley', href: '#' },
				],
			},
			{
				name: 'Men',
				type: 'column',
				navItems: [
					{ name: 'Kangaroos', href: '#' },
					{ name: 'Zip', href: '#' },
					{ name: 'Polo', href: '#' },
					{ name: 'Henley', href: '#' },
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
		href: '#',
	},
	{
		name: 'Accessories',
		href: '#',
	},
	{
		name: 'Blog',
		href: '#',
	},
];
