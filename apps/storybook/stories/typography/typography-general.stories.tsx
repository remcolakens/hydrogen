import type {
	IHeadingTypes,
	ITextTypes,
} from '@code-internet-applications/react';
import { Heading, Text } from '@code-internet-applications/react';
import type { Meta, StoryObj } from '@storybook/react';
import { StyleText } from './styleText';

const storyTitle = 'Typography/Brand';

const headingTypes: Array<IHeadingTypes> = [
	'heading1',
	'heading2',
	'heading3',
	'heading4',
	'heading5',
	'heading6',
];

const textTypes: Array<ITextTypes> = [
	'body1',
	'body2',
	'body3',
	'label1',
	'label2',
	'label3',
	'button1',
	'button2',
	'button3',
];

const TypographyBrand = () => {
	return (
		<>
			{headingTypes.map((type) => (
				<StyleText key={type}>
					<Heading variant="bold" size={type} className="mb-4">
						{type}
					</Heading>
					<Heading size={type}>{type}</Heading>
				</StyleText>
			))}

			{textTypes.map((type) => (
				<StyleText key={type}>
					<Text variant="bold" size={type} className="mb-4">
						{type}
					</Text>
					<Text size={type}>{type}</Text>
				</StyleText>
			))}
		</>
	);
};

const meta: Meta = {
	component: TypographyBrand,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof TypographyBrand>;

export const brand: Story = {
	decorators: [],
	name: 'Brand',
	parameters: {},
};
