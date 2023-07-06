import type { Meta, StoryObj } from '@storybook/react';
import { AnnouncementBar } from '../src/announcement-bar';

const meta: Meta<typeof AnnouncementBar> = {
	title: 'Components/Announcement Bar',
};

export default meta;
type Story = StoryObj<typeof AnnouncementBar>;

export const announcementbar: Story = {
	render: () => (
		<AnnouncementBar
			variant="primary"
			text="Free shipping on all orders above €30"
		/>
	),
};
