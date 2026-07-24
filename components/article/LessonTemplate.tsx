import ArticleLayout from "./ArticleLayout";
import InfoBox from "./InfoBox";
import ExampleBox from "./ExampleBox";
import AdviceBox from "./AdviceBox";
import MistakeBox from "./MistakeBox";
import FactBox from "./FactBox";
import KeyPoints from "./KeyPoints";
import ModuleSidebar from "@/components/layout/ModuleSidebar";

interface Lesson {
  title: string;
  href: string;
}

interface LessonTemplateProps {
  category: string;
  title: string;
  description: string;
  readingTime: string;
  updatedAt: string;
  breadcrumb: string;
  infoTitle: string;
  info: React.ReactNode;
  exampleTitle: string;
  example: React.ReactNode;
  advice: React.ReactNode;
  mistakes: React.ReactNode;
  fact?: React.ReactNode;
  points: string[];
  module?: string;
  lessons?: Lesson[];
}

export default function LessonTemplate({
  category,
  title,
  description,
  readingTime,
  updatedAt,
  breadcrumb,
  infoTitle,
  info,
  exampleTitle,
  example,
  advice,
  mistakes,
  fact,
  points,
  module = category,
  lessons = [],
}: LessonTemplateProps) {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-10">
        {lessons.length > 0 && (
          <ModuleSidebar
            module={module}
            lessons={lessons}
          />
        )}

        <div className="flex-1 min-w-0">
          <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-zinc-900 to-black p-8 mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="rounded-full bg-yellow-400/10 px-4 py-1 text-sm font-semibold text-yellow-400 border border-yellow-400/20">
                {category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {title}
            </h1>

            <p className="text-zinc-300 text-lg leading-8 mb-8 max-w-3xl">
              {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
                <p className="text-zinc-400 text-sm mb-1">Tiempo de lectura</p>
                <p className="font-semibold">{readingTime}</p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
                <p className="text-zinc-400 text-sm mb-1">Actualizado</p>
                <p className="font-semibold">{updatedAt}</p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
                <p className="text-zinc-400 text-sm mb-1">Lección</p>
                <p className="font-semibold">{breadcrumb}</p>
              </div>
            </div>
          </div>

          <ArticleLayout
            category={category}
            title=""
            description=""
            readingTime={readingTime}
            updatedAt={updatedAt}
            breadcrumb={breadcrumb}
          >
            <InfoBox title={infoTitle}>
              {info}
            </InfoBox>

            <ExampleBox title={exampleTitle}>
              {example}
            </ExampleBox>

            <AdviceBox>
              {advice}
            </AdviceBox>

            <MistakeBox>
              {mistakes}
            </MistakeBox>

            {fact && (
              <FactBox>
                {fact}
              </FactBox>
            )}

            <div className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-6 mt-10">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                📌 En resumen
              </h2>

              <KeyPoints
                title="Puntos clave"
                points={points}
              />
            </div>
          </ArticleLayout>
        </div>
      </div>
    </div>
  );
}