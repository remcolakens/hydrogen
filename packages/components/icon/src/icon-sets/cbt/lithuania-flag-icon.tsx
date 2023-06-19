import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgLithuaniaFlagIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<g clipPath="url(#lithuania-flag-icon_svg__a)">
				<path fill="#006A44" d="M24 0H0v23.895h24V0Z" />
				<path fill="#C1272D" d="M24 16.036H0V24h24v-7.964Z" />
				<path
					fill="#FDB913"
					fillRule="evenodd"
					d="M0 0h24v7.964H0V0Z"
					clipRule="evenodd"
				/>
			</g>
			<defs>
				<clipPath id="lithuania-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgLithuaniaFlagIcon;
