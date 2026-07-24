interface ArticleHeaderProps {
  category: string;
  title: string;
  description: string;
  readingTime: string;
  updatedAt: string;
}

export default function ArticleHeader({
  category,
  title,
  description,
  readingTime,
  updatedAt,
}: ArticleHeaderProps) {
  return (
    <header className="mb-16">

      <span className="inline-block rounded-full bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 text-sm font-semibold text-yellow-400">
        {category}
      </span>

      <h1 className="mt-6 text-5xl font-bold leading-tight">
        {title}
      </h1>

      <p className="mt-6 max-w-4xl text-xl leading-9 text-gray-400">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">

        <span>📖 {readingTime}</span>

        <span>🗓️ Actualizado: {updatedAt}</span>

      </div>

    </header>
  );
}