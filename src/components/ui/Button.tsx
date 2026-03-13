import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

interface ButtonProps extends BaseProps {
  as?: 'button';
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

interface LinkProps extends BaseProps {
  as: 'link';
  to: string;
}

type Props = ButtonProps | LinkProps;

const variantClasses: Record<Variant, string> = {
  primary:   'bg-umad-red hover:bg-umad-red-dark text-white',
  secondary: 'bg-umad-navy hover:bg-umad-navy-dark text-white',
  ghost:     'bg-white/10 hover:bg-white/20 text-white',
  outline:   'border-2 border-umad-navy text-umad-navy hover:bg-umad-navy hover:text-white',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

function classes(variant: Variant = 'primary', size: Size = 'md', extra = '') {
  return `inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${extra}`;
}

export default function Button(props: Props) {
  const { variant = 'primary', size = 'md', children, className = '' } = props;
  const cls = classes(variant, size, className);

  if (props.as === 'link') {
    return <Link to={props.to} className={cls}>{children}</Link>;
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${cls} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
