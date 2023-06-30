import {
	ApplePayIcon,
	IdealIcon,
	InstagramSocialIcon,
	MaestroIcon,
	MastercardIcon,
	MediumSocialIcon,
	PaypalIcon,
	TiktokSocialIcon,
	VisaIcon,
	YoutubeSocialIcon,
} from '@code-internet-applications/icon';
import {
	Container,
	ContainerContent,
	Text,
} from '@code-internet-applications/react';
import { FC } from 'react';
import { Logo } from '~/components';
import { FooterNavigationSection } from '~/components/footer/footer-navigation-section';
import { FooterNavigationSocials } from '~/components/footer/footer-navigation-socials';
import type { IFooterProps } from '~/types';

const Footer: FC<IFooterProps> = ({ title, description }) => {
	const currentYear = new Date().getFullYear();
	const copyrightSymbol = String.fromCharCode(169);

	return (
		<footer>
			<div className="border border-gray-200">
				<Container className="my-8">
					<ContainerContent>
						<div className="grid grid-cols-12">
							<section className="col-span-12 md:col-span-3">
								<Logo brand={false} size="large" className="mb-4" />
								<Text size="label1" weight="bold" className="mb-2">
									{title}
								</Text>
								<Text size="label1" className="mb-4">
									{description}
								</Text>

								<FooterNavigationSocials
									navigation={[
										{
											id: 'social_1',
											title: 'YouTube',
											href: '#',
											svg: <YoutubeSocialIcon />,
										},
										{
											id: 'social_2',
											title: 'Instagram',
											href: '#',
											svg: <InstagramSocialIcon />,
										},
										{
											id: 'social_3',
											title: 'Medium',
											href: '#',
											svg: <MediumSocialIcon />,
										},
										{
											id: 'social_4',
											title: 'Tiktok',
											href: '#',
											svg: <TiktokSocialIcon />,
										},
									]}
								/>
							</section>

							<FooterNavigationSection
								title="Brand"
								className="lg:col-start-5"
								navigation={[
									{
										id: 'brand_1',
										title: 'About',
										href: '#',
									},
									{
										id: 'brand_2',
										title: 'Blog',
										href: '#',
									},
									{
										id: 'brand_3',
										title: 'Contact',
										href: '#',
									},
									{
										id: 'brand_4',
										title: 'Account',
										href: '#',
									},
									{
										id: 'brand_5',
										title: 'FAQ',
										href: '#',
									},
								]}
							/>

							<FooterNavigationSection
								title="Customer"
								navigation={[
									{
										id: 'customer_1',
										title: 'Privacy policy',
										href: '#',
									},
									{
										id: 'customer_2',
										title: 'Terms & Conditions',
										href: '#',
									},
									{
										id: 'customer_3',
										title: 'Company policy',
										href: '#',
									},
								]}
							/>

							<FooterNavigationSection
								title="Services"
								navigation={[
									{
										id: 'services_1',
										title: 'Business',
										href: '#',
									},
									{
										id: 'services_2',
										title: 'Loyalty program',
										href: '#',
									},
									{
										id: 'services_3',
										title: 'Affiliate marketing',
										href: '#',
									},
								]}
							/>

							<FooterNavigationSection
								title="Need a hand?"
								navigation={[
									{
										id: 'hand_1',
										title: '+31 15 213 06 00',
										href: 'tel:+31152130600',
									},
									{
										id: 'services_2',
										title: 'info@code.nl',
										href: 'mailto:info@code.nl',
									},
									{
										id: 'services_3',
										title: '9:00AM - 5:30PM',
									},
								]}
							/>
						</div>
					</ContainerContent>
				</Container>
			</div>

			<Container className="mb-4 mt-8">
				<ContainerContent>
					<div className="grid grid-cols-12 gap-2">
						<section className="col-span-12 flex justify-center">
							<ul className="flex space-x-1">
								<li>
									<VisaIcon className="h-6 w-[34px] text-gray-200" />
								</li>
								<li>
									<IdealIcon className="h-6 w-[34px] text-gray-200" />
								</li>
								<li>
									<MastercardIcon className="h-6 w-[34px] text-gray-200" />
								</li>
								<li>
									<MaestroIcon className="h-6 w-[34px] text-gray-200" />
								</li>
								<li>
									<ApplePayIcon className="h-6 w-[34px] text-gray-200" />
								</li>
								<li>
									<PaypalIcon className="h-6 w-[34px] text-gray-200" />
								</li>
							</ul>
						</section>

						<FooterNavigationSection
							className="mt-0 flex justify-center md:col-span-12 [&>ul>li]:text-center [&>ul]:gap-6 md:[&>ul]:flex-row"
							navigation={[
								{
									id: 'terms_1',
									title: 'Privacy & Cookie policy',
									href: '#',
								},
								{
									id: 'terms_2',
									title: 'Terms & Conditions',
									href: '#',
								},
							]}
						/>

						<FooterNavigationSection
							className="mt-0 flex justify-center md:col-span-12 [&>ul]:mt-2"
							navigation={[
								{
									id: 'copyright_1',
									title: `${copyrightSymbol} Code Shop ${currentYear}. All rights
									reserved.`,
								},
							]}
						/>
					</div>
				</ContainerContent>
			</Container>
		</footer>
	);
};

export { Footer };
