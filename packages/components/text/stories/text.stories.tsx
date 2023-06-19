import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../src/text';

const storyTitle = 'Components/Text';

const myText = () => {
	return <Text>Text 1</Text>;
};

const meta: Meta = {
	component: myText,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const black: Story = {
	decorators: [],
	name: 'Text',
	parameters: {},
};
