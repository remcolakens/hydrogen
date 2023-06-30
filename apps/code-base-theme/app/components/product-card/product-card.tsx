import { AddToBagIcon } from '@code-internet-applications/icon';
import {
	Badge,
	Button,
	Card,
	CardContent,
	CardFooter,
	Price,
	Text,
} from '@code-internet-applications/react';
import { Link } from '@remix-run/react';
import { FC, useState } from 'react';
import { HydrogenImage } from '~/components';
import type { IProductCardImage, IProductCardProps } from '~/types';

const ProductCard: FC<IProductCardProps> = ({
	brand,
	name,
	url,
	price,
	badges,
	featuredImage,
	images,
}) => {
	const [image, setImage] = useState<IProductCardImage>(featuredImage);

	const handleAddToCart = () => {
		console.log('Add to cart');
	};

	const handleProductImageChange = (isMouseEnter: boolean) => {
		if (isMouseEnter) {
			setImage(images?.[0] || featuredImage);
		} else {
			setImage(featuredImage);
		}
	};

	return (
		<div className="w-80">
			<Card
				onMouseEnter={() => handleProductImageChange(true)}
				onMouseLeave={() => handleProductImageChange(false)}
			>
				<Link to={url}>
					<CardContent className="relative overflow-hidden p-0">
						<div className="absolute left-0 top-0 z-10 flex flex-wrap items-start gap-2 p-4">
							{badges?.map((badge) => (
								<Badge key={badge.id} size="md" variant="primary">
									{badge.name}
								</Badge>
							))}
						</div>

						<HydrogenImage
							aspectRatio={1}
							width={image.width}
							height={image.height}
							src={image.src}
							className="overflow-hidden rounded-2xl"
						/>
						<div className="absolute bottom-0 left-0 z-10 p-4">
							<Button variant="funnel" size="lg" onClick={handleAddToCart}>
								Add to cart
								<AddToBagIcon className="ml-2.5" />
							</Button>
						</div>
					</CardContent>
					<CardFooter className="pt-4">
						<Text size="body3" className="text-gray-500">
							{brand}
						</Text>
						<Text size="label1" weight="bold">
							{name}
						</Text>
						<Price
							size="md"
							originalAmount={price.orginal}
							discountAmount={price.discount}
							orientation={price.orientation}
						/>
					</CardFooter>
				</Link>
			</Card>
		</div>
	);
};

export { ProductCard };
