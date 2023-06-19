import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgControlsVerticalIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M16 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM18 4v3M18 11v9M4 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM6 4v3M6 11v9M10 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM12 4v9M12 17v3"
			/>
		</Icon>
	);
};
export default SvgControlsVerticalIcon;
