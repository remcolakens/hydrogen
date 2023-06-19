import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgSwedenFlagIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<g clipPath="url(#sweden-flag-icon_svg__a)">
				<path fill="#005293" d="M0 0h24v24H0V0Z" />
				<path
					fill="#FECB00"
					d="M6.281 0v9.6H0v4.8h6.281V24h4.8v-9.6H24V9.6H11.081V0h-4.8Z"
				/>
			</g>
			<defs>
				<clipPath id="sweden-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgSwedenFlagIcon;
