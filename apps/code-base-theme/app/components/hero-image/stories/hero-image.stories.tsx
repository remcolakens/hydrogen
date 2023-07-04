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
	),
};
