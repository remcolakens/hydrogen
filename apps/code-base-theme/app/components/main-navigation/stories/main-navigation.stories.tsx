import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { MainNavigation } from '~/components';
const meta: Meta<typeof MainNavigation> = {
	title: 'Hydrogen/Main Navigation',
};

export default meta;
type Story = StoryObj<typeof MainNavigation>;

export const mainNavigation: Story = {
	render: () => (
		<BrowserRouter>
			<div className="relative">
				<MainNavigation />
			</div>
		</BrowserRouter>
	),
};
