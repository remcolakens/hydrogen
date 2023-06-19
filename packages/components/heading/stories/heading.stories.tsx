import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../src/heading';

const storyTitle = 'Components/Heading';

const myHeading = () => {
	return <Heading>Heading 1</Heading>;
};

const meta: Meta = {
	component: myHeading,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const black: Story = {
	decorators: [],
	name: 'Heading',
	parameters: {},
};
