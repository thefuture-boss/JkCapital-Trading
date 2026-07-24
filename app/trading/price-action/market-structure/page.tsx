import LessonTemplate from "@/components/article/LessonTemplate";

export default function MarketStructurePage() {
  return (
    <LessonTemplate
      category="Price Action"
      title="Estructura del Mercado"
      description="Aprende cómo identificar la dirección del mercado observando la secuencia de máximos y mínimos."
      readingTime="9 min"
      updatedAt="2026"
      breadcrumb="Estructura del Mercado"
      infoTitle="¿Qué es la estructura del mercado?"
      info={
        <>
          <p>
            La estructura del mercado es la forma en que el precio se mueve a lo
            largo del tiempo.
          </p>

          <p className="mt-4">
            Cada movimiento deja información sobre el equilibrio entre
            compradores y vendedores.
          </p>

          <p className="mt-4">
            Analizar la estructura permite comprender si el mercado está
            avanzando, retrocediendo o moviéndose sin una dirección clara.
          </p>

          <p className="mt-4">
            Antes de buscar cualquier oportunidad, un trader debe identificar la
            estructura actual del mercado.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Si el precio continúa creando nuevos máximos y nuevos mínimos de
            forma ordenada, existe una estructura definida.
          </p>

          <p className="mt-4">
            En cambio, si los movimientos son irregulares y no existe una
            secuencia clara, el mercado puede encontrarse en consolidación.
          </p>
        </>
      }
      advice={
        <>
          Observa primero la estructura general y después analiza los movimientos
          más pequeños. El contexto siempre tiene prioridad sobre los detalles.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Analizar únicamente una vela.</li>
            <li>Ignorar el contexto del mercado.</li>
            <li>Cambiar de temporalidad constantemente.</li>
            <li>Intentar identificar una estructura donde aún no existe.</li>
          </ul>
        </>
      }
      fact={
        <>
          La estructura del mercado cambia constantemente. Un mercado alcista
          puede pasar a consolidación y posteriormente convertirse en una
          tendencia bajista.
        </>
      }
      points={[
        "La estructura describe cómo se mueve el precio.",
        "Permite comprender el comportamiento del mercado.",
        "Debe analizarse antes de cualquier decisión.",
        "Es la base del Price Action.",
      ]}
    />
  );
}