import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../src/accordion';

import type { Meta, StoryObj } from '@storybook/react';

const storyTitle = 'Accordion';

const StoryComponent = () => (
	<Accordion type="single" collapsible className="w-full">
		<AccordionItem value="item-1">
			<AccordionTrigger className="bg-red-500">
				Is it accessible?
			</AccordionTrigger>
			<AccordionContent>
				Yes. It adheres to the WAI-ARIA design pattern.
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-2">
			<AccordionTrigger>Is it styled?</AccordionTrigger>
			<AccordionContent>
				Yes. It comes with default styles that match the other components'
				aesthetic.
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-3">
			<AccordionTrigger>Is it animated?</AccordionTrigger>
			<AccordionContent>
				Yes. It's animated by default, but you can disable it if you prefer.
			</AccordionContent>
		</AccordionItem>
	</Accordion>
);

const storyJSX = `
<Accordion type="single" collapsible className="w-full">
	<AccordionItem value="item-1">
		<AccordionTrigger className="bg-red-500">
			Is it accessible?
		</AccordionTrigger>
		<AccordionContent>
			Yes. It adheres to the WAI-ARIA design pattern.
		</AccordionContent>
	</AccordionItem>
	<AccordionItem value="item-2">
		<AccordionTrigger>Is it styled?</AccordionTrigger>
		<AccordionContent>
			Yes. It comes with default styles that matches the other components
			aesthetic.
		</AccordionContent>
	</AccordionItem>
	<AccordionItem value="item-3">
		<AccordionTrigger>Is it animated?</AccordionTrigger>
		<AccordionContent>
			Yes. Its animated by default, but you can disable it if you prefer.
		</AccordionContent>
	</AccordionItem>
</Accordion>
`;

// Story Meta Settings

const meta: Meta<typeof StoryComponent> = {
	component: StoryComponent,
	title: storyTitle,
};

export default meta;

// Story <StoryComponent />
type Story = StoryObj<typeof StoryComponent>;
export const Default: Story = () => <StoryComponent />;

// Story parameters
Default.parameters = {
	docs: {
		source: {
			code: storyJSX,
		},
	},
};
