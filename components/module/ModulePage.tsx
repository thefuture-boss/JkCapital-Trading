import Link from "next/link";
import { TradingModule } from "@/components/data/tradingModules";

interface ModulePageProps {
  module: TradingModule;
}

export default function ModulePage({
  module,
}: ModulePageProps) {
  const totalMinutes = module.lessons.reduce((total, lesson) => {
    const minutes = parseInt(lesson.readingTime);
    return total + (isNaN(minutes) ? 0 : minutes);
  }, 0);

  return (
    <main className="min-h-screen bg-black text-white">

      <section className="mx-auto max-w-7xl px-6 py-12">

        {/* HERO */}

        <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-zinc-900 to-black p-10">

          <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
            Módulo
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            {module.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            {module.description}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-zinc-900 p-6 border border-zinc-800">
              <p className="text-zinc-500">
                Lecciones
              </p>

              <h3 className="mt-2 text-3xl font-bold text-yellow-400">
                {module.lessons.length}
              </h3>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-6 border border-zinc-800">
              <p className="text-zinc-500">
                Tiempo estimado
              </p>

              <h3 className="mt-2 text-3xl font-bold text-yellow-400">
                {totalMinutes} min
              </h3>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-6 border border-zinc-800">
              <p className="text-zinc-500">
                Nivel
              </p>

              <h3 className="mt-2 text-3xl font-bold text-yellow-400">
                {module.lessons[0]?.difficulty}
              </h3>
            </div>

          </div>

        </div>

        {/* LECCIONES */}

        <section className="mt-16">

          <h2 className="mb-8 text-3xl font-bold">
            Contenido del módulo
          </h2>

          <div className="space-y-4">

            {module.lessons.map((lesson, index) => (

              <Link
                key={lesson.slug}
                href={`/trading/${module.slug}/${lesson.slug}`}
                className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-yellow-400 hover:bg-zinc-800"
              >

                <div>

                  <p className="text-sm text-zinc-500">
                    Lección {index + 1}
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    {lesson.title}
                  </h3>

                  <p className="mt-2 text-zinc-400">
                    {lesson.description}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-yellow-400 font-semibold">
                    {lesson.readingTime}
                  </p>

                  <p className="mt-2 text-zinc-500">
                    {lesson.difficulty}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </section>

      </section>

    </main>
  );
}