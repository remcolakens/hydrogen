import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgLeatherIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				d="M9.577 3h4.846c.606 1 2.423 3 4.846 3l.606 1.8c-1.01.4-3.029 1.8-3.029 4.2 0 2.4 2.02 3.8 3.029 4.2l-.606 1.8c-2.558 0-4.375 1.2-4.846 3H9.577c-.74-1.8-2.558-3-4.846-3l-.606-1.8c1.212-.6 3.029-1.32 3.029-4.2S5.337 8.4 4.125 7.8L4.731 6c2.423 0 4.24-2 4.846-3Z"
			/>
		</Icon>
	);
};
export default SvgLeatherIcon;
