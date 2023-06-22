import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgAustriaFlagIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<g
				fillRule="evenodd"
				clipPath="url(#austria-flag-icon_svg__a)"
				clipRule="evenodd"
			>
				<path fill="#fff" d="M24 24H0V0h24v24Z" />
				<path
					fill="#C8102E"
					d="M24 24H0v-8.002h24V24Zm0-15.994H0V.005h24v8.001Z"
				/>
			</g>
			<defs>
				<clipPath id="austria-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgAustriaFlagIcon;
