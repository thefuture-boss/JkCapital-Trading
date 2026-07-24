import ModuleHero from "@/components/module/ModuleHero";
import ModuleLessonList from "@/components/module/ModuleLessonList";

const lessons = [
  {
    title: "¿Qué es el Trading?",
    href: "/trading/fundamentals/what-is-trading",
    time: "8 min",
  },
  {
    title: "¿Cómo funcionan los mercados?",
    href: "/trading/fundamentals/how-markets-work",
    time: "9 min",
  },
  {
    title: "Participantes del mercado",
    href: "/trading/fundamentals/market-participants",
    time: "8 min",
  },
  {
    title: "Tipos de mercados",
    href: "/trading/fundamentals/market-types",
    time: "9 min",
  },
  {
    title: "Tipos de activos",
    href: "/trading/fundamentals/assets",
    time: "8 min",
  },
  {
    title: "Oferta y demanda",
    href: "/trading/fundamentals/supply-demand",
    time: "10 min",
  },
  {
    title: "Volatilidad",
    href: "/trading/fundamentals/volatility",
    time: "8 min",
  },
  {
    title: "Liquidez",
    href: "/trading/fundamentals/liquidity",
    time: "8 min",
  },
  {
    title: "Horarios del mercado",
    href: "/trading/fundamentals/market-hours",
    time: "10 min",
  },
];

export default function FundamentalsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <ModuleHero
          category="MÓDULO 1"
          title="Fundamentos del Trading"
          description="Construye una base sólida comprendiendo cómo funcionan los mercados financieros, quiénes participan en ellos y los conceptos esenciales que todo trader debe dominar antes de comenzar."
          lessons={9}
          duration="1 hora"
          level="Principiante"
          firstLesson="/trading/fundamentals/what-is-trading"
        />

        <section className="mt-16">
          <h2 className="mb-8 text-4xl font-bold">
            ¿Qué aprenderás?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-3 text-xl font-bold text-yellow-400">
                📊 Mercados Financieros
              </h3>

              <p className="text-zinc-400 leading-7">
                Comprenderás cómo funcionan los mercados y cuál es su papel dentro de la economía.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-3 text-xl font-bold text-yellow-400">
                👥 Participantes
              </h3>

              <p className="text-zinc-400 leading-7">
                Descubrirás quiénes intervienen diariamente en los mercados financieros.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-3 text-xl font-bold text-yellow-400">
                💹 Conceptos Básicos
              </h3>

              <p className="text-zinc-400 leading-7">
                Aprenderás términos esenciales como liquidez, volatilidad y oferta y demanda.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-3 text-xl font-bold text-yellow-400">
                🌍 Contexto del Mercado
              </h3>

              <p className="text-zinc-400 leading-7">
                Entenderás cuándo operan los principales mercados y por qué el horario es importante.
              </p>
            </div>

          </div>
        </section>

        <ModuleLessonList lessons={lessons} />

      </div>
    </main>
  );
}