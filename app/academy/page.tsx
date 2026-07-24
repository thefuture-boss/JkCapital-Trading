import Hero from "@/components/dashboard/Hero";
import ModuleCard from "@/components/dashboard/ModuleCard";

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <Hero />

        {/* Progreso */}

        <section className="mt-14">

          <h2 className="mb-6 text-3xl font-bold">
            Tu progreso
          </h2>

          <div className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8">

            <div className="mb-4 flex justify-between">

              <span>Academia completada</span>

              <span className="font-bold text-yellow-400">
                31 lecciones
              </span>

            </div>

            <div className="h-4 overflow-hidden rounded-full bg-zinc-800">

              <div className="h-full w-full rounded-full bg-yellow-400" />

            </div>

          </div>

        </section>

        {/* Módulos */}

        <section className="mt-16">

          <h2 className="mb-8 text-3xl font-bold">
            Módulos disponibles
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">

            <ModuleCard
              icon="📘"
              title="Fundamentos"
              description="Aprende los conceptos esenciales del trading antes de comenzar a analizar el mercado."
              lessons={9}
              href="/trading/fundamentals"
              completed
            />

            <ModuleCard
              icon="📈"
              title="Price Action"
              description="Comprende cómo interpretar el movimiento del precio y la estructura del mercado."
              lessons={10}
              href="/trading/price-action"
              completed
            />

            <ModuleCard
              icon="🛡️"
              title="Gestión del Riesgo"
              description="Aprende a proteger tu capital utilizando una correcta gestión del riesgo."
              lessons={6}
              href="/trading/risk-management"
              completed
            />

            <ModuleCard
              icon="🧠"
              title="Psicología"
              description="Domina tus emociones y desarrolla la mentalidad de un trader profesional."
              lessons={6}
              href="/trading/psychology"
              completed
            />

            <ModuleCard
              icon="🛠️"
              title="Herramientas"
              description="Utiliza calculadoras profesionales para mejorar tu operativa."
              lessons={4}
              href="/tools"
              completed
            />

          </div>

        </section>

        {/* Próximos módulos */}

        <section className="mt-20">

          <h2 className="mb-8 text-3xl font-bold">
            Próximos módulos
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

              <h3 className="mb-2 text-xl font-bold">
                🌍 Análisis Fundamental
              </h3>

              <p className="text-zinc-400">
                Aprende cómo las noticias económicas, tasas de interés,
                inflación, NFP y otros eventos afectan el mercado.
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

              <h3 className="mb-2 text-xl font-bold">
                💼 Gestión del Capital
              </h3>

              <p className="text-zinc-400">
                Aprende a administrar tu cuenta como un trader profesional,
                controlar el drawdown y hacer crecer el capital a largo plazo.
              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}