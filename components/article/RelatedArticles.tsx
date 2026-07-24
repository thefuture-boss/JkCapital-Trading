import Link from "next/link";

interface RelatedArticle {
  title: string;
  href: string;
}

interface RelatedArticlesProps {
  articles?: RelatedArticle[];
}

export default function RelatedArticles({
  articles = [],
}: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="mt-20">

      <h2 className="text-3xl font-bold text-yellow-400 mb-8">
        También te puede interesar
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="rounded-2xl border border-yellow-500/20 bg-zinc-900 p-6 hover:border-yellow-400 transition"
          >
            <h3 className="font-semibold text-lg">
              {article.title}
            </h3>
          </Link>
        ))}

      </div>

    </section>
  );
}