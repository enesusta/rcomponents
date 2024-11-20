import { Button as MantineButton } from "@mantine/core/esm/components/Button/Button.mjs";

import React from "react";
import RComponentSize from "types/RComponentSize";

export interface ButtonProps {
  "data-disabled"?: boolean;
  size?: RComponentSize;
  color?: any;
  justify?: React.CSSProperties["justifyContent"];
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  fullWidth?: boolean;
  radius?: RComponentSize;
  gradient?: any;
  disabled?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
  loaderProps?: any;
  autoContrast?: boolean;
}

const Button = ({
  size,
  color,
  justify,
  leftSection,
  rightSection,
  fullWidth,
  radius,
  gradient,
  disabled,
  children,
  loading,
  loaderProps,
  autoContrast,
}: ButtonProps) => {
  return (
    <MantineButton
      {...{
        size,
        color,
        justify,
        leftSection,
        rightSection,
        fullWidth,
        radius,
        gradient,
        disabled,
        children,
        loading,
        loaderProps,
        autoContrast,
      }}
    >
      {children}
    </MantineButton>
  );
};

export default Button;
