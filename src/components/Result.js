import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DesktopResult } from './desktop/DesktopResult';
import { MobileResult } from './mobile/MobileResult';

export const Result = () => {
	const [title, setTitle] = useState('Routine Results');
	const isDesktop = useMediaQuery({ minDeviceWidth: 800 });
	const isMobile = useMediaQuery({ maxDeviceWidth: 800 });

	useEffect(() => {
		document.title = title;
	}, []);

	return (
		<>
			{ isDesktop ? <DesktopResult /> : isMobile ? <MobileResult /> : null }
		</>
	);
};
