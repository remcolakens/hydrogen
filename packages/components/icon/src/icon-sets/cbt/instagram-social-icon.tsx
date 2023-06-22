import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgInstagramSocialIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				fill="currentColor"
				d="M8.22 3h7.56C18.66 3 21 5.34 21 8.22v7.56A5.22 5.22 0 0 1 15.78 21H8.22C5.34 21 3 18.66 3 15.78V8.22A5.22 5.22 0 0 1 8.22 3Zm-.18 1.8A3.24 3.24 0 0 0 4.8 8.04v7.92a3.238 3.238 0 0 0 3.24 3.24h7.92a3.24 3.24 0 0 0 3.24-3.24V8.04a3.238 3.238 0 0 0-3.24-3.24H8.04Zm8.685 1.35a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25ZM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Z"
			/>
		</Icon>
	);
};
export default SvgInstagramSocialIcon;
