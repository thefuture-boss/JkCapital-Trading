import LessonTemplate from "@/components/article/LessonTemplate";

export default function MarketConfirmationPage() {
  return (
    <LessonTemplate
      category="Price Action"
      title="Confirmaciones del Mercado"
      description="Aprende por qué es importante esperar que el mercado confirme un movimiento antes de sacar conclusiones."
      readingTime="9 min"
      updatedAt="2026"
      breadcrumb="Confirmaciones del Mercado"
      infoTitle="¿Qué es una confirmación?"
      info={
        <>
          <p>
            Una <strong>confirmación</strong> es una evidencia adicional de que
            el mercado continúa desarrollando el comportamiento que estaba
            mostrando previamente.
          </p>

          <p className="mt-4">
            En lugar de reaccionar inmediatamente ante un movimiento del precio,
            muchos analistas prefieren observar cómo evoluciona el mercado antes
            de interpretar un posible cambio o una continuación de la
            estructura.
          </p>

          <p className="mt-4">
            Esperar confirmaciones ayuda a analizar el precio con mayor calma y
            a evitar conclusiones precipitadas.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Imagina que el precio rompe un nivel importante.
          </p>

          <p className="mt-4">
            En lugar de asumir inmediatamente que el mercado continuará en esa
            dirección, un analista puede esperar nuevos movimientos que
            respalden esa idea antes de sacar una conclusión.
          </p>

          <p className="mt-4">
            El objetivo no es adivinar el futuro, sino interpretar el
            comportamiento del mercado utilizando la información disponible.
          </p>
        </>
      }
      advice={
        <>
          La paciencia es una de las cualidades más importantes de un trader.
          Esperar confirmaciones suele proporcionar una visión más clara del
          comportamiento del precio.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tomar decisiones basándose en un solo movimiento.</li>
            <li>Sacar conclusiones demasiado rápido.</li>
            <li>Ignorar el contexto general del mercado.</li>
            <li>Confundir un movimiento temporal con un cambio definitivo.</li>
          </ul>
        </>
      }
      fact={
        <>
          Los mercados financieros cambian constantemente. Por ello, muchos
          analistas prefieren esperar información adicional antes de interpretar
          un movimiento importante del precio.
        </>
      }
      points={[
        "Una confirmación aporta mayor confianza al análisis.",
        "Ayuda a evitar conclusiones apresuradas.",
        "Debe interpretarse dentro del contexto del mercado.",
        "La paciencia forma parte del análisis profesional."
      ]}
    />
  );
}