import React from "react";
import { useMediaQuery } from "react-responsive";
import { DesktopSurvey } from "./desktop/DesktopSurvey";
import { MobileSurvey } from "./mobile/MobileSurvey";

export const Survey = () => {
  const isDesktop = useMediaQuery({ minDeviceWidth: 800 });
  const isMobile = useMediaQuery({ maxDeviceWidth: 800 });
  return (
    <>{isDesktop ? <DesktopSurvey /> : isMobile ? <MobileSurvey /> : null}</>
  );
};
