import Link from "next/link";

interface NavigationItem {
  title: string;
  href: string;
}

interface NavigationButtonsProps {
  previous?: NavigationItem;
  next?: NavigationItem;
}

export default function NavigationButtons({
  previous,
  next,
}: NavigationButtonsProps) {
  return (
    <section className="mt-20 border-t border-yellow-500/20 pt-10">

      <div className="flex justify-between gap-6">

        {previous ? (
          <Link
            href={previous.href}
            className="rounded-xl border border-yellow-500/20 bg-zinc-900 px-6 py-4 hover:border-yellow-400 transition"
          >
            ← {previous.title}
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={next.href}
            className="rounded-xl border border-yellow-500/20 bg-zinc-900 px-6 py-4 hover:border-yellow-400 transition"
          >
            {next.title} →
          </Link>
        ) : (
          <div />
        )}

      </div>

    </section>
  );
}