import type { Meta, StoryObj } from '@storybook/react';
import {
	AustriaFlagIcon,
	BelgiumFlagIcon,
	CzechFlagIcon,
	DenmarkFlagIcon,
	EstoniaFlagIcon,
	FinlandFlagIcon,
	FranceFlagIcon,
	GermanyFlagIcon,
	LatviaFlagIcon,
	LithuaniaFlagIcon,
	LuxembourgFlagIcon,
	NetherlandsFlagIcon,
	NorwayFlagIcon,
	PolandFlagIcon,
	PortugalFlagIcon,
	SpainFlagIcon,
	SwedenFlagIcon,
	SwitzerlandFlagIcon,
	UkFlagIcon,
	UkraineFlagIcon,
	UsaFlagIcon,
} from '../src';
import { Icon } from '../src/icon';
import { GridIcon } from './GridIcon';

const storyTitle = 'Icons/Flag';

const countryIcons = [
	{ name: 'NetherlandsFlagIcon', component: NetherlandsFlagIcon },
	{ name: 'GermanyFlagIcon', component: GermanyFlagIcon },
	{ name: 'PortugalFlagIcon', component: PortugalFlagIcon },
	{ name: 'SpainFlagIcon', component: SpainFlagIcon },
	{ name: 'UkFlagIcon', component: UkFlagIcon },
	{ name: 'BelgiumFlagIcon', component: BelgiumFlagIcon },
	{ name: 'LuxembourgFlagIcon', component: LuxembourgFlagIcon },
	{ name: 'SwitzerlandFlagIcon', component: SwitzerlandFlagIcon },
	{ name: 'DenmarkFlagIcon', component: DenmarkFlagIcon },
	{ name: 'AustriaFlagIcon', component: AustriaFlagIcon },
	{ name: 'NorwayFlagIcon', component: NorwayFlagIcon },
	{ name: 'SwedenFlagIcon', component: SwedenFlagIcon },
	{ name: 'CzechFlagIcon', component: CzechFlagIcon },
	{ name: 'PolandFlagIcon', component: PolandFlagIcon },
	{ name: 'LithuaniaFlagIcon', component: LithuaniaFlagIcon },
	{ name: 'LatviaFlagIcon', component: LatviaFlagIcon },
	{ name: 'EstoniaFlagIcon', component: EstoniaFlagIcon },
	{ name: 'FinlandFlagIcon', component: FinlandFlagIcon },
	{ name: 'FranceFlagIcon', component: FranceFlagIcon },
	{ name: 'UsaFlagIcon', component: UsaFlagIcon },
	{ name: 'UkraineFlagIcon', component: UkraineFlagIcon },
];

const storyIcon = () => {
	return (
		<div className="grid grid-cols-6 gap-4">
			{countryIcons.map((icon) => (
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

export const flag: Story = {
	decorators: [],
	name: 'Flag',
	parameters: {},
};
