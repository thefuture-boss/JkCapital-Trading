import Link from "next/link";

interface Lesson {
  title: string;
  href: string;
  time: string;
}

interface ModuleLessonListProps {
  lessons: Lesson[];
}

export default function ModuleLessonList({
  lessons,
}: ModuleLessonListProps) {
  return (
    <section className="mt-20">

      <h2 className="mb-8 text-4xl font-bold">
        Lecciones del módulo
      </h2>

      <div className="space-y-4">

        {lessons.map((lesson, index) => (
          <Link
            key={lesson.href}
            href={lesson.href}
            className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-zinc-800"
          >
            <div>
              <p className="text-sm text-zinc-500">
                Lección {index + 1}
              </p>

              <h3 className="mt-1 text-xl font-semibold transition group-hover:text-yellow-400">
                {lesson.title}
              </h3>
            </div>

            <div className="text-right">

              <p className="text-sm text-zinc-500">
                {lesson.time}
              </p>

              <p className="mt-2 font-bold text-yellow-400 transition group-hover:translate-x-1">
                Estudiar →
              </p>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}