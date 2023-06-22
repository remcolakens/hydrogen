import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgDenmarkFlagIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<g clipPath="url(#denmark-flag-icon_svg__a)">
				<path fill="#C8102E" d="M0 0h24.005v24H0V0Z" />
				<path fill="#fff" d="M6.75 0h3.427v24H6.75V0Z" />
				<path fill="#fff" d="M0 10.284h24.005v3.432H0v-3.432Z" />
			</g>
			<defs>
				<clipPath id="denmark-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgDenmarkFlagIcon;
