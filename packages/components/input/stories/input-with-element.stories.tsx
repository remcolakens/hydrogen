import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../../button/src';
import { ChevronRightIcon } from '../../icon/src';
import { Input } from '../src/input';

const meta: Meta<typeof Input> = {
	title: 'Inputs/With Element',
};

export default meta;
type Story = StoryObj<typeof Input>;

const PasswordElement: React.FC = () => {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	return (
		<div className="relative">
			<Input
				className="pr-1"
				placeholder="Enter password"
				type={show ? 'text' : 'password'}
			/>
			<Button
				size="sm"
				className="absolute right-1 top-1 "
				onClick={handleClick}
			>
				{show ? 'Hide' : 'Show'}
			</Button>
		</div>
	);
};

export const withButton: Story = {
	render: () => <PasswordElement />,
};

export const withSVG: Story = {
	render: () => (
		<div className="relative">
			<Input placeholder="Enter password" type="text" className="pr-10" />
			<ChevronRightIcon className="absolute right-4 top-3 h-4 w-4" />
		</div>
	),
};
