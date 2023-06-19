import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgUkraineFlagIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<g
				fillRule="evenodd"
				clipPath="url(#ukraine-flag-icon_svg__a)"
				clipRule="evenodd"
			>
				<path fill="gold" d="M0 0h24v24H0V0Z" />
				<path fill="#0057B8" d="M0 0h24v12H0V0Z" />
			</g>
			<defs>
				<clipPath id="ukraine-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgUkraineFlagIcon;
