import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgVimeoSocialIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				fill="currentColor"
				d="M22.99 7.398c-.098 2.136-1.593 5.062-4.486 8.777C15.514 20.059 12.982 22 10.911 22c-1.283 0-2.368-1.182-3.255-3.546l-1.775-6.5C5.221 9.59 4.515 8.41 3.76 8.41c-.163 0-.739.347-1.725 1.035L1 8.112a287.914 287.914 0 0 0 3.21-2.857c1.449-1.25 2.536-1.905 3.262-1.973 1.71-.168 2.764 1 3.16 3.505.426 2.702.723 4.38.888 5.033.495 2.24 1.04 3.358 1.631 3.357.46 0 1.15-.728 2.074-2.179.922-1.452 1.416-2.557 1.48-3.315.133-1.254-.361-1.881-1.48-1.881a4.16 4.16 0 0 0-1.63.358c1.085-3.532 3.15-5.251 6.199-5.156 2.26.068 3.326 1.533 3.195 4.393v.001Z"
			/>
		</Icon>
	);
};
export default SvgVimeoSocialIcon;