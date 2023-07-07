import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '~/components';

const storyTitle = 'Components/Logo';

const storyLogo = () => {
	return (
		<div className="grid-flow-col-1 grid gap-4">
			<div>
				<Logo variant="monochrome" text={true} />
			</div>
			<div>
				<Logo text={true} />
			</div>
			<div>
				<Logo variant="monochrome" size="small" text={true} />
			</div>
			<div>
				<Logo size="small" text={true} />
			</div>

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
