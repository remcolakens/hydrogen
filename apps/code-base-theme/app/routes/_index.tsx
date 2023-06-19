import { Text } from '@code-internet-applications/react';
import { Logo } from '~/components/logo';

export default function Homepage() {
	return (
		<div className="container">
			<div className="container__content">
				<div className="py-8">
					<Logo className="mb-8" />
					<Text>Hello CODE.</Text>
				</div>
			</div>
		</div>
	);
}
