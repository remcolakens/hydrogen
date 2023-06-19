import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgNorwayFlagIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<g clipPath="url(#norway-flag-icon_svg__a)">
				<path fill="#ED2939" d="M0 0h24v24H0V0Z" />
				<path fill="#fff" d="M6 0h6v24H6V0Z" />
				<path fill="#fff" d="M0 9h24v6H0V9Z" />
				<path fill="#002664" d="M7.5 0h3v24h-3V0Z" />
				<path fill="#002664" d="M0 10.5h24v3H0v-3Z" />
			</g>
			<defs>
				<clipPath id="norway-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgNorwayFlagIcon;
