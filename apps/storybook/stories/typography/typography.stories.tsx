import type { ITextTypes } from '@code-internet-applications/react';
import { Text } from '@code-internet-applications/react';
import type { Meta, StoryObj } from '@storybook/react';
import { StyleText } from './styleText';

const storyTitle = 'Typography/Base';

const textTypes: Array<ITextTypes> = [
	'xs',
	'sm',
	'base',
	'lg',
	'xl',
	'2xl',
	'3xl',
	'4xl',
	'5xl',
	'6xl',
	'7xl',
	'8xl',
	'9xl',
];

const TypographyBase = () => {
	return (
		<>
			{textTypes.map((type) => (
				<StyleText key={type}>
					<Text variant="bold" size={type} className="mb-4">
						text-{type}
					</Text>
					<Text size={type}>text-{type}</Text>
				</StyleText>
			))}
		</>
	);
};

const meta: Meta = {
	component: TypographyBase,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof TypographyBase>;

export const base: Story = {
	decorators: [],
	name: 'Base',
	parameters: {},
};
