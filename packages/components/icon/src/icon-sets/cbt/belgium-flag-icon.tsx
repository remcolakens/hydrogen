import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgBelgiumFlagIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<g
				fillRule="evenodd"
				clipPath="url(#belgium-flag-icon_svg__a)"
				clipRule="evenodd"
			>
				<path fill="#010000" d="M0 0h8.002v24H0V0Z" />
				<path fill="#FFD90C" d="M8.001 0h7.997v24H8.001V0Z" />
				<path fill="#F31830" d="M15.998 0H24v24h-8.002V0Z" />
			</g>
			<defs>
				<clipPath id="belgium-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgBelgiumFlagIcon;
