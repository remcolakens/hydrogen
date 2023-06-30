import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '~/components';

const meta: Meta<typeof Header> = {
	title: 'Hydrogen/Header',
};

export default meta;
type Story = StoryObj<typeof Header>;

export const header: Story = {
	render: () => <Header />,
};
