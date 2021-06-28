import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DesktopSurvey } from './desktop/DesktopSurvey';
import { MobileSurvey } from './mobile/MobileSurvey';

export const Survey = () => {
	const [title, setTitle] = useState('Questionnaire');
	const isDesktop = useMediaQuery({ minDeviceWidth: 800 });
	const isMobile = useMediaQuery({ maxDeviceWidth: 800 });

	useEffect(() => {
		document.title = title;
	}, []);

	return (
		<>
			{ isDesktop ? <DesktopSurvey /> : isMobile ? <MobileSurvey /> : null }
		</>
	);
};
