import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgGermanyFlagIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<g clipPath="url(#germany-flag-icon_svg__a)">
				<path fill="#FFCE00" d="M0 15.998h24V24H0v-8.002Z" />
				<path fill="#010000" d="M0 0h24v8.002H0V0Z" />
				<path fill="#D00" d="M0 8.002h24v7.996H0V8.002Z" />
			</g>
			<defs>
				<clipPath id="germany-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgGermanyFlagIcon;
