import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgLuxembourgFlagIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<g clipPath="url(#luxembourg-flag-icon_svg__a)">
				<path fill="#00A1DE" d="M0 12h24v12H0V12Z" />
				<path fill="#ED2939" d="M0 0h24v12H0V0Z" />
				<path fill="#fff" d="M0 8.002h24v7.996H0V8.002Z" />
			</g>
			<defs>
				<clipPath id="luxembourg-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgLuxembourgFlagIcon;
