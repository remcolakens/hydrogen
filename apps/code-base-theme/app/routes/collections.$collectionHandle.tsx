import {
	getSortValuesFromParam,
	type SortParam,
} from '@code-internet-applications/hydrogen-utils';

import {
	C1Icon,
	C2Icon,
	C4Icon,
	StackIcon,
} from '@code-internet-applications/icon';

import {
	Button,
	buttonVariants,
	Container,
	ContainerContent,
} from '@code-internet-applications/react';

import { cn } from '@code-internet-applications/tailwind-utils';
import { Link, useLoaderData } from '@remix-run/react';
import {
	getPaginationVariables__unstable as getPaginationVariables,
	Pagination__unstable as Pagination,
} from '@shopify/hydrogen';
import { json, type LoaderArgs } from '@shopify/remix-oxygen';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import invariant from 'tiny-invariant';
import { HeadingBlock, ProductGrid } from '~/components';
import { COLLECTION_QUERY } from '~/graphql/collection';
import { IGridViewProps } from '~/types';

export async function loader({ params, request, context }: LoaderArgs) {
	const paginationVariables = getPaginationVariables(request, {
		pageBy: 16,
	});

	const { collectionHandle } = params;

	invariant(collectionHandle, 'Missing collectionHandle param');

	const searchParams = new URL(request.url).searchParams;

	const { sortKey, reverse } = getSortValuesFromParam(
		searchParams.get('sort') as SortParam,
	);

	const filters: [] = [];

	const { collection } = await context.storefront.query(COLLECTION_QUERY, {
		variables: {
			...paginationVariables,
			handle: collectionHandle,
			filters,
			sortKey,
			reverse,
		},
	});

	if (!collection) {
		throw new Response('collection', { status: 404 });
	}

	return json({
		collection,
	});
}

const gridViewButtons: IGridViewProps[] = [
	{ view: 4, icon: <C4Icon />, className: 'hidden md:inline-flex' },
	{ view: 2, icon: <C2Icon />, className: '' },
	{ view: 1, icon: <C1Icon />, className: 'md:hidden' },
];

export default function Homepage() {
	const { collection } = useLoaderData<typeof loader>();
	const { width } = useWindowSize();
	const [gridView, setGridView] = useState<number>();

	useEffect(() => {
		width < 768 ? setGridView(2) : setGridView(4);
	}, [width]);

	const handleGridViewChange = (view: number) => {
		setGridView(view);
	};

	return (
		<Container>
			<ContainerContent>
				<div className="flex items-center justify-between">
					<HeadingBlock title={collection.title} />

					<div className="flex items-center">
						<div className="flex">
							{gridViewButtons.map((option) => (
								<Button
									key={option.view}
									icon
									variant="ghost"
									className={cn(
										'inline-flex text-gray-300',
										option.className,
										gridView === option.view && 'text-black',
									)}
									onClick={() => handleGridViewChange(option.view)}
								>
									{option.icon}
								</Button>
							))}
						</div>

						<div className="fixed bottom-0 left-0 z-20 w-full bg-white p-4 md:relative md:p-0 md:pl-2">
							<Button
								variant="outline"
								size="lg"
								className="focus:border-1 w-full border-black text-black hover:bg-black hover:text-white active:bg-gray-700"
							>
								<StackIcon className="mr-2.5" />
								Filter & Sort
							</Button>
						</div>
					</div>
				</div>
			</ContainerContent>

			<ContainerContent>
				<Pagination connection={collection.products}>
					{({
						nodes,
						isLoading,
						state,
						nextPageUrl,
						previousPageUrl,
						hasNextPage,
						hasPreviousPage,
					}) => (
						<>
							{collection.products.pageInfo.hasPreviousPage &&
								hasPreviousPage && (
									<div className="mt-6 flex items-center justify-center">
										<Link
											state={state}
											to={previousPageUrl}
											className={buttonVariants({
												variant: 'primary',
												size: 'lg',
											})}
											preventScrollReset
										>
											{isLoading ? 'Loading...' : 'Load previous products'}
										</Link>
									</div>
								)}

							<ProductGrid
								columns={gridView}
								products={{ products: { nodes } }}
							/>

							<div className="mt-6 flex items-center justify-center">
								{hasNextPage && (
									<Link
										state={state}
										to={nextPageUrl}
										className={buttonVariants({
											variant: 'primary',
											size: 'lg',
										})}
										preventScrollReset
									>
										{isLoading ? 'Loading...' : 'Load more products'}
									</Link>
								)}
							</div>
						</>
					)}
				</Pagination>
			</ContainerContent>
		</Container>
	);
}
