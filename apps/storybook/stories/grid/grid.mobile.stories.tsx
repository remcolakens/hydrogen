import type { Meta, StoryObj } from '@storybook/react';

const storyTitle = 'Grid/Mobile';

const GridMobile = () => {
	return (
		<>
			<div className="container mb-4">
				<div className="container__content">
					<div className="grid h-60 grid-cols-2 gap-4">
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
					</div>
				</div>
			</div>

			<div className="container mb-4">
				<div className="container__content">
					<div className="mb-4 grid h-10 grid-cols-1">
						<div className="bg-funnel-50"></div>
					</div>
				</div>

				<div className="container__content">
					<div className="grid h-10 grid-cols-2 gap-4">
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
					</div>
				</div>
			</div>
		</>
	);
};

const meta: Meta = {
	component: GridMobile,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof GridMobile>;

export const mobile: Story = {
	decorators: [],
	name: 'Mobile',
	parameters: {},
};
