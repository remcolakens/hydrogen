import { Text } from '@code-internet-applications/react';
import { cn } from '@code-internet-applications/tailwind-utils';
import { FC } from 'react';
import {
	IFooterNavigationSectionItemProps,
	IFooterNavigationSectionProps,
} from '~/types';

const FooterNavigationSection: FC<IFooterNavigationSectionProps> = ({
	title,
	navigation,
	className,
}) => {
	return (
		<section
			className={cn('col-span-12 mt-6 md:col-span-2 md:mt-0', className)}
		>
			{title ? (
				<Text size="label1" weight="bold">
					{title}
				</Text>
			) : null}

			<ul className="mt-4 flex flex-col gap-2 md:mt-6 md:gap-3">
				{navigation.map((item: IFooterNavigationSectionItemProps) => (
					<li key={item.id}>
						{item.href ? (
							<a href={item.href}>{item.title}</a>
						) : (
							<Text size="label1">{item.title}</Text>
						)}
					</li>
				))}
			</ul>
		</section>
	);
};

export { FooterNavigationSection };
