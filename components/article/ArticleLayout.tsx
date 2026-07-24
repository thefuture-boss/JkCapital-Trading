import Link from "next/link";

import Breadcrumb from "./Breadcrumb";
import ArticleHeader from "./ArticleHeader";
import NavigationButtons from "./NavigationButtons";
import RelatedArticles from "./RelatedArticles";

interface NavigationItem {
  title: string;
  href: string;
}

interface RelatedItem {
  title: string;
  href: string;
}

interface ArticleLayoutProps {
  category: string;
  title: string;
  description: string;
  readingTime: string;
  updatedAt: string;
  breadcrumb: string;

  module?: NavigationItem;

  previous?: NavigationItem;
  next?: NavigationItem;

  related?: RelatedItem[];

  children: React.ReactNode;
}

export default function ArticleLayout({
  category,
  title,
  description,
  readingTime,
  updatedAt,
  breadcrumb,

  module,

  previous,
  next,

  related = [],

  children,
}: ArticleLayoutProps) {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-5xl px-6 py-20">

        <Breadcrumb current={breadcrumb} />

        {/* Navegación superior */}

        <div className="mt-6 mb-8 flex flex-wrap gap-3">

          <Link
            href="/academy"
            className="rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-yellow-400 hover:text-yellow-400"
          >
            ← Academia
          </Link>

          {module && (
            <Link
              href={module.href}
              className="rounded-xl border border-yellow-500/20 bg-zinc-900 px-5 py-3 text-sm font-semibold text-yellow-400 transition hover:border-yellow-400 hover:bg-zinc-800"
            >
              ← {module.title}
            </Link>
          )}

        </div>

        <ArticleHeader
          category={category}
          title={title}
          description={description}
          readingTime={readingTime}
          updatedAt={updatedAt}
        />

        <section className="space-y-12">

          {children}

        </section>

        <NavigationButtons
          previous={previous}
          next={next}
        />

        <RelatedArticles
          articles={related}
        />

      </div>

    </main>
  );
}