import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../label/src';
import { Text } from '../../text/src';
import { Option, Select } from '../src';
import { defaultVariants } from './default-options';

const meta: Meta<typeof Select> = {
	title: 'Select/With Text',
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
			<Text size="xs">Pick your variant</Text>
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
			<Text size="xs" className="text-notice-500">
				Pick your variant
			</Text>
		</div>
	),
};
