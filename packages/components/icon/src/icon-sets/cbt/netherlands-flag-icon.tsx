import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgNetherlandsFlagIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<g clipPath="url(#netherlands-flag-icon_svg__a)">
				<path fill="#21468B" d="M0 0h24v24H0V0Z" />
				<path fill="#fff" d="M0 0h24v15.998H0V0Z" />
				<path fill="#AE1C28" d="M0 0h24v8.002H0V0Z" />
			</g>
			<defs>
				<clipPath id="netherlands-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgNetherlandsFlagIcon;
