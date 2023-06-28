import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '../src/image';

const meta: Meta<typeof Image> = {
	title: 'Hydrogen/Image',
};

export default meta;
type Story = StoryObj<typeof Image>;

export const image: Story = {
	render: () => (
		<div className="max-w-lg">
			<Image
				src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1000&q=80"
				width={1000}
				height={667}
				aspectRatio={4 / 3}
			/>
		</div>
	),
};
