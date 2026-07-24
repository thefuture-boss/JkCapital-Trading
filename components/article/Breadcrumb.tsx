interface BreadcrumbProps {
  current: string;
}

export default function Breadcrumb({ current }: BreadcrumbProps) {
  return (
    <nav className="mb-8 text-sm text-gray-500">
      Inicio
      <span className="mx-2">/</span>
      Trading
      <span className="mx-2">/</span>
      <span className="text-yellow-400">{current}</span>
    </nav>
  );
}