"use client";

import { useEffect } from "react";

export const BootstrapClient = () => {
  useEffect(() => {
    require("../js/bootstrap.bundle.js");
    require("../js/bootstrap.js");
  }, []);
  return null;
};
