import type { Meta, StoryObj } from '@storybook/react';
import { Price } from '../src/price';

const meta: Meta<typeof Price> = {
	title: 'Components/Price',
};

export default meta;
type Story = StoryObj<typeof Price>;

export const regular: Story = {
	render: () => (
		<>
			<Price size="sm" originalAmount={'23,99232'} />
			<Price size="md" originalAmount={23} />
			<Price size="lg" originalAmount={23.99232} />
		</>
	),
};

export const discount: Story = {
	render: () => (
		<>
			<Price size="sm" originalAmount={45.98932} discountAmount={21.2393} />
			<Price size="md" originalAmount={45.99232} discountAmount={21.2393} />
			<Price size="lg" originalAmount={45.99232} discountAmount={21.2393} />
		</>
	),
};

export const discountHorizontal: Story = {
	render: () => (
		<>
			<Price
				orientation="horizontal"
				size="sm"
				originalAmount={45.99232}
				discountAmount={21.2393}
			/>
			<Price
				orientation="horizontal"
				size="md"
				originalAmount={45.99232}
				discountAmount={21.2393}
			/>
			<Price
				orientation="horizontal"
				size="lg"
				originalAmount={45.99232}
				discountAmount={21.2393}
			/>
		</>
	),
};
