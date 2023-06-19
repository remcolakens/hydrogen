import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgLatviaFlagIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<g
				fillRule="evenodd"
				clipPath="url(#latvia-flag-icon_svg__a)"
				clipRule="evenodd"
			>
				<path fill="#fff" d="M0 0h24v24H0V0Z" />
				<path fill="#981E32" d="M0 0h24v9.6H0V0Zm0 14.4h24V24H0v-9.6Z" />
			</g>
			<defs>
				<clipPath id="latvia-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgLatviaFlagIcon;
