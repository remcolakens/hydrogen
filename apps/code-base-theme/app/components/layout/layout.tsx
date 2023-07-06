import { AnnouncementBar } from '@code-internet-applications/react';
import { FC } from 'react';
import { Footer, Header } from '~/components';
import type { ILayoutProps } from '~/types';

const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<div className="flex min-h-screen flex-col">
			<div>
				<a href="#mainContent" className="sr-only">
					Skip to content
				</a>
			</div>

			<AnnouncementBar
				variant="primary"
				text="Free shipping on all orders above €30"
			/>

			<Header />

			<main role="main" id="mainContent" className="flex-grow">
				{children}
			</main>

			<Footer
				title="Code Shop is the best Shopify Plus Shop"
				description="Lorem ipsum dolor sit amet consectetur. Nunc egestas at nibh quisque ornare nulla semper id."
			/>
		</div>
	);
};

export { Layout };
