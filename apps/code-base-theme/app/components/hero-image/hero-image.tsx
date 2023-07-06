import { Heading, Text } from '@code-internet-applications/react';
import {
	cn,
	defaultGridClasses,
} from '@code-internet-applications/tailwind-utils';
import { FC } from 'react';
import { HydrogenImage } from '~/components';
import type { IHeroImageProps } from '~/types';
import { HeroImageButton } from './hero-image-button';

const HeroImage: FC<IHeroImageProps> = ({
	title,
	description,
	button,
	image,
}) => {
	return (
		<div
			className={cn(
				defaultGridClasses(),
				'relative h-[423px] w-full overflow-hidden rounded-b-3xl px-site-side-spacing pb-16 md:h-[640px] md:pb-28',
			)}
		>
			<div className="pointer-events-none absolute inset-0 -z-10">
				<HydrogenImage
					image={image.desktop}
					aspectRatio="9 / 4"
					sizes="(min-width: 1440px) 1400px, (min-width: 768px) 100vw"
					name="The Hydrogen Snowboard"
					className="hidden h-full w-full object-cover md:block"
					loading="eager"
				/>

				<HydrogenImage
					image={image.mobile}
					aspectRatio="8 / 9"
					sizes="(min-width: 1440px) 1400px, (min-width: 768px) 100vw"
					name="The Hydrogen Snowboard"
					className="block h-full w-full object-cover md:hidden"
					loading="eager"
				/>
			</div>

			<div className="col-span-2 flex flex-col items-start justify-end text-white md:col-span-12 lg:col-span-8 xl:col-span-6">
				<Heading size="heading1" className="hidden md:inline-flex">
					{title}
				</Heading>
				<Heading size="heading3" className="inline-flex md:hidden">
					{title}
				</Heading>

				<Text className="mt-4" size="body1">
					{description}
				</Text>

				<HeroImageButton
					text={button?.text}
					handleClick={button?.handleClick}
					href={button?.href}
					size={button?.size}
					variant={button?.variant}
					className={button?.className}
				/>
			</div>
		</div>
	);
};

export { HeroImage };
