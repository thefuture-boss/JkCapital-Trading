import Link from "next/link";

interface ModuleCardProps {
  icon: string;
  title: string;
  description: string;
  lessons: number;
  href: string;
  completed?: boolean;
}

export default function ModuleCard({
  icon,
  title,
  description,
  lessons,
  href,
  completed = false,
}: ModuleCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10">

      {/* Encabezado */}

      <div className="bg-gradient-to-r from-yellow-500/10 to-transparent p-8">

        <div className="mb-6 flex items-center justify-between">

          <div className="text-5xl">
            {icon}
          </div>

          {completed ? (
            <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-bold text-green-400">
              ✔ COMPLETADO
            </span>
          ) : (
            <span className="rounded-full bg-yellow-500/15 px-3 py-1 text-xs font-bold text-yellow-400">
              EN DESARROLLO
            </span>
          )}

        </div>

        <h2 className="mb-3 text-2xl font-bold">
          {title}
        </h2>

        <p className="leading-7 text-zinc-400">
          {description}
        </p>

      </div>

      {/* Información */}

      <div className="border-t border-zinc-800 p-8">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <p className="text-3xl font-bold text-yellow-400">
              {lessons}
            </p>

            <p className="text-sm text-zinc-500">
              Lecciones
            </p>

          </div>

          <div className="h-12 w-px bg-zinc-700" />

          <div>

            <p className="text-lg font-semibold text-green-400">
              Gratis
            </p>

            <p className="text-sm text-zinc-500">
              Acceso libre
            </p>

          </div>

        </div>

        {/* Barra de progreso */}

        <div className="mb-8">

          <div className="mb-2 flex justify-between text-sm">

            <span className="text-zinc-400">
              Estado
            </span>

            <span
              className={
                completed
                  ? "font-semibold text-green-400"
                  : "font-semibold text-yellow-400"
              }
            >
              {completed ? "100%" : "En desarrollo"}
            </span>

          </div>

          <div className="h-2 rounded-full bg-zinc-800">

            <div
              className={`h-2 rounded-full ${
                completed
                  ? "w-full bg-green-400"
                  : "w-1/2 bg-yellow-400"
              }`}
            />

          </div>

        </div>

        <Link
          href={href}
          className="block w-full rounded-xl bg-yellow-400 py-4 text-center font-bold text-black transition hover:bg-yellow-300"
        >
          {completed ? "Continuar módulo" : "Explorar módulo"}
        </Link>

      </div>

    </div>
  );
}