export default function classnames(...classnames: string[]): string {
  return classnames.filter(Boolean).join(" ");
}
