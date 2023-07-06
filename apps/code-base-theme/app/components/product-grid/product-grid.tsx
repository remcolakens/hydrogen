import { ChevronRightIcon } from '@code-internet-applications/icon';
import { Button, Heading } from '@code-internet-applications/react';
import {
	cn,
	defaultGridClasses,
} from '@code-internet-applications/tailwind-utils';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { ProductCard } from '~/components';
import { IProductGridProps } from '~/types';
import { productGridMapper } from './product-grid-mapper';

const ProductGrid: FC<IProductGridProps> = ({ title, button, products }) => {
	return (
		<>
			<Heading className="hidden md:inline-flex" size="heading4">
				{title}
			</Heading>
			<Heading className="inline-flex md:hidden" size="heading5">
				{title}
			</Heading>

			<div className={cn(defaultGridClasses(), 'my-6 grid')}>
				{productGridMapper(products).map((product) => (
					<motion.div
						className="col-span-1 md:col-span-6 lg:col-span-3"
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
							aspectRatio={product.aspectRatio}
							badges={product.badges}
							featuredImage={product.featuredImage}
							images={product.images}
						/>
					</motion.div>
				))}
			</div>

			{button ? (
				<Button
					size="lg"
					onClick={button.handleClick}
					className="hidden md:inline-flex"
				>
					{button?.text} <ChevronRightIcon className="ml-2" />
				</Button>
			) : null}
		</>
	);
};

export { ProductGrid };
