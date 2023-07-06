import { Image } from '@shopify/hydrogen';
import { FC } from 'react';
import type { IHydrogenImageProps } from '~/types';

const HydrogenImage: FC<IHydrogenImageProps> = ({
	className,
	aspectRatio,
	alt,
	name,
	sizes,
	image,
	loading,
}) => (
	<Image
		aspectRatio={aspectRatio}
		sizes={sizes}
		data={image}
		alt={alt || `Picture of ${name}`}
		className={className}
		loading={loading}
	/>
);
export { HydrogenImage };
