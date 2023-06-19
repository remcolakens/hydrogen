import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgPolandFlagIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<g
				fillRule="evenodd"
				clipPath="url(#poland-flag-icon_svg__a)"
				clipRule="evenodd"
			>
				<path fill="#fff" d="M24 24H0V0h24v24Z" />
				<path fill="#DC143C" d="M24 24H0V12h24v12Z" />
			</g>
			<defs>
				<clipPath id="poland-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgPolandFlagIcon;
