import LessonTemplate from "@/components/article/LessonTemplate";

export default function UptrendPage() {
  return (
    <LessonTemplate
      category="Price Action"
      title="Tendencia Alcista"
      description="Aprende cómo identificar una tendencia alcista observando la estructura del precio."
      readingTime="8 min"
      updatedAt="2026"
      breadcrumb="Tendencia Alcista"
      infoTitle="¿Qué es una tendencia alcista?"
      info={
        <>
          <p>
            Una tendencia alcista ocurre cuando el mercado muestra una secuencia
            de <strong>máximos cada vez más altos</strong> y
            <strong> mínimos cada vez más altos</strong>.
          </p>

          <p className="mt-4">
            Esto indica que los compradores mantienen el control del mercado y
            que, en términos generales, el precio continúa avanzando hacia
            niveles superiores.
          </p>

          <p className="mt-4">
            Es importante recordar que una tendencia alcista no significa que el
            precio suba en línea recta. Los retrocesos son una parte natural del
            movimiento.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Imagina que el precio alcanza un nuevo máximo, retrocede un poco sin
            romper el mínimo anterior y luego vuelve a subir marcando otro
            máximo más alto.
          </p>

          <p className="mt-4">
            Mientras esa secuencia continúe, el mercado mantiene una estructura
            alcista.
          </p>
        </>
      }
      advice={
        <>
          Antes de analizar cualquier movimiento, identifica si realmente existe
          una secuencia de máximos y mínimos crecientes. No confundas un simple
          rebote con una tendencia.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Creer que toda vela verde significa tendencia alcista.</li>
            <li>Ignorar los retrocesos naturales del mercado.</li>
            <li>Analizar únicamente las últimas velas.</li>
            <li>No observar la estructura completa.</li>
          </ul>
        </>
      }
      fact={
        <>
          Incluso dentro de una fuerte tendencia alcista pueden existir
          movimientos bajistas temporales. Por eso es importante analizar la
          estructura completa y no una sola vela.
        </>
      }
      points={[
        "Una tendencia alcista presenta máximos crecientes.",
        "También presenta mínimos crecientes.",
        "Los retrocesos son normales.",
        "La estructura completa siempre es más importante que una sola vela."
      ]}
    />
  );
}