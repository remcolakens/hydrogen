import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '../src/logo';

const storyTitle = 'Components/Logo';

const storyLogo = () => {
	return (
		<div className="grid-flow-col-1 grid gap-4">
			<div>
				<Logo variant="monochrome" />
			</div>
			<div>
				<Logo />
			</div>
			<div>
				<Logo variant="monochrome" size="small" />
			</div>
			<div>
				<Logo size="small" />
			</div>

			<div>
				<Logo variant="monochrome" brand={false} />
			</div>
			<div>
				<Logo brand={false} />
			</div>
			<div>
				<Logo variant="monochrome" size="small" brand={false} />
			</div>
			<div>
				<Logo size="small" brand={false} />
			</div>
		</div>
	);
};

const meta: Meta = {
	component: storyLogo,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const logo: Story = {
	decorators: [],
	name: 'Logo',
	parameters: {},
};
