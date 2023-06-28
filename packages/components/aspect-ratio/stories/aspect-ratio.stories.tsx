import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '../src/aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
	title: 'Components/Aspect Ratio',
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const image: Story = {
	render: () => (
		<AspectRatio ratio={1}>
			<img
				className="h-full w-full rounded-md object-cover"
				src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
				alt="Landscape photograph by Tobias Tullius"
			/>
		</AspectRatio>
	),
};

export const video: Story = {
	render: () => (
		<AspectRatio ratio={4 / 3}>
			<iframe
				className="h-full w-full rounded-md object-cover"
				src="https://www.youtube.com/embed/9FDV-VCq5XE"
				allowFullScreen
			/>
		</AspectRatio>
	),
};

export const maps: Story = {
	render: () => (
		<AspectRatio ratio={2 / 1}>
			<iframe
				className="h-full w-full rounded-md object-cover"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8378.505275444768!2d4.342248819714736!3d52.02086605308667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b5d1caa36059%3A0xb1cd559953fec807!2sCode%2C%20a%20Shopify%20Plus%20agency!5e0!3m2!1sen!2snl!4v1687946469550!5m2!1sen!2snl"
			/>
		</AspectRatio>
	),
};
