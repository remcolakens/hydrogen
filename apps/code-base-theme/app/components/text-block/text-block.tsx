import { Button, Heading, Text } from '@code-internet-applications/react';
import { cn } from '@code-internet-applications/tailwind-utils';
import parse from 'html-react-parser';
import { FC } from 'react';
import type { ITextBlockProps } from '~/types';

const TextBlock: FC<ITextBlockProps> = ({
	title,
	description,
	button,
	className,
}) => (
	<div className="grid grid-cols-12 gap-4">
		<div
			className={cn(
				'col-span-12 text-center md:col-span-8 md:col-start-3',
				className,
			)}
		>
			<Heading className="text-xl leading-h6 md:text-4xl md:leading-h4">
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
