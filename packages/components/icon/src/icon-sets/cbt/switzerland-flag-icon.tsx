import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgSwitzerlandFlagIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<g
				fillRule="evenodd"
				clipPath="url(#switzerland-flag-icon_svg__a)"
				clipRule="evenodd"
			>
				<path fill="red" d="M0 0h24v24H0V0Z" />
				<path fill="#fff" d="M4.5 9.75h15v4.5h-15v-4.5Z" />
				<path fill="#fff" d="M9.75 4.5h4.5v15h-4.5v-15Z" />
			</g>
			<defs>
				<clipPath id="switzerland-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgSwitzerlandFlagIcon;
