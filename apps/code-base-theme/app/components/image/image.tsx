import { AspectRatio } from '@code-internet-applications/react';
import { FC } from 'react';
import type { IImageProps } from '~/types';

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
	decoding,
}) => {
	return (
		<div className={className}>
			{aspectRatio ? (
				<AspectRatio ratio={aspectRatio}>
					<img
						className="block h-full w-full object-cover"
						src={src}
						srcSet={srcSet}
						sizes={sizes}
						width={width}
						height={height}
						loading={loading}
						decoding={decoding}
						alt={alt}
					/>
				</AspectRatio>
			) : (
				<img
					className="block h-full w-full object-cover"
					src={src}
					srcSet={srcSet}
					sizes={sizes}
					width={width}
					height={height}
					loading={loading}
					decoding={decoding}
					alt={alt}
				/>
			)}
		</div>
	);
};

export { Image };
