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
import type { IFooterProps } from '~/types';
import { FooterNavigationSection } from './footer-navigation-section';
import { FooterNavigationSocials } from './footer-navigation-socials';

const Footer: FC<IFooterProps> = ({ title, description }) => {
	const currentYear = new Date().getFullYear();
	const copyrightSymbol = String.fromCharCode(169);

	return (
		<footer>
			<div className="border-b border-t border-gray-200">
				<Container>
					<ContainerContent>
						<div className="grid grid-cols-12 gap-4">
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
											svg: (
												<YoutubeSocialIcon className="h-10 w-10 md:h-8 md:w-8" />
											),
										},
										{
											id: 'social_2',
											title: 'Instagram',
											href: '#',
											svg: (
												<InstagramSocialIcon className="h-10 w-10 md:h-8 md:w-8" />
											),
										},
										{
											id: 'social_3',
											title: 'Medium',
											href: '#',
											svg: (
												<MediumSocialIcon className="h-10 w-10 md:h-8 md:w-8" />
											),
										},
										{
											id: 'social_4',
											title: 'Tiktok',
											href: '#',
											svg: (
												<TiktokSocialIcon className="h-10 w-10 md:h-8 md:w-8" />
											),
										},
									]}
								/>
							</section>

							<FooterNavigationSection
								title="Brand"
								ariaLabel="brand-navigation"
								orientation="vertical"
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
								ariaLabel="customer-navigation"
								orientation="vertical"
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
								ariaLabel="services-navigation"
								orientation="vertical"
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
								ariaLabel="contact-navigation"
								orientation="vertical"
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

			<Container className="mb-4 mt-6 md:mt-8">
				<ContainerContent>
					<div className="grid grid-cols-12 gap-2">
						<section className="col-span-12 flex justify-center">
							<ul className="flex gap-x-1">
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
							ariaLabel="privacy-navigation"
							className="flex justify-center md:col-span-12 md:mt-2"
							navigationMenuListClasses="items-center gap-2 md:gap-6 md:flex-row justify-center"
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

						<section className="col-span-12 mt-2 flex justify-center">
							<Text className="leading-7" as="span">
								{copyrightSymbol} Code Shop {currentYear}. All rights reserved
							</Text>
						</section>
					</div>
				</ContainerContent>
			</Container>
		</footer>
	);
};

export { Footer };
