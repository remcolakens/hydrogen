import { cn } from '@code-internet-applications/tailwind-utils';
import { FC } from 'react';
import { Image } from '~/components';
import { IMainNavigationSubnavImage } from './types';

const MainNavigationSubnavImage: FC<IMainNavigationSubnavImage> = ({
	name,
	image,
	className,
}) => (
	<div className={cn('col-span-4', className)} key={name}>
		<Image
			aspectRatio={9 / 5}
			width={image.width}
			height={image.height}
			src={image.src}
			alt={image.alt}
			className="overflow-hidden rounded-2xl"
		/>
	</div>
);

export { MainNavigationSubnavImage };
