import { Heading } from '@code-internet-applications/react';
import { FC } from 'react';
import { IHeadingBlockProps } from './types';

const HeadingBlock: FC<IHeadingBlockProps> = ({ title, className }) => {
	if (title) {
		return (
			<div className={className}>
				<Heading className="hidden md:inline-flex" size="heading4">
					{title}
				</Heading>

				<Heading className="inline-flex md:hidden" size="heading5">
					{title}
				</Heading>
			</div>
		);
	}

	return null;
};

export { HeadingBlock };
