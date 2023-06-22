import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgFranceFlagIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<g
				fillRule="evenodd"
				clipPath="url(#france-flag-icon_svg__a)"
				clipRule="evenodd"
			>
				<path fill="#fff" d="M0 0h24v24H0V0Z" />
				<path fill="#002654" d="M0 0h8.002v24H0V0Z" />
				<path fill="#CE1126" d="M15.998 0H24v24h-8.002V0Z" />
			</g>
			<defs>
				<clipPath id="france-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgFranceFlagIcon;
