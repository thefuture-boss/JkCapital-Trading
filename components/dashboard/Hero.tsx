import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-10 lg:p-16">

      {/* Fondo decorativo */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-yellow-500/5 blur-3xl" />

      <div className="relative z-10 max-w-3xl">

        <span className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
          🎓 Academia JK Capital Trading
        </span>

        <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">
          Aprende Trading
          <br />
          <span className="text-yellow-400">
            desde cero.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Una academia diseñada para ayudarte a comprender el funcionamiento
          de los mercados financieros paso a paso, mediante contenido
          organizado, profesional y completamente gratuito.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            href="/trading"
            className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-yellow-300"
          >
            Comenzar Academia
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-zinc-700 px-8 py-4 font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400"
          >
            Volver al Inicio
          </Link>

        </div>

        <div className="mt-10 flex flex-wrap gap-8 text-sm">

          <div>
            <p className="text-3xl font-bold text-yellow-400">
              27+
            </p>

            <p className="text-zinc-400">
              Lecciones
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-yellow-400">
              3
            </p>

            <p className="text-zinc-400">
              Módulos
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-yellow-400">
              100%
            </p>

            <p className="text-zinc-400">
              Gratuito
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}