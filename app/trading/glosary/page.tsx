export default function GlossaryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">

        <h1 className="text-5xl font-bold text-yellow-400">
          Glosario de Trading
        </h1>

        <p className="mt-8 text-lg leading-8 text-zinc-300">
          Aquí encontrarás las definiciones de los términos más importantes del
          trading, explicados de forma clara y sencilla.
        </p>

        <div className="mt-12 rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8">
          <h2 className="mb-4 text-2xl font-bold text-yellow-400">
            Próximamente
          </h2>

          <p className="leading-8 text-zinc-400">
            Este glosario incluirá conceptos como Pip, Spread, Lotaje,
            Apalancamiento, Liquidez, Volatilidad, Drawdown, Risk Reward y muchos
            más.
          </p>
        </div>

      </div>
    </main>
  );
}