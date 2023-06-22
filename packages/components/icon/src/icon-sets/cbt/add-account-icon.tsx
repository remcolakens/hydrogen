import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgAddAccountIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M1 18c0-2.25 3-2.25 4.5-3.75.75-.75-1.5-.75-1.5-4.5C4 7.25 5 6 7 6s3 1.25 3 3.75c0 3.75-2.25 3.75-1.5 4.5C10 15.75 13 15.75 13 18M22 11h-8M18 7v8"
			/>
		</Icon>
	);
};
export default SvgAddAccountIcon;
