import Link from "next/link";

const tools = [
  {
    title: "Calculadora de Riesgo",
    description:
      "Calcula cuánto dinero arriesgar por operación según tu cuenta.",
    href: "/tools/risk",
    icon: "🛡️",
  },
  {
    title: "Calculadora de Lotaje",
    description:
      "Obtén automáticamente el tamaño correcto de lote.",
    href: "/tools/lot-size",
    icon: "📊",
  },
  {
    title: "Calculadora Risk Reward",
    description:
      "Calcula rápidamente tu relación riesgo beneficio.",
    href: "/tools/risk-reward",
    icon: "⚖️",
  },
  {
    title: "Horarios del Mercado",
    description:
      "Consulta las sesiones de Tokio, Londres, Nueva York y Sídney.",
    href: "/trading/fundamentals/market-hours",
    icon: "🕒",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-12">

        <h1 className="text-5xl font-bold text-yellow-400">
          Herramientas para Traders
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-zinc-400">
          Utiliza estas herramientas para mejorar tu gestión del riesgo,
          optimizar tus operaciones y tomar decisiones con mayor precisión.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:border-yellow-400 hover:bg-zinc-800 hover:shadow-lg hover:shadow-yellow-500/10"
            >
              <div className="text-5xl">
                {tool.icon}
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                {tool.title}
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                {tool.description}
              </p>

              <div className="mt-8 font-semibold text-yellow-400">
                Abrir herramienta →
              </div>

            </Link>
          ))}

        </div>

      </section>
    </main>
  );
}