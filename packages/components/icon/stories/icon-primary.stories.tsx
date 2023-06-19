import type { Meta, StoryObj } from '@storybook/react';
import {
	AccountIcon,
	BagIcon,
	CheckIcon,
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronUpIcon,
	ControlsHorizontalIcon,
	ControlsVerticalIcon,
	CopyAlternativeIcon,
	CopyIcon,
	CrossIcon,
	DownloadIcon,
	ForwardIcon,
	HamburgerIcon,
	MinusIcon,
	PlusIcon,
	PreviousIcon,
	ReturnIcon,
	SearchIcon,
	StackIcon,
	SwapHorizontalIcon,
	SwapVerticalIcon,
	TrashIcon,
	UploadIcon,
} from '../src';
import { Icon } from '../src/icon';
import { GridIcon } from './GridIcon';

const storyTitle = 'Icons/Primary';

const primaryIcons = [
	{ name: 'BagIcon', component: BagIcon },
	{ name: 'SearchIcon', component: SearchIcon },
	{ name: 'AccountIcon', component: AccountIcon },
	{ name: 'ChevronDownIcon', component: ChevronDownIcon },
	{ name: 'ChevronLeftIcon', component: ChevronLeftIcon },
	{ name: 'ChevronRightIcon', component: ChevronRightIcon },
	{ name: 'ChevronUpIcon', component: ChevronUpIcon },
	{ name: 'PlusIcon', component: PlusIcon },
	{ name: 'MinusIcon', component: MinusIcon },
	{ name: 'HamburgerIcon', component: HamburgerIcon },
	{ name: 'CheckIcon', component: CheckIcon },
	{ name: 'CrossIcon', component: CrossIcon },
	{ name: 'ControlsVerticalIcon', component: ControlsVerticalIcon },
	{ name: 'ControlsHorizontalIcon', component: ControlsHorizontalIcon },
	{ name: 'StackIcon', component: StackIcon },
	{ name: 'SwapVerticalIcon', component: SwapVerticalIcon },
	{ name: 'SwapHorizontalIcon', component: SwapHorizontalIcon },
	{ name: 'ReturnIcon', component: ReturnIcon },
	{ name: 'ForwardIcon', component: ForwardIcon },
	{ name: 'PreviousIcon', component: PreviousIcon },
	{ name: 'CopyIcon', component: CopyIcon },
	{ name: 'CopyAlternativeIcon', component: CopyAlternativeIcon },
	{ name: 'DownloadIcon', component: DownloadIcon },
	{ name: 'UploadIcon', component: UploadIcon },
	{ name: 'TrashIcon', component: TrashIcon },
];

const storyIcon = () => {
	return (
		<div className="grid grid-cols-6 gap-4">
			{primaryIcons.map((icon) => (
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

export const primary: Story = {
	decorators: [],
	name: 'Primary',
	parameters: {},
};
