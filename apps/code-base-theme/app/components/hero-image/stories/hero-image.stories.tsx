import type { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from '~/components';

const meta: Meta<typeof HeroImage> = {
	title: 'Hydrogen/Hero Image',
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const heroImage: Story = {
	render: () => (
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
				handleClick: () => {
					console.log('Hello there');
				},
			}}
		/>
	),
};
