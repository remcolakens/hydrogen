import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgEstoniaFlagIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<g clipPath="url(#estonia-flag-icon_svg__a)">
				<path fill="#010000" d="M24.017 0H0v23.919h24.017V0Z" />
				<path fill="#fff" d="M24.017 16.052H0v7.971h24.017v-7.971Z" />
				<path
					fill="#1791FF"
					fillRule="evenodd"
					d="M0 0h24.017v7.972H0V0Z"
					clipRule="evenodd"
				/>
			</g>
			<defs>
				<clipPath id="estonia-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgEstoniaFlagIcon;
