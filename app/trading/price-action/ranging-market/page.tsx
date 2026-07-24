import LessonTemplate from "@/components/article/LessonTemplate";

export default function RangingMarketPage() {
  return (
    <LessonTemplate
      category="Price Action"
      title="Mercado Lateral"
      description="Aprende qué es un mercado lateral, cómo identificarlo y por qué es importante reconocerlo antes de analizar el precio."
      readingTime="8 min"
      updatedAt="2026"
      breadcrumb="Mercado Lateral"
      infoTitle="¿Qué es un mercado lateral?"
      info={
        <>
          <p>
            Un <strong>mercado lateral</strong>, también conocido como
            consolidación o rango, ocurre cuando el precio se mueve dentro de un
            área determinada sin desarrollar una tendencia alcista ni bajista.
          </p>

          <p className="mt-4">
            Durante este tipo de mercado, compradores y vendedores mantienen un
            equilibrio temporal, provocando que el precio oscile entre un límite
            superior y uno inferior.
          </p>

          <p className="mt-4">
            Es una fase completamente normal dentro de los mercados financieros
            y suele aparecer antes o después de movimientos importantes.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Imagina que durante varios días el precio rebota repetidamente entre
            dos niveles sin crear nuevos máximos ni nuevos mínimos.
          </p>

          <p className="mt-4">
            Aunque existan pequeños movimientos internos, la estructura general
            continúa siendo lateral hasta que el precio salga de ese rango.
          </p>
        </>
      }
      advice={
        <>
          Antes de decidir si el mercado está subiendo o bajando, verifica si el
          precio realmente mantiene una dirección clara o simplemente está
          oscilando dentro de un rango.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Confundir una consolidación con una tendencia.</li>
            <li>Ignorar que el mercado puede pasar largos periodos sin dirección.</li>
            <li>Analizar únicamente movimientos pequeños sin observar el rango completo.</li>
            <li>Pensar que el precio siempre debe estar en tendencia.</li>
          </ul>
        </>
      }
      fact={
        <>
          Gran parte del tiempo los mercados permanecen en consolidación antes
          de iniciar un nuevo movimiento direccional. Saber identificar estas
          fases mejora la comprensión del comportamiento del precio.
        </>
      }
      points={[
        "Un mercado lateral no presenta una tendencia definida.",
        "El precio se mueve dentro de un rango.",
        "Es una fase normal del mercado.",
        "Reconocerla ayuda a interpretar mejor la estructura."
      ]}
    />
  );
}