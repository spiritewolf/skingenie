import React from "react";
import { useMediaQuery } from "react-responsive";
import { DesktopContact } from "./desktop/DesktopContact";
import { MobileContact } from "./mobile/MobileContact";

export const Contact = () => {
  const isDesktop = useMediaQuery({ minDeviceWidth: 800 });
  const isMobile = useMediaQuery({ maxDeviceWidth: 800 });
  return (
    <>{isDesktop ? <DesktopContact /> : isMobile ? <MobileContact /> : null}</>
  );
};
