import type { Meta, StoryObj } from '@storybook/react';
import { Option, Select } from '../src';
import { defaultVariants } from './default-options';

const meta: Meta<typeof Select> = {
	title: 'Select/Disabled',
};

export default meta;
type Story = StoryObj<typeof Select>;

export const disabled: Story = {
	render: () => (
		<Select placeholder="Select variation" disabled>
			{Object.entries(defaultVariants).map(([value, label]) => (
				<Option value={value} key={value}>
					{label}
				</Option>
			))}
		</Select>
	),
};
