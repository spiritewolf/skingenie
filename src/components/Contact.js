import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DesktopContact } from './desktop/DesktopContact';
import { MobileContact } from './mobile/MobileContact';

export const Contact = () => {
	const [title, setTitle] = useState('Contact');
	const isDesktop = useMediaQuery({ minDeviceWidth: 800 });
	const isMobile = useMediaQuery({ maxDeviceWidth: 800 });

	useEffect(() => {
		document.title = title;
	}, []);

	return (
		<>
			{ isDesktop ? <DesktopContact /> : isMobile ? <MobileContact /> : null }
		</>
	);
};
