type SectionLabelProps = {
  index: string;
  label: string;
};

export function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-editorial text-ember">
      <span>{index}</span>
      <span className="h-px w-10 bg-ember/50" />
      <span>{label}</span>
    </div>
  );
}
