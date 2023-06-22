import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgMediumSocialIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				fill="currentColor"
				d="M13.281 11.856c0 3.143-2.525 5.69-5.64 5.69-3.115 0-5.641-2.548-5.641-5.69 0-3.141 2.525-5.69 5.64-5.69 3.116 0 5.641 2.548 5.641 5.69ZM19.469 11.856c0 2.958-1.263 5.357-2.82 5.357-1.558 0-2.82-2.399-2.82-5.357 0-2.957 1.262-5.356 2.82-5.356 1.557 0 2.82 2.398 2.82 5.356M22 11.856c0 2.65-.444 4.799-.992 4.799s-.992-2.149-.992-4.799c0-2.65.444-4.798.992-4.798.547 0 .992 2.148.992 4.798Z"
			/>
		</Icon>
	);
};
export default SvgMediumSocialIcon;
