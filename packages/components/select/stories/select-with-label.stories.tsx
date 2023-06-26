import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../label/src';
import { Option, Select } from '../src';
import { defaultVariants } from './default-options';

const meta: Meta<typeof Select> = {
	title: 'Select/With Label',
};

export default meta;
type Story = StoryObj<typeof Select>;

export const valid: Story = {
	render: () => (
		<div className="grid items-center gap-2">
			<Label htmlFor="nameLabel">Variation</Label>
			<Select>
				{Object.entries(defaultVariants).map(([value, label]) => (
					<Option value={value} key={value}>
						{label}
					</Option>
				))}
			</Select>
		</div>
	),
};

export const isInvalid: Story = {
	render: () => (
		<div className="grid items-center gap-2">
			<Label htmlFor="nameLabel">Variation</Label>
			<Select isInvalid>
				{Object.entries(defaultVariants).map(([value, label]) => (
					<Option value={value} key={value}>
						{label}
					</Option>
				))}
			</Select>
		</div>
	),
};
