interface Props {
  label: string;
  colorClass?: string;
}

export default function Badge({ label, colorClass = 'bg-umad-navy' }: Props) {
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold text-white ${colorClass}`}>
      {label}
    </span>
  );
}
