import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../button/src';
import { Input } from '../src/input';

const meta: Meta<typeof Input> = {
	title: 'Inputs/With Button',
};

export default meta;
type Story = StoryObj<typeof Input>;

export const valid: Story = {
	render: () => (
		<div className="flex">
			<Input type="email" placeholder="Email" className="mr-4 grow" />
			<Button type="submit">Subscribe</Button>
		</div>
	),
};

export const isInvalid: Story = {
	render: () => (
		<div className="flex">
			<Input isInvalid type="email" placeholder="Email" className="mr-4 grow" />
			<Button type="submit" disabled>
				Subscribe
			</Button>
		</div>
	),
};
