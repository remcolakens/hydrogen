import { AspectRatio } from '@code-internet-applications/react';
import { Image } from '@shopify/hydrogen';
import { FC } from 'react';
import type { IHydrogenImageProps } from './types';

const HydrogenImage: FC<IHydrogenImageProps> = ({
	className,
	aspectRatio,
	alt,
	src,
	width,
	height,
	crop,
}) => {
	return (
		<div className={className}>
			<AspectRatio ratio={aspectRatio}>
				<Image
					src={src}
					width={width}
					height={height}
					crop={crop}
					alt={alt}
					aspectRatio={String(aspectRatio)}
					sizes="(min-width: 45em) 50vw, 100vw"
				/>
			</AspectRatio>
		</div>
	);
};

export { HydrogenImage };
