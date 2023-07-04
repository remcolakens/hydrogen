import { Button, Heading, Text } from '@code-internet-applications/react';
import { cn } from '@code-internet-applications/tailwind-utils';
import { FC } from 'react';
import { Image } from '~/components';
import type { IHeroImageProps } from '~/types';

const createShopifySrcSet = (src: string, widths: number[]): string => {
	const imageParams = new URLSearchParams(src.split('?')[1]);

	return widths
		.map((width) => {
			const url = src.split('?')[0];
			imageParams.set('width', width.toString());
			return `${url}?${imageParams.toString()} ${width}w`;
		})
		.join(', ');
};

const HeroImage: FC<IHeroImageProps> = ({
	title,
	description,
	button,
	image,
}) => {
	return (
		<div className="relative grid h-[428px] w-full grid-cols-12 overflow-hidden rounded-b-3xl px-site-side-spacing pb-16 md:h-[648px] md:pb-28">
			<Image
				src={image.src}
				alt={image.alt}
				srcSet={createShopifySrcSet(image.src, [760, 1886, 2436, 2880])}
				decoding="async"
				loading="eager"
				sizes="(max-width: 2880px) 100vw, 2880px"
				width={2880}
				height={648}
				className="pointer-events-none absolute inset-0 -z-10 grid"
			/>

			<div className="col-span-12 flex flex-col items-start justify-end text-white md:col-span-6">
				<Heading className="text-5xl leading-h3 md:text-8xl md:leading-h1">
					{title}
				</Heading>
				<Text className="mt-4" size="body1">
					{description}
				</Text>

				{button ? (
					<Button
						size={button?.size ?? 'lg'}
						className={cn(button?.className, 'mt-8')}
						onClick={button?.handleClick}
					>
						{button.text}
					</Button>
				) : null}
			</div>
		</div>
	);
};

export { HeroImage };
