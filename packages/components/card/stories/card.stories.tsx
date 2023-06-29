import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardFooter, CardHeader } from '../src';

const meta: Meta<typeof Card> = {
	title: 'Components/Card',
};

export default meta;
type Story = StoryObj<typeof Card>;

export const card: Story = {
	render: () => (
		<Card>
			<CardHeader>Card Header</CardHeader>
			<CardContent>Card Content</CardContent>
			<CardFooter>Card Footer</CardFooter>
		</Card>
	),
};
