import clsx from "clsx";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string;
};

type ButtonProps =
  | (CommonProps &
      Omit<ComponentPropsWithoutRef<"button">, "children" | "className"> & {
        href?: never;
      })
  | (CommonProps &
      Omit<ComponentPropsWithoutRef<typeof Link>, "children" | "className"> & {
        href: string;
      });

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#f4e6bb] via-[#e2c877] to-[#b78e37] text-[#040c1d] shadow-[var(--shadow-elevated)] hover:brightness-105",
  secondary:
    "bg-[var(--color-brand-navy)] text-white shadow-[var(--shadow-elevated)] hover:bg-[#07152a]",
  outline:
    "border border-[var(--color-brand-navy)] text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-navy)] hover:text-white",
  ghost:
    "text-[var(--color-brand-sky)] hover:bg-[var(--color-brand-gray)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "lg",
    icon,
    className,
    ...rest
  } = props as ButtonProps & Record<string, unknown>;

  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-gold)]",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ("href" in props && props.href) {
    return (
      <Link
        className={classes}
        {...(rest as ComponentPropsWithoutRef<typeof Link>)}
      >
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ComponentPropsWithoutRef<"button">)}
    >
      {icon}
      {children}
    </button>
  );
}
