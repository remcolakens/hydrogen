import { cn } from '@code-internet-applications/tailwind-utils';
import { FC } from 'react';
import {
	IFooterNavigationSocialsItemProps,
	IFooterNavigationSocialsProps,
} from '~/types';

const FooterNavigationSocials: FC<IFooterNavigationSocialsProps> = ({
	navigation,
	className,
}) => {
	return (
		<ul className={cn('inline-grid grid-cols-8 gap-2', className)}>
			{navigation.map((item: IFooterNavigationSocialsItemProps) => (
				<li key={item.id}>
					<a
						href={item.href}
						target="_blank"
						rel="nofollow noreferrer"
						title={item.title}
					>
						{item.svg}
					</a>
				</li>
			))}
		</ul>
	);
};

export { FooterNavigationSocials };
