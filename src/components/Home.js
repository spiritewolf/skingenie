import React from "react";
import { useMediaQuery } from "react-responsive";
import { DesktopHome } from "./desktop/DesktopHome";
import { MobileHome } from "./mobile/MobileHome";

export const Home = () => {
  const isDesktop = useMediaQuery({ minDeviceWidth: 800 });
  const isMobile = useMediaQuery({ maxDeviceWidth: 800 });
  return <>{isDesktop ? <DesktopHome /> : isMobile ? <MobileHome /> : null}</>;
};
