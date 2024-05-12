"use client";
import React from "react";
import { Size } from "../types/size.type";

import classNames from "classnames";
import { LoadingProps } from "./loadoing.types";

const sizeClasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "loading-md",
  large: "loading-lg",
};

export const Loading: React.FC<LoadingProps> = ({
  type = "spinner",
  variant,
  size = "normal",
  className,
}) => {

  const classes = classNames(
    "loading",
    className,
    { [`${sizeClasses[size]}`]: size },
    { [`loading-${variant}`]: variant },
    { [`loading-${type}`]: type}
);
  return <span className={classes}></span>;
};