import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-ink-950 shadow-glow hover:bg-accent-light hover:shadow-[0_0_56px_-6px_rgb(255_106_0/0.75)]",
  secondary: "border border-ink-600 bg-ink-800/60 text-ink-100 hover:border-accent/60 hover:bg-ink-700/80",
  ghost: "text-ink-100 hover:text-accent",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(
    "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight",
    "transition-all duration-300 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonLinkProps = React.ComponentProps<"a"> & { variant?: Variant; size?: Size };

/** Link estilizado como botão — os CTAs da landing são âncoras ou links externos. */
export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <a className={buttonStyles({ variant, size, className })} {...props} />;
}
