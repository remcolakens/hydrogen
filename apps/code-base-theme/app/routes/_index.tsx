import { Button, Heading, Text } from '@code-internet-applications/react';
import { Logo } from '~/components/logo';

export default function Homepage() {
	return (
		<div className="container">
			<div className="container__content">
				<div className="py-8">
					<Logo className="mb-8" />
					<Heading>Hello CODE.</Heading>
					<Text className="mt-4">
						Welcome to the Code Base Theme Hydrogen (CBTH).
					</Text>
					<Button
						className="mt-4"
						onClick={() => {
							window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
						}}
					>
						Lets get started
					</Button>
				</div>
			</div>
		</div>
	);
}
