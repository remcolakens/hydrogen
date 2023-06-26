import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Badge } from '../../badge/src';
import { Label } from '../../label/src';
import { RadioGroup, RadioGroupItem } from '../src';

const meta: Meta<typeof RadioGroupItem> = {
	title: 'Components/Radio',
};

export default meta;
type Story = StoryObj<typeof RadioGroupItem>;

const options = [
	{ value: 'small', label: 'Small' },
	{ value: 'medium', label: 'Medium' },
	{ value: 'large', label: 'Large' },
	{ value: 'extra-large', label: 'Extra Large' },
];

export const regular: Story = {
	render: () => (
		<RadioGroup defaultValue="medium">
			{options.map((option) => (
				<div
					className="flex items-center space-x-2"
					key={`regular_${option.value}`}
				>
					<RadioGroupItem value={option.value} id={`regular_${option.value}`} />
					<Label htmlFor={`regular_${option.value}`}>{option.label}</Label>
				</div>
			))}
		</RadioGroup>
	),
};

const RadioGroupBadge = () => {
	const [value, setValue] = useState<string>('small');

	return (
		<RadioGroup className="flex">
			{options.map((option) => (
				<div
					className="flex items-center space-x-2"
					key={`badge_${option.value}`}
				>
					<RadioGroupItem
						onClick={() => setValue(option.value)}
						value={option.value}
						id={`badge_${option.value}`}
						variant="hidden"
					/>
					<Label htmlFor={`badge_${option.value}`}>
						<Badge
							withHover
							isActive={value === option.value}
							variant="outline"
						>
							{option.value}
						</Badge>
					</Label>
				</div>
			))}
		</RadioGroup>
	);
};

export const withLabels: Story = {
	render: () => <RadioGroupBadge />,
};

const radioWithColorOptions = [
	{ value: 'black', label: 'Black', color: 'text-black' },
	{ value: 'primary', label: 'Primary', color: 'text-primary-800' },
	{ value: 'secondary', label: 'Secondary', color: 'text-secondary-800' },
	{ value: 'tertiary', label: 'Tertiary', color: 'text-tertiary-800' },
	{ value: 'funnel', label: 'Funnel', color: 'text-funnel-700' },
];

const RadioGroupColor = () => {
	return (
		<RadioGroup defaultValue="funnel" className="flex">
			{radioWithColorOptions.map((option) => (
				<div
					className={`flex items-center space-x-2 border-gray-200 ${option.color}`}
					key={`color_${option.value}`}
				>
					<RadioGroupItem
						value={option.value}
						id={`color_${option.value}`}
						size="lg"
					/>
				</div>
			))}
		</RadioGroup>
	);
};

export const withColor: Story = {
	render: () => <RadioGroupColor />,
};
