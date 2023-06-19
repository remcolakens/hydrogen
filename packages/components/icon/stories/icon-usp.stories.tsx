import type { Meta, StoryObj } from '@storybook/react';
import {
	AwardIcon,
	BikeIcon,
	BoltIcon,
	BoxIcon,
	BugIcon,
	CalendarIcon,
	CarAlternativeIcon,
	CarIcon,
	CottonIcon,
	DeliveryIcon,
	ExploreIcon,
	KeyIcon,
	LeafAlternativeIcon,
	LeafIcon,
	LeatherIcon,
	LocationIcon,
	PlaneIcon,
	QualityIcon,
	ReturnsIcon,
	ReuseIcon,
	RulerIcon,
	ShippingAlternativeIcon,
	ShippingIcon,
	StarIcon,
	SupportIcon,
	SustainIcon,
	SustainabilityIcon,
	TagIcon,
	TeeIcon,
	TreeIcon,
	WaterIcon,
	WindmillIcon,
} from '../src';
import { Icon } from '../src/icon';
import { GridIcon } from './GridIcon';

const storyTitle = 'Icons/USP';

const uspIcons = [
	{ name: 'DeliveryIcon', component: DeliveryIcon },
	{ name: 'CarIcon', component: CarIcon },
	{ name: 'CarAlternativeIcon', component: CarAlternativeIcon },
	{ name: 'AwardIcon', component: AwardIcon },
	{ name: 'StarIcon', component: StarIcon },
	{ name: 'BikeIcon', component: BikeIcon },
	{ name: 'BoltIcon', component: BoltIcon },
	{ name: 'BugIcon', component: BugIcon },
	{ name: 'CalendarIcon', component: CalendarIcon },
	{ name: 'ExploreIcon', component: ExploreIcon },
	{ name: 'KeyIcon', component: KeyIcon },
	{ name: 'LocationIcon', component: LocationIcon },
	{ name: 'SupportIcon', component: SupportIcon },
	{ name: 'PlaneIcon', component: PlaneIcon },
	{ name: 'LeatherIcon', component: LeatherIcon },
	{ name: 'LeafIcon', component: LeafIcon },
	{ name: 'TreeIcon', component: TreeIcon },
	{ name: 'TeeIcon', component: TeeIcon },
	{ name: 'WindmillIcon', component: WindmillIcon },
	{ name: 'ReuseIcon', component: ReuseIcon },
	{ name: 'SustainIcon', component: SustainIcon },
	{ name: 'CottonIcon', component: CottonIcon },
	{ name: 'RulerIcon', component: RulerIcon },
	{ name: 'WaterIcon', component: WaterIcon },
	{ name: 'BoxIcon', component: BoxIcon },
	{ name: 'TagIcon', component: TagIcon },
	{ name: 'LeafAlternativeIcon', component: LeafAlternativeIcon },
];

const uspIconsLarge = [
	{ name: 'ReturnsIcon', component: ReturnsIcon },
	{ name: 'ShippingIcon', component: ShippingIcon },
	{ name: 'QualityIcon', component: QualityIcon },
	{ name: 'SustainabilityIcon', component: SustainabilityIcon },
	{ name: 'ShippingAlternativeIcon', component: ShippingAlternativeIcon },
];

const storyIcon = () => {
	return (
		<>
			<div className="mb-6 grid grid-cols-6 gap-4">
				{uspIcons.map((icon) => (
					<GridIcon key={icon.name} name={icon.name}>
						<icon.component />
					</GridIcon>
				))}
			</div>

			<div className="grid grid-cols-5 gap-4">
				{uspIconsLarge.map((icon) => (
					<GridIcon key={icon.name} name={icon.name}>
						<icon.component className="h-20 w-20" />
					</GridIcon>
				))}
			</div>
		</>
	);
};

const meta: Meta = {
	component: storyIcon,
	title: storyTitle,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const usp: Story = {
	decorators: [],
	name: 'USP',
	parameters: {},
};
