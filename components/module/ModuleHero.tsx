import Link from "next/link";

interface ModuleHeroProps {
  category: string;
  title: string;
  description: string;
  lessons: number;
  duration: string;
  level: string;
  firstLesson: string;
}

export default function ModuleHero({
  category,
  title,
  description,
  lessons,
  duration,
  level,
  firstLesson,
}: ModuleHeroProps) {
  return (
    <section className="rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-10">

      <span className="inline-block rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
        {category}
      </span>

      <h1 className="mt-6 text-5xl font-bold">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
        {description}
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl bg-zinc-900 p-5 border border-zinc-800">
          <p className="text-zinc-500 text-sm">Lecciones</p>
          <p className="text-3xl font-bold text-yellow-400">
            {lessons}
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-5 border border-zinc-800">
          <p className="text-zinc-500 text-sm">Tiempo estimado</p>
          <p className="text-3xl font-bold text-yellow-400">
            {duration}
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-5 border border-zinc-800">
          <p className="text-zinc-500 text-sm">Nivel</p>
          <p className="text-3xl font-bold text-yellow-400">
            {level}
          </p>
        </div>

      </div>

      <div className="mt-10">

        <Link
          href={firstLesson}
          className="inline-flex rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:bg-yellow-300"
        >
          Comenzar módulo →
        </Link>

      </div>

    </section>
  );
}