import Link from "next/link";
import ModuleHero from "@/components/module/ModuleHero";

const lessons = [
  {
    title: "¿Qué es el Trading?",
    href: "/trading/fundamentals/what-is-trading",
    time: "8 min",
  },
  {
    title: "¿Qué es un Broker?",
    href: "/trading/fundamentals/what-is-broker",
    time: "7 min",
  },
  {
    title: "Bid y Ask",
    href: "/trading/fundamentals/bid-ask",
    time: "6 min",
  },
  {
    title: "Spread",
    href: "/trading/fundamentals/spread",
    time: "5 min",
  },
  {
    title: "Pip",
    href: "/trading/fundamentals/pip",
    time: "6 min",
  },
  {
    title: "Lote",
    href: "/trading/fundamentals/lot",
    time: "6 min",
  },
  {
    title: "Apalancamiento",
    href: "/trading/fundamentals/leverage",
    time: "8 min",
  },
  {
    title: "Tipos de Órdenes",
    href: "/trading/fundamentals/order-types",
    time: "9 min",
  },
  {
    title: "Horarios del Mercado",
    href: "/trading/fundamentals/market-hours",
    time: "7 min",
  },
];

export default function FundamentalsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <ModuleHero
          category="MÓDULO 1"
          title="Fundamentos del Trading"
          description="Aprende todos los conceptos esenciales antes de comenzar a operar en los mercados financieros."
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
                🏦 Brokers
              </h3>

              <p className="leading-7 text-zinc-400">
                Comprenderás qué es un broker, cómo funciona y cuál es su papel
                dentro del mercado financiero.
              </p>

            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-3 text-xl font-bold text-yellow-400">
                💰 Conceptos Básicos
              </h3>

              <p className="leading-7 text-zinc-400">
                Aprenderás Bid, Ask, Spread, Pip y Lote para entender cómo se
                mueve el precio.
              </p>

            </div>
                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-3 text-xl font-bold text-yellow-400">
                ⚡ Gestión de Operaciones
              </h3>

              <p className="leading-7 text-zinc-400">
                Entenderás el apalancamiento y los diferentes tipos de órdenes
                antes de abrir una operación.
              </p>

            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-3 text-xl font-bold text-yellow-400">
                🌎 Horarios del Mercado
              </h3>

              <p className="leading-7 text-zinc-400">
                Aprenderás cuáles son las sesiones más importantes del mercado
                Forex y cuándo existe mayor volatilidad.
              </p>

            </div>

          </div>

        </section>

        <section className="mt-20">

          <h2 className="mb-8 text-4xl font-bold">
            Lecciones del módulo
          </h2>

          <div className="space-y-4">

            {lessons.map((lesson, index) => (
              <Link
                key={lesson.href}
                href={lesson.href}
                className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-yellow-400 hover:bg-zinc-800"
              >

                <div>

                  <p className="text-sm text-zinc-500">
                    Lección {index + 1}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold">
                    {lesson.title}
                  </h3>

                </div>

                <div className="text-right">

                  <p className="text-sm text-zinc-500">
                    {lesson.time}
                  </p>

                  <p className="mt-2 font-bold text-yellow-400">
                    Estudiar →
                  </p>

                </div>

              </Link>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}