import Link from "next/link";
import { tradingModules } from "../data/tradingModules";

interface TradingSidebarProps {
  currentModule: string;
  currentLesson?: string;
}

export default function TradingSidebar({
  currentModule,
  currentLesson,
}: TradingSidebarProps) {
  const module = tradingModules.find(
    (m) => m.slug === currentModule
  );

  if (!module) return null;

  const currentIndex = module.lessons.findIndex(
    (lesson) => lesson.slug === currentLesson
  );

  const progress =
    currentIndex >= 0
      ? ((currentIndex + 1) / module.lessons.length) * 100
      : 0;

  return (
    <aside className="sticky top-24 w-80">

      <div className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-6 shadow-xl">

        <h2 className="text-2xl font-bold text-yellow-400">
          {module.title}
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          {Math.max(currentIndex + 1, 0)} de {module.lessons.length} lecciones
        </p>

        {/* Barra */}

        <div className="mt-5">

          <div className="h-2 overflow-hidden rounded-full bg-zinc-800">

            <div
              className="h-full rounded-full bg-yellow-400 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* Lista */}

        <nav className="mt-8 space-y-2">

          {module.lessons.map((lesson, index) => {

            const active =
              lesson.slug === currentLesson;

            const completed =
              currentIndex > index;

            return (
              <Link
                key={lesson.slug}
                href={`/trading/${module.slug}/${lesson.slug}`}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 transition

                ${
                  active
                    ? "bg-yellow-400 text-black font-bold"
                    : "hover:bg-zinc-800 text-zinc-300"
                }`}
              >

                <span className="w-6 text-center">

                  {completed
                    ? "✓"
                    : active
                    ? "►"
                    : "○"}

                </span>

                <span className="flex-1">
                  {lesson.title}
                </span>

              </Link>
            );

          })}

        </nav>

      </div>

    </aside>
  );
}