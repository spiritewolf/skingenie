import React from "react";
import { useMediaQuery } from "react-responsive";
import { DesktopResult } from "./desktop/DesktopResult";
import { MobileResult } from "./mobile/MobileResult";

export const Result = () => {
  const isDesktop = useMediaQuery({ minDeviceWidth: 800 });
  const isMobile = useMediaQuery({ maxDeviceWidth: 800 });
  return (
    <>{isDesktop ? <DesktopResult /> : isMobile ? <MobileResult /> : null}</>
  );
};
