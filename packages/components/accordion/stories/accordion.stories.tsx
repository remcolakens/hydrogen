import { Meta } from '@storybook/react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../src';

const meta: Meta = {
	title: 'Components/Accordion',
};

export default meta;

export const primary = () => {
	const accordionItems = [
		{
			triggerText: 'Where is my order?',
			content:
				'If you have selected home delivery, you can query the status of your order at any time in the My purchases section. If you still do not have an account at Code, you will have to enter your e-mail address and order number.',
		},
		{
			triggerText: 'How do I issue a return?',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
		{
			triggerText: 'Can I wishing an item I like?',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
		{
			triggerText: 'What is your shipping policy?',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
	];

	return (
		<Accordion type="single" collapsible>
			{accordionItems.map((item, index) => (
				<AccordionItem key={`item-${index}`} value={`item-${index}`}>
					<AccordionTrigger>{item.triggerText}</AccordionTrigger>
					<AccordionContent>{item.content}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
};
