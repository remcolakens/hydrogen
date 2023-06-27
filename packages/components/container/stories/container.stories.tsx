import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '../src/container';
import { ContainerContent } from '../src/container-content';

const meta: Meta<typeof Container> = {
	title: 'Components/Container',
};

export default meta;
type Story = StoryObj<typeof Container>;

export const container: Story = {
	render: () => (
		<>
			<Container>
				<ContainerContent className="h-24 bg-gray-200" size="sm">
					<div className="flex h-full items-center justify-center">
						sm (480px)
					</div>
				</ContainerContent>
				<ContainerContent className="h-48 bg-gray-200" size="md">
					<div className="flex h-full items-center justify-center">
						md (768px)
					</div>
				</ContainerContent>
			</Container>

			<Container>
				<ContainerContent className="h-48 bg-gray-400" size="lg">
					<div className="flex h-full items-center justify-center">
						lg (1024px)
					</div>
				</ContainerContent>
				<ContainerContent className="h-24 bg-gray-400" size="xl">
					<div className="flex h-full items-center justify-center">
						xl (1280px)
					</div>
				</ContainerContent>
			</Container>

			<Container>
				<ContainerContent className="h-48 bg-gray-600" size="2xl">
					<div className="flex h-full items-center justify-center">
						2xl (1440px)
					</div>
				</ContainerContent>
				<ContainerContent className="h-48 bg-gray-600" size="full">
					<div className="flex h-full items-center justify-center">
						full (100%)
					</div>
				</ContainerContent>
			</Container>
		</>
	),
};
