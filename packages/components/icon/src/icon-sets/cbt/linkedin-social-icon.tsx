import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgLinkedinSocialIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				fill="currentColor"
				d="M7.094 21V8.855H3.23V21h3.865ZM5.162 7.196c1.348 0 2.187-.932 2.187-2.098C7.325 3.906 6.51 3 5.188 3S3 3.908 3 5.098c0 1.166.839 2.098 2.136 2.098h.026ZM13.064 21v-6.783c0-.363.026-.726.129-.985.279-.724.915-1.476 1.984-1.476 1.399 0 1.957 1.113 1.957 2.747V21H21v-6.966c0-3.732-1.906-5.467-4.45-5.467-2.051 0-2.97 1.177-3.486 2.006v.042h-.025l.025-.042V8.855H9.2C9.248 9.995 9.2 21 9.2 21h3.864Z"
			/>
		</Icon>
	);
};
export default SvgLinkedinSocialIcon;
