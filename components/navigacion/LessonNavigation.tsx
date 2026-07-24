import Link from "next/link";

interface LessonNavigationProps {
  module: {
    title: string;
    href: string;
  };

  previous?: {
    title: string;
    href: string;
  };

  next?: {
    title: string;
    href: string;
  };
}

export default function LessonNavigation({
  module,
  previous,
  next,
}: LessonNavigationProps) {
  return (
    <section className="mt-20">

      {/* Volver al módulo */}

      <div className="mb-8">
        <Link
          href={module.href}
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-zinc-300 transition hover:border-yellow-400 hover:text-yellow-400"
        >
          ← Volver a {module.title}
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Anterior */}

        {previous ? (
          <Link
            href={previous.href}
            className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:border-yellow-400 hover:bg-zinc-800"
          >
            <p className="mb-3 text-sm text-zinc-500">
              ← Lección anterior
            </p>

            <h3 className="text-xl font-semibold transition group-hover:text-yellow-400">
              {previous.title}
            </h3>
          </Link>
        ) : (
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 opacity-50">

            <p className="mb-3 text-sm text-zinc-500">
              Inicio del módulo
            </p>

            <h3 className="text-xl font-semibold">
              No hay lección anterior
            </h3>

          </div>
        )}

        {/* Siguiente */}

        {next ? (
          <Link
            href={next.href}
            className="group rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-zinc-900 to-black p-6 transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10"
          >
            <p className="mb-3 text-right text-sm text-yellow-400">
              Siguiente lección →
            </p>

            <h3 className="text-right text-xl font-semibold transition group-hover:text-yellow-400">
              {next.title}
            </h3>
          </Link>
        ) : (
          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-6">

            <p className="mb-3 text-right text-sm text-green-400">
              🎉 Módulo completado
            </p>

            <h3 className="text-right text-xl font-semibold">
              ¡Has terminado este módulo!
            </h3>

          </div>
        )}

      </div>

    </section>
  );
}