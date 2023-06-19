import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgTumblrSocialIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<g clipPath="url(#tumblr-social-icon_svg__a)">
				<path
					fill="currentColor"
					d="M14.166 22c-3 0-5.25-1.542-5.25-5.25v-5.917h-2.75V7.625c3-.792 4.25-3.375 4.417-5.625h3.125v5.083h3.625v3.75h-3.625V16c0 1.542.792 2.083 2.042 2.083h1.75V22h-3.334Z"
				/>
			</g>
			<defs>
				<clipPath id="tumblr-social-icon_svg__a">
					<path fill="#fff" d="M6.167 2H17.5v20H6.166z" />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgTumblrSocialIcon;
