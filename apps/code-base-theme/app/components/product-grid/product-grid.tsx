import {
	cn,
	defaultGridClasses,
} from '@code-internet-applications/tailwind-utils';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { HomepageFeaturedProductsQuery } from 'storefrontapi.generated';
import { ButtonBlock, HeadingBlock, ProductCard } from '~/components';
import { IProductGridProps } from '~/types';
import { productGridMapper } from './product-grid-mapper';

const calculateSizes = (columns: number) => {
	let sizes,
		className = null;

	if (columns === 1) {
		sizes = '(min-width: 1440px) 650px, (min-width: 768px) 100vw';
		className = 'col-span-2 md:col-span-12 lg:col-span-1';
	} else if (columns === 2) {
		sizes = '(min-width: 1440px) 650px, (min-width: 768px) 100vw';
		className = 'col-span-1 md:col-span-6 lg:col-span-6';
	} else {
		sizes = '(min-width: 1440px) 100vw, (min-width: 768px) 50vw';
		className = 'col-span-2 md:col-span-6 lg:col-span-3';
	}

	return { sizes, className };
};

const ProductGrid: FC<IProductGridProps> = ({
	title,
	button,
	products,
	columns = 4,
}) => {
	return (
		<>
			<HeadingBlock title={title} />

			<div className={cn(defaultGridClasses(), 'my-6 grid')}>
				{productGridMapper(products as HomepageFeaturedProductsQuery).map(
					(product) => (
						<motion.div
							className={calculateSizes(columns).className}
							key={product.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
						>
							<ProductCard
								id={product.id}
								brand={product.brand}
								name={product.name}
								url={product.url}
								price={product.price}
								aspectRatio={'7 / 9'}
								badges={product.badges}
								featuredImage={product.featuredImage}
								images={product.images}
								sizes={calculateSizes(columns).sizes}
							/>
						</motion.div>
					),
				)}
			</div>

			<ButtonBlock
				text={button?.text}
				handleClick={button?.handleClick}
				href={button?.href}
				size={button?.size}
				variant={button?.variant}
				className={button?.className}
			/>
		</>
	);
};

export { ProductGrid };
