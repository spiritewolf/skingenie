import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";
import "../css/Header.css";
import "../css/mobile.css";

export const Header = () => {
  const isDesktop = useMediaQuery({ minDeviceWidth: 862 });
  const isMobile = useMediaQuery({ maxDeviceWidth: 862 });
  return (
    <>{isDesktop ? <DesktopHeader /> : isMobile ? <MobileHeader /> : null}</>
  );
};
