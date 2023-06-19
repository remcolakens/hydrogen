import type { Meta, StoryObj } from '@storybook/react';

const storyTitle = 'Grid/Base';

const GridBase = () => {
	return (
		<>
			<div className="container mb-4">
				<div className="container__content">
					<div className="grid h-60 grid-cols-12 gap-4">
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="container__content">
					<div className="mb-4 grid h-10 grid-cols-1 gap-4">
						<div className="bg-funnel-50"></div>
					</div>

					<div className="mb-4 grid h-10 grid-cols-2 gap-4">
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
					</div>

					<div className="mb-4 grid h-10 grid-cols-3 gap-4">
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
					</div>

					<div className="mb-4 grid h-10 grid-cols-4 gap-4">
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
					</div>

					<div className="mb-4 grid h-10 grid-cols-5 gap-4">
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
					</div>

					<div className="mb-4 grid h-10 grid-cols-6 gap-4">
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
						<div className="bg-funnel-50"></div>
					</div>
				</div>
			</div>
		</>
	);
};

const meta: Meta = {
	component: GridBase,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof GridBase>;

export const base: Story = {
	decorators: [],
	name: 'Base',
	parameters: {},
};
