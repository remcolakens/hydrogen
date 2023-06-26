import type { Meta, StoryObj } from '@storybook/react';
import { Option, Select } from '../src';
import { defaultVariants } from './default-options';

const meta: Meta<typeof Select> = {
	title: 'Select/Select',
};

export default meta;
type Story = StoryObj<typeof Select>;

export const valid: Story = {
	render: () => (
		<Select placeholder="Select variation">
			{Object.entries(defaultVariants).map(([value, label]) => (
				<Option value={value} key={value}>
					{label}
				</Option>
			))}
		</Select>
	),
};

export const isInvalid: Story = {
	render: () => (
		<Select placeholder="Select variation" isInvalid>
			{Object.entries(defaultVariants).map(([value, label]) => (
				<Option value={value} key={value}>
					{label}
				</Option>
			))}
		</Select>
	),
};
