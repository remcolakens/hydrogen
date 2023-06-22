import { DeliveryIcon } from '@code-internet-applications/icon';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../src/badge';

const meta: Meta<typeof Badge> = {
	title: 'Badge/Outline',
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const primary: Story = {
	render: () => (
		<div className="grid w-full grid-cols-3 gap-4">
			<div className="flex items-center justify-center">
				<Badge variant="outline" size="sm">
					Label
				</Badge>
			</div>
			<div className="flex items-center justify-center">
				<Badge variant="outline" size="md">
					Label
				</Badge>
			</div>
			<div className="flex items-center justify-center">
				<Badge variant="outline" size="lg">
					Label
				</Badge>
			</div>
		</div>
	),
};
export const icon: Story = {
	render: () => (
		<div className="grid w-full grid-cols-3 gap-4">
			<div className="flex items-center justify-center">
				<Badge variant="outline" icon size="sm">
					<DeliveryIcon />
				</Badge>
			</div>
			<div className="flex items-center justify-center">
				<Badge variant="outline" icon size="md">
					<DeliveryIcon />
				</Badge>
			</div>
			<div className="flex items-center justify-center">
				<Badge variant="outline" icon size="lg">
					<DeliveryIcon />
				</Badge>
			</div>
		</div>
	),
};
