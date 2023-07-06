import {
	cn,
	defaultGridClasses,
} from '@code-internet-applications/tailwind-utils';
import { FC, useState } from 'react';
import { Button } from '../../button';
import { C4Icon } from '../../icon';
import { containerVariants } from './container-content';
import { IContainerProps } from './types';

const ContainerDebug: FC<IContainerProps> = ({ size, className }) => {
	const [visible, setVisible] = useState<boolean>(false);

	if (process.env.NODE_ENV === 'development') {
		return (
			<>
				<div className="fixed bottom-5 left-4 z-fixed">
					<Button variant="secondary" icon onClick={() => setVisible(!visible)}>
						<C4Icon />
					</Button>
				</div>

				{visible ? (
					<div className="pointer-events-none fixed top-0 z-fixed h-full w-full">
						<div
							className={cn(
								containerVariants({ size }),
								defaultGridClasses(),
								'h-full w-full opacity-20',
								className,
							)}
						>
							<div className="col-span-1 bg-funnel-500"></div>
							<div className="col-span-1 bg-funnel-500"></div>
							<div className="col-span-1 hidden bg-funnel-500 md:block"></div>
							<div className="col-span-1 hidden bg-funnel-500 md:block"></div>
							<div className="col-span-1 hidden bg-funnel-500 md:block"></div>
							<div className="col-span-1 hidden bg-funnel-500 md:block"></div>
							<div className="col-span-1 hidden bg-funnel-500 md:block"></div>
							<div className="col-span-1 hidden bg-funnel-500 md:block"></div>
							<div className="col-span-1 hidden bg-funnel-500 md:block"></div>
							<div className="col-span-1 hidden bg-funnel-500 md:block"></div>
							<div className="col-span-1 hidden bg-funnel-500 md:block"></div>
							<div className="col-span-1 hidden bg-funnel-500 md:block"></div>
						</div>
					</div>
				) : null}
			</>
		);
	}

	return null;
};

ContainerDebug.displayName = 'ContainerDebug';

export { ContainerDebug };
