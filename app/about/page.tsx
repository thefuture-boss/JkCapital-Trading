export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold text-yellow-400">
          Sobre JK Capital Trading
        </h1>

        <p className="mt-8 text-lg leading-8 text-zinc-300">
          JK Capital Trading es una plataforma educativa creada para enseñar
          trading desde cero mediante contenido estructurado, herramientas
          profesionales y una metodología basada en la gestión del riesgo,
          Price Action y psicología del trading.
        </p>

        <div className="mt-12 rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8">
          <h2 className="mb-4 text-2xl font-bold text-yellow-400">
            Nuestra misión
          </h2>

          <p className="leading-8 text-zinc-400">
            Ayudar a cualquier persona a aprender trading de forma profesional,
            clara y completamente gratuita, evitando la desinformación y
            fomentando una correcta administración del riesgo.
          </p>
        </div>
      </div>
    </main>
  );
}