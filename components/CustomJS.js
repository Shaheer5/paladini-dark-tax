"use client";

import { useEffect } from "react";

export const CustomJS = () => {
  useEffect(() => {
    require("/js/aos.js");
    require("/js/lazybg.js");
    require("/js/lazysizes.min.js");
    require("/js/custom.js");
  }, []);

  return null;
};
