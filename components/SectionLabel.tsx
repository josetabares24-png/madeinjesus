type SectionLabelProps = {
  index: string;
  label: string;
};

export function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="eyebrow flex items-center gap-4 text-brass">
      <span>{index}</span>
      <span className="h-px w-12 bg-brass/55" />
      <span>{label}</span>
    </div>
  );
}
