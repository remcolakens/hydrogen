import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgCzechFlagIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<g clipPath="url(#czech-flag-icon_svg__a)">
				<path fill="#fff" d="M0 0h24v12H0V0Z" />
				<path fill="#D7141A" d="M0 12h24v12H0V12Z" />
				<path fill="#11457E" d="M14.063 12 0 0v24l14.063-12Z" />
			</g>
			<defs>
				<clipPath id="czech-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgCzechFlagIcon;
