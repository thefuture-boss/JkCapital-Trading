"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Lesson = {
  title: string;
  href: string;
};

type Props = {
  module: string;
  lessons: Lesson[];
};

export default function ModuleSidebar({
  module,
  lessons,
}: Props) {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-72 shrink-0">
      <div className="sticky top-24 rounded-2xl border border-yellow-500/20 bg-zinc-900 p-6">

        <h2 className="text-yellow-400 font-bold text-xl mb-6">
          {module}
        </h2>

        <nav className="space-y-2">

          {lessons.map((lesson) => {

            const active = pathname === lesson.href;

            return (
              <Link
                key={lesson.href}
                href={lesson.href}
                className={`block rounded-xl px-4 py-3 transition-all duration-200

                ${
                  active
                    ? "bg-yellow-400 text-black font-bold"
                    : "text-zinc-300 hover:bg-zinc-800"
                }

                `}
              >
                {lesson.title}
              </Link>
            );
          })}
        </nav>

      </div>
    </aside>
  );
}