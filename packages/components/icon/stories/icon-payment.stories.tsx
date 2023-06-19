import type { Meta, StoryObj } from '@storybook/react';
import {
	AffirmIcon,
	AfterpayIcon,
	AlipayIcon,
	AmazonIcon,
	AmexIcon,
	ApplePayIcon,
	BancontactIcon,
	BelfiusIcon,
	BitpayIcon,
	CitadeleIcon,
	DinersClubIcon,
	DiscoverIcon,
	EloIcon,
	GiropayIcon,
	GooglePayIcon,
	IdealIcon,
	InteracIcon,
	JcbIcon,
	KbcIcon,
	KlarnaIcon,
	MaestroIcon,
	MastercardIcon,
	PayoneerIcon,
	PaypalIcon,
	PaysafeIcon,
	QiwiIcon,
	SepaIcon,
	ShopPayIcon,
	SkrillIcon,
	SofortIcon,
	StripeIcon,
	TrustlyIcon,
	UnionPayIcon,
	VerifoneIcon,
	VisaIcon,
	WebmoneyIcon,
	WechatIcon,
} from '../src';
import { Icon } from '../src/icon';
import { GridIcon } from './GridIcon';

const storyTitle = 'Icons/Payment';

const paymentIcons = [
	{ name: 'VisaIcon', component: VisaIcon },
	{ name: 'IdealIcon', component: IdealIcon },
	{ name: 'MastercardIcon', component: MastercardIcon },
	{ name: 'MaestroIcon', component: MaestroIcon },
	{ name: 'DiscoverIcon', component: DiscoverIcon },
	{ name: 'AmexIcon', component: AmexIcon },
	{ name: 'StripeIcon', component: StripeIcon },
	{ name: 'PaypalIcon', component: PaypalIcon },
	{ name: 'InteracIcon', component: InteracIcon },
	{ name: 'VerifoneIcon', component: VerifoneIcon },
	{ name: 'BelfiusIcon', component: BelfiusIcon },
	{ name: 'ApplePayIcon', component: ApplePayIcon },
	{ name: 'GooglePayIcon', component: GooglePayIcon },
	{ name: 'BitpayIcon', component: BitpayIcon },
	{ name: 'AmazonIcon', component: AmazonIcon },
	{ name: 'AlipayIcon', component: AlipayIcon },
	{ name: 'ShopPayIcon', component: ShopPayIcon },
	{ name: 'KlarnaIcon', component: KlarnaIcon },
	{ name: 'SofortIcon', component: SofortIcon },
	{ name: 'QiwiIcon', component: QiwiIcon },
	{ name: 'DinersClubIcon', component: DinersClubIcon },
	{ name: 'UnionPayIcon', component: UnionPayIcon },
	{ name: 'EloIcon', component: EloIcon },
	{ name: 'KbcIcon', component: KbcIcon },
	{ name: 'SepaIcon', component: SepaIcon },
	{ name: 'WechatIcon', component: WechatIcon },
	{ name: 'BancontactIcon', component: BancontactIcon },
	{ name: 'GiropayIcon', component: GiropayIcon },
	{ name: 'PayoneerIcon', component: PayoneerIcon },
	{ name: 'JcbIcon', component: JcbIcon },
	{ name: 'WebmoneyIcon', component: WebmoneyIcon },
	{ name: 'CitadeleIcon', component: CitadeleIcon },
	{ name: 'SkrillIcon', component: SkrillIcon },
	{ name: 'PaysafeIcon', component: PaysafeIcon },
	{ name: 'AfterpayIcon', component: AfterpayIcon },
	{ name: 'AffirmIcon', component: AffirmIcon },
	{ name: 'TrustlyIcon', component: TrustlyIcon },
];

const storyIcon = () => {
	return (
		<div className="grid grid-cols-6 gap-4">
			{paymentIcons.map((icon) => (
				<GridIcon key={icon.name} name={icon.name}>
					<icon.component className="h-6 w-[34px] text-gray-200" />
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

export const payment: Story = {
	decorators: [],
	name: 'Payment',
	parameters: {},
};
