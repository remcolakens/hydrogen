import { AspectRatio } from '@code-internet-applications/react';
import { FC } from 'react';
import type { IImageProps } from './types';

const Image: FC<IImageProps> = ({
	className,
	aspectRatio,
	alt,
	src,
	srcSet,
	sizes,
	width,
	height,
	loading = 'lazy',
}) => {
	return (
		<div className={className}>
			<AspectRatio ratio={aspectRatio}>
				<img
					className="h-full w-full object-cover"
					src={src}
					srcSet={srcSet}
					sizes={sizes}
					width={width}
					height={height}
					loading={loading}
					alt={alt}
				/>
			</AspectRatio>
		</div>
	);
};

export { Image };
