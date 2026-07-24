import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800 bg-zinc-950">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Marca */}

          <div>

            <h2 className="text-2xl font-bold text-yellow-400">
              JK Capital Trading
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">
              Plataforma educativa diseñada para aprender trading desde cero
              mediante contenido organizado, profesional y gratuito.
            </p>

          </div>

          {/* Academia */}

          <div>

            <h3 className="mb-4 font-bold text-white">
              Academia
            </h3>

            <div className="space-y-3">

              <Link
                href="/trading/fundamentals"
                className="block text-zinc-400 transition hover:text-yellow-400"
              >
                Fundamentos
              </Link>

              <Link
                href="/trading/price-action"
                className="block text-zinc-400 transition hover:text-yellow-400"
              >
                Price Action
              </Link>

              <Link
                href="/trading/risk-management"
                className="block text-zinc-400 transition hover:text-yellow-400"
              >
                Gestión del Riesgo
              </Link>

              <Link
                href="/trading/psychology"
                className="block text-zinc-400 transition hover:text-yellow-400"
              >
                Psicología
              </Link>

            </div>

          </div>

          {/* Especializaciones */}

          <div>

            <h3 className="mb-4 font-bold text-white">
              Especializaciones
            </h3>

            <div className="space-y-3">

              <Link
                href="/trading/fundamental-analysis"
                className="block text-zinc-400 transition hover:text-yellow-400"
              >
                Análisis Fundamental
              </Link>

              <Link
                href="/trading/capital-management"
                className="block text-zinc-400 transition hover:text-yellow-400"
              >
                Gestión del Capital
              </Link>

              <Link
                href="/tools"
                className="block text-zinc-400 transition hover:text-yellow-400"
              >
                Herramientas
              </Link>

              <Link
                href="/journal"
                className="block text-zinc-400 transition hover:text-yellow-400"
              >
                Trading Journal
              </Link>

            </div>

          </div>

          {/* Información */}

          <div>

            <h3 className="mb-4 font-bold text-white">
              Información
            </h3>

            <div className="space-y-3 text-zinc-400">

              <p>Uso exclusivamente educativo.</p>

              <p>No constituye asesoría financiera.</p>

              <p>© 2026 JK Capital Trading</p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}