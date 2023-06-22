import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgFinlandFlagIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<g clipPath="url(#finland-flag-icon_svg__a)">
				<path fill="#fff" d="M0 0h24v24H0V0Z" />
				<path fill="#002F6C" d="M0 8.728h24v6.544H0V8.728Z" />
				<path fill="#002F6C" d="M5.775 0h6.544v24H5.77l.004-24Z" />
			</g>
			<defs>
				<clipPath id="finland-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgFinlandFlagIcon;
