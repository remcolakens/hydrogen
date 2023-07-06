import { Button, Heading, Text } from '@code-internet-applications/react';
import {
	cn,
	defaultGridClasses,
} from '@code-internet-applications/tailwind-utils';
import parse from 'html-react-parser';
import { FC } from 'react';
import type { ITextBlockProps } from '~/types';

const TextBlock: FC<ITextBlockProps> = ({
	title,
	description,
	button,
	className,
}) => (
	<div className={defaultGridClasses()}>
		<div
			className={cn(
				'col-span-2 text-center md:col-span-8 md:col-start-3',
				className,
			)}
		>
			<Heading size="heading4" className="hidden md:inline-flex">
				{parse(title)}
			</Heading>
			<Heading size="heading6" className="inline-flex md:hidden">
				{parse(title)}
			</Heading>

			<Text className="mt-6" size="body1">
				{parse(description)}
			</Text>

			{button ? (
				<Button
					variant={button.variant}
					size={button?.size}
					className={cn(button?.className, 'mt-6')}
					onClick={button?.handleClick}
				>
					{button.text}
				</Button>
			) : null}
		</div>
	</div>
);

export { TextBlock };
