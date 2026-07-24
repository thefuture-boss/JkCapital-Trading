import LessonTemplate from "@/components/article/LessonTemplate";

export default function WhatIsPriceActionPage() {
  return (
    <LessonTemplate
      category="Price Action"
      title="¿Qué es el Price Action?"
      description="Aprende qué es el Price Action y por qué muchos traders analizan únicamente el movimiento del precio para tomar decisiones."
      readingTime="8 min"
      updatedAt="2026"
      breadcrumb="¿Qué es el Price Action?"
      infoTitle="¿Qué significa Price Action?"
      info={
        <>
          <p>
            El <strong>Price Action</strong> es una forma de analizar el mercado
            observando únicamente el movimiento del precio, sin depender de
            indicadores técnicos.
          </p>

          <p className="mt-4">
            La idea principal es que toda la información relevante ya está
            reflejada en el gráfico. Por ello, muchos traders estudian la forma
            en que el precio se mueve para comprender el comportamiento del
            mercado.
          </p>

          <p className="mt-4">
            El Price Action no consiste en memorizar patrones, sino en aprender
            a interpretar la historia que cuenta el precio.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Imagina que el precio sube durante varios días consecutivos y luego
            comienza a retroceder ligeramente antes de volver a subir.
          </p>

          <p className="mt-4">
            Un trader que utiliza Price Action estudiará ese comportamiento para
            entender cómo interactúan compradores y vendedores, en lugar de
            depender únicamente de un indicador.
          </p>
        </>
      }
      advice={
        <>
          Antes de aprender figuras o patrones complejos, dedica tiempo a
          observar cómo se mueve el precio. Entender el comportamiento del
          mercado es mucho más importante que memorizar nombres.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Creer que Price Action significa operar sin análisis.</li>
            <li>Intentar aprender decenas de patrones al mismo tiempo.</li>
            <li>Ignorar el contexto general del mercado.</li>
            <li>Buscar entradas sin comprender la estructura del precio.</li>
          </ul>
        </>
      }
      fact={
        <>
          Muchos traders profesionales utilizan el Price Action como base de su
          análisis, incluso cuando emplean herramientas adicionales para apoyar
          sus decisiones.
        </>
      }
      points={[
        "El Price Action estudia el movimiento del precio.",
        "No depende exclusivamente de indicadores.",
        "Busca comprender el comportamiento del mercado.",
        "La observación y el contexto son fundamentales.",
      ]}
    />
  );
}