import type { Meta, StoryObj } from '@storybook/react';
import {
	AddAccountIcon,
	AddToBagIcon,
	AddToCartIcon,
	ArrowDiagonalIcon,
	ArrowDownIcon,
	ArrowForwardIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	ArrowUpIcon,
	AttachIcon,
	C1Icon,
	C2Icon,
	C4Icon,
	CartIcon,
	ChatAlternativeIcon,
	ChatIcon,
	CrossedEyeIcon,
	ExchangeIcon,
	EyeIcon,
	LinkIcon,
	LockAltIcon,
	LockAltOpenIcon,
	LockIcon,
	LockOpenIcon,
	PercentIcon,
	PlusAndBagIcon,
	PlusBagIcon,
	TickedBagIcon,
	VideoIcon,
} from '../src';
import { Icon } from '../src/icon';
import { GridIcon } from './GridIcon';

const storyTitle = 'Icons/Secondary';

const secondaryIcons = [
	{ name: 'LinkIcon', component: LinkIcon },
	{ name: 'AttachIcon', component: AttachIcon },
	{ name: 'LockIcon', component: LockIcon },
	{ name: 'LockOpenIcon', component: LockOpenIcon },
	{ name: 'LockAltIcon', component: LockAltIcon },
	{ name: 'LockAltOpenIcon', component: LockAltOpenIcon },
	{ name: 'EyeIcon', component: EyeIcon },
	{ name: 'CrossedEyeIcon', component: CrossedEyeIcon },
	{ name: 'AddAccountIcon', component: AddAccountIcon },
	{ name: 'AddToCartIcon', component: AddToCartIcon },
	{ name: 'CartIcon', component: CartIcon },
	{ name: 'ChatIcon', component: ChatIcon },
	{ name: 'ChatAlternativeIcon', component: ChatAlternativeIcon },
	{ name: 'ExchangeIcon', component: ExchangeIcon },
	{ name: 'PercentIcon', component: PercentIcon },
	{ name: 'C1Icon', component: C1Icon },
	{ name: 'C2Icon', component: C2Icon },
	{ name: 'C4Icon', component: C4Icon },
	{ name: 'ArrowRightIcon', component: ArrowRightIcon },
	{ name: 'ArrowUpIcon', component: ArrowUpIcon },
	{ name: 'ArrowLeftIcon', component: ArrowLeftIcon },
	{ name: 'ArrowDownIcon', component: ArrowDownIcon },
	{ name: 'ArrowDiagonalIcon', component: ArrowDiagonalIcon },
	{ name: 'ArrowForwardIcon', component: ArrowForwardIcon },
	{ name: 'TickedBagIcon', component: TickedBagIcon },
	{ name: 'PlugBagIcon', component: PlusBagIcon },
	{ name: 'PlugAndBagIcon', component: PlusAndBagIcon, class: 'w-[40px]' },
	{ name: 'AddToBagIcon', component: AddToBagIcon },
	{ name: 'VideoIcon', component: VideoIcon },
];

const storyIcon = () => {
	return (
		<div className="grid grid-cols-6 gap-4">
			{secondaryIcons.map((icon) => (
				<GridIcon key={icon.name} name={icon.name}>
					<icon.component className={icon?.class} />
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

export const secondary: Story = {
	decorators: [],
	name: 'Secondary',
	parameters: {},
};
