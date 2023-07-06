import {
	cn,
	defaultGridClasses,
} from '@code-internet-applications/tailwind-utils';
import type { Meta, StoryObj } from '@storybook/react';

const storyTitle = 'Grid/Base';

const GridBase = () => {
	return (
		<>
			<div className={cn(defaultGridClasses(), 'h-60')}>
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

			<div className={cn(defaultGridClasses(), 'mt-4 h-10')}>
				<div className="col-span-12 bg-funnel-50"></div>
			</div>

			<div className={cn(defaultGridClasses(), 'mt-4 h-10')}>
				<div className="col-span-6 bg-funnel-50"></div>
				<div className="col-span-6 bg-funnel-50"></div>
			</div>

			<div className={cn(defaultGridClasses(), 'mt-4 h-10')}>
				<div className="col-span-4 bg-funnel-50"></div>
				<div className="col-span-4 bg-funnel-50"></div>
				<div className="col-span-4 bg-funnel-50"></div>
			</div>

			<div className={cn(defaultGridClasses(), 'mt-4 h-10')}>
				<div className="col-span-3 bg-funnel-50"></div>
				<div className="col-span-3 bg-funnel-50"></div>
				<div className="col-span-3 bg-funnel-50"></div>
				<div className="col-span-3 bg-funnel-50"></div>
			</div>

			<div className={cn(defaultGridClasses(), 'mt-4 h-10 md:grid-cols-5')}>
				<div className="col-span-1 bg-funnel-50"></div>
				<div className="col-span-1 bg-funnel-50"></div>
				<div className="col-span-1 bg-funnel-50"></div>
				<div className="col-span-1 bg-funnel-50"></div>
				<div className="col-span-1 bg-funnel-50"></div>
			</div>

			<div className={cn(defaultGridClasses(), 'mt-4 h-10')}>
				<div className="col-span-2 bg-funnel-50"></div>
				<div className="col-span-2 bg-funnel-50"></div>
				<div className="col-span-2 bg-funnel-50"></div>
				<div className="col-span-2 bg-funnel-50"></div>
				<div className="col-span-2 bg-funnel-50"></div>
				<div className="col-span-2 bg-funnel-50"></div>
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
