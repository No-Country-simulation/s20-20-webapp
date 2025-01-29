import Link from "next/link";
import React, { ReactNode } from "react";
import "../style/btns.css";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  to?: string;
  disabled?: boolean;
  extraClass?: string;
  isSubmit?: boolean;
  type?: "primary" | "secundary" | "gradient";
}

export default function Button({
  children,
  onClick,
  to,
  disabled,
  extraClass,
  isSubmit = false,
  type = "primary",
}: ButtonProps) {
  const styles = {
    primary: `primary ${extraClass}`,
    secundary: `secundary ${extraClass}`,
    gradient: `gradient ${extraClass}`,
  };

  if (to) {
    return (
      <Link href={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (isSubmit) {
    return (
      <button
        type="submit"
        onClick={onClick}
        disabled={disabled}
        className={styles[type]}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={styles[type]}
    >
      {children}
    </button>
  );
}
