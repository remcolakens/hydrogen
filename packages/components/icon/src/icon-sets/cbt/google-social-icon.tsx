import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgGoogleSocialIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<g clipPath="url(#google-social-icon_svg__a)">
				<path
					fill="currentColor"
					fillRule="evenodd"
					d="M16.036 7.457a5.434 5.434 0 0 0-3.836-1.5c-2.609 0-4.824 1.76-5.614 4.13a5.99 5.99 0 0 0 0 3.83h.003c.794 2.366 3.006 4.126 5.615 4.126 1.346 0 2.503-.345 3.399-.953v-.003a4.629 4.629 0 0 0 1.999-3.038H12.2v-3.851h9.433c.117.668.172 1.352.172 2.032 0 3.041-1.087 5.613-2.978 7.354l.002.002C17.172 21.115 14.897 22 12.2 22a10.001 10.001 0 0 1-8.936-5.508 10.008 10.008 0 0 1 0-8.98A9.998 9.998 0 0 1 12.2 2a9.61 9.61 0 0 1 6.691 2.601l-2.855 2.856Z"
					clipRule="evenodd"
				/>
			</g>
			<defs>
				<clipPath id="google-social-icon_svg__a">
					<path fill="#fff" d="M2 2h20v20H2z" />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgGoogleSocialIcon;
