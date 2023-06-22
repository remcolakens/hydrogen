import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgQiwiIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 34 24" className={className} {...props}>
			<rect
				width={33}
				height={23}
				x={0.5}
				y={0.5}
				fill="#fff"
				stroke="currentColor"
				rx={3.5}
			/>
			<path
				fill="#F28A1A"
				fillRule="evenodd"
				d="M9.714 11.567c0 3.872 3.068 7.03 6.866 7.03.466 0 .932-.042 1.468-.09.597-.054 1.28-.116 2.147-.136 1.315 0 2.739.49 4.31 1.918.145.15.364-.038.218-.226-1.57-1.992-2.994-2.368-4.418-2.706-1.753-.414-2.666-1.391-3.287-2.52-.11-.225-.183-.187-.183.114-.036.45 0 .864.073 1.278h-.219c-2.483 0-4.528-2.105-4.528-4.662 0-2.556 2.045-4.661 4.528-4.661 2.484 0 4.529 2.105 4.529 4.661 0 .15 0 .339-.037.527-.365-.076-.986-.076-1.46-.038-.183 0-.183.075-.037.113 1.46.3 2.483 1.24 2.739 2.97 0 .075.036.075.073.037a7.46 7.46 0 0 0 .95-3.609c0-3.91-3.068-7.067-6.866-7.067-3.798 0-6.866 3.195-6.866 7.067Zm11.832 2.895c.256.113.365.489.365.677.037.3-.036.45-.146.45-.11 0-.255-.112-.401-.375-.146-.263-.22-.527-.146-.677.11-.075.219-.113.328-.075Zm-1.497 1.165c.146 0 .329.075.511.226.292.263.402.564.256.79-.073.112-.256.187-.402.187a.683.683 0 0 1-.475-.188c-.292-.263-.365-.639-.182-.864.036-.075.146-.15.292-.15Z"
				clipRule="evenodd"
			/>
		</Icon>
	);
};
export default SvgQiwiIcon;
