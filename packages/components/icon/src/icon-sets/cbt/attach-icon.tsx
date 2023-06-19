import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgAttachIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M10.642 14.505V7.032c0-.907.738-1.644 1.645-1.645.907 0 1.645.738 1.645 1.646l-.067 10.213a2.74 2.74 0 1 1-5.483 0l.066-10.104c0-2.12 1.72-3.84 3.838-3.838a3.837 3.837 0 0 1 3.839 3.838v7.362"
			/>
		</Icon>
	);
};
export default SvgAttachIcon;
