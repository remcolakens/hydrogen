import type { Meta, StoryObj } from '@storybook/react';
import {
	AmazonSocialIcon,
	FacebookSocialIcon,
	GoogleSocialIcon,
	InstagramSocialIcon,
	LinkedinSocialIcon,
	MediumSocialIcon,
	PinterestSocialIcon,
	SnapchatSocialIcon,
	TiktokSocialIcon,
	TumblrSocialIcon,
	TwitterSocialIcon,
	VimeoSocialIcon,
	YoutubeSocialIcon,
} from '../src';
import { Icon } from '../src/icon';
import { GridIcon } from './GridIcon';

const storyTitle = 'Icons/Social Media';

const socialIcons = [
	{ name: 'SnapchatSocialIcon', component: SnapchatSocialIcon },
	{ name: 'TumblrSocialIcon', component: TumblrSocialIcon },
	{ name: 'PinterestSocialIcon', component: PinterestSocialIcon },
	{ name: 'YoutubeSocialIcon', component: YoutubeSocialIcon },
	{ name: 'AmazonSocialIcon', component: AmazonSocialIcon },
	{ name: 'MediumSocialIcon', component: MediumSocialIcon },
	{ name: 'VimeoSocialIcon', component: VimeoSocialIcon },
	{ name: 'LinkedinSocialIcon', component: LinkedinSocialIcon },
	{ name: 'GoogleSocialIcon', component: GoogleSocialIcon },
	{ name: 'InstagramSocialIcon', component: InstagramSocialIcon },
	{ name: 'TwitterSocialIcon', component: TwitterSocialIcon },
	{ name: 'TiktokSocialIcon', component: TiktokSocialIcon },
	{ name: 'FacebookSocialIcon', component: FacebookSocialIcon },
];

const storyIcon = () => {
	return (
		<div className="grid grid-cols-6 gap-4">
			{socialIcons.map((icon) => (
				<GridIcon key={icon.name} name={icon.name}>
					<icon.component />
				</GridIcon>
			))}
		</div>
	);
};

const meta: Meta = {
	component: storyIcon,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const socialMedia: Story = {
	decorators: [],
	name: 'Social Media',
	parameters: {},
};
