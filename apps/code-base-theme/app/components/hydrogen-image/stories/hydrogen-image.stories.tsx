import type { Meta, StoryObj } from '@storybook/react';
import { HydrogenImage } from '~/components';

const meta: Meta<typeof HydrogenImage> = {
	title: 'Hydrogen/Hydrogen Image',
};

export default meta;
type Story = StoryObj<typeof HydrogenImage>;

export const hydrogenImage: Story = {
	render: () => (
		<div className="max-w-lg">
			<HydrogenImage
				image={{
					url: 'https://cdn.shopify.com/s/files/1/0551/4566/0472/products/Main.jpg?v=1655932274',
					width: 3908,
					height: 3908,
				}}
				aspectRatio="1"
				sizes="(min-width: 64em) 25vw, (min-width: 48em) 30vw, 45vw"
				name="The Hydrogen Snowboard"
			/>
		</div>
	),
};
