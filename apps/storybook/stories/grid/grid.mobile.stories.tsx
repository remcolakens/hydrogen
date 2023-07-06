import {
	cn,
	defaultGridClasses,
} from '@code-internet-applications/tailwind-utils';
import type { Meta, StoryObj } from '@storybook/react';

const storyTitle = 'Grid/Mobile';

const GridMobile = () => {
	return (
		<>
			<div className={cn(defaultGridClasses(), 'h-60 md:grid-cols-2')}>
				<div className="col-span-1 bg-funnel-50 md:col-span-1"></div>
				<div className="col-span-1 bg-funnel-50 md:col-span-1"></div>
			</div>

			<div className={cn(defaultGridClasses(), 'mt-4 h-10 md:grid-cols-2')}>
				<div className="col-span-2 bg-funnel-50 md:col-span-2"></div>
			</div>

			<div className={cn(defaultGridClasses(), 'mt-4 h-10 md:grid-cols-2')}>
				<div className="col-span-1 bg-funnel-50 md:col-span-1"></div>
				<div className="col-span-1 bg-funnel-50 md:col-span-1"></div>
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
