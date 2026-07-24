import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({
  items,
}: BreadcrumbProps) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-zinc-400">

      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2"
        >
          {item.href ? (
            <Link
              href={item.href}
              className="transition hover:text-yellow-400"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-yellow-400">
              {item.label}
            </span>
          )}

          {index < items.length - 1 && (
            <span className="text-zinc-600">
              &gt;
            </span>
          )}
        </div>
      ))}

    </nav>
  );
}