import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgUkFlagIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<g clipPath="url(#uk-flag-icon_svg__a)">
				<path fill="#012169" d="M0 0h24v24H0V0Z" />
				<path
					fill="#fff"
					d="M24 0v3l-8.906 9L24 20.766V24h-3.14l-8.954-8.813L3.187 24H0v-3.188l8.719-8.765L0 3.469V0h2.906l9 8.813L20.625 0H24Z"
				/>
				<path
					fill="#C8102E"
					d="m8.625 15.188.516 1.593L1.969 24H0v-.14l8.625-8.672Zm5.813-.563 2.53.375L24 21.89V24l-9.563-9.375ZM24 0l-9 9.188-.188-2.063L21.845 0H24ZM0 .047l9.047 8.86L6.28 8.53 0 2.297V.047Z"
				/>
				<path fill="#fff" d="M8.25 0v24h7.5V0h-7.5ZM0 8.25v7.5h24v-7.5H0Z" />
				<path fill="#C8102E" d="M0 9.75v4.5h24v-4.5H0ZM9.75 0v24h4.5V0h-4.5Z" />
			</g>
			<defs>
				<clipPath id="uk-flag-icon_svg__a">
					<rect width={24} height={24} fill="#fff" rx={12} />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgUkFlagIcon;
