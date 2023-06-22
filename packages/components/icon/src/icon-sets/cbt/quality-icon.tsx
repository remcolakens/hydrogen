import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgQualityIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 80 80" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M45.19 15.223a1 1 0 0 0 .59.192l6.424-.012 1.973 6.113a1 1 0 0 0 .365.503l5.204 3.765-1.997 6.105a1 1 0 0 0 0 .622l1.997 6.105-5.204 3.766c-.172.124-.3.3-.365.502l-1.973 6.113-6.423-.012a1 1 0 0 0-.592.192L40 52.962l-5.19-3.785a1 1 0 0 0-.59-.192l-6.424.012-1.973-6.113a1 1 0 0 0-.365-.502l-5.204-3.766 1.996-6.105a1 1 0 0 0 0-.622l-1.996-6.105 5.204-3.765a1 1 0 0 0 .365-.503l1.973-6.113 6.423.012a1 1 0 0 0 .592-.192L40 11.438l5.19 3.785Z"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="m34.5 33.1 3.094 3.5 6.806-7.7"
			/>
			<circle
				cx={40.001}
				cy={32.2}
				r={11.1}
				stroke="currentColor"
				strokeWidth={2}
			/>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M31.2 49.8v20l8.8-5.333 8.8 5.333v-20"
			/>
		</Icon>
	);
};
export default SvgQualityIcon;
