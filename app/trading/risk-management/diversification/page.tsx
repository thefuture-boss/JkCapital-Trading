import LessonTemplate from "@/components/article/LessonTemplate";

export default function DiversificationPage() {
  return (
    <LessonTemplate
      category="Gestión del Riesgo"
      title="Diversificación"
      description="Descubre qué significa diversificar y cómo este concepto puede ayudar a distribuir el riesgo dentro de una estrategia de inversión o trading."
      readingTime="8 min"
      updatedAt="2026"
      breadcrumb="Diversificación"
      infoTitle="¿Qué es la diversificación?"
      info={
        <>
          <p>
            La <strong>diversificación</strong> consiste en distribuir el riesgo
            en lugar de depender completamente de un único activo, mercado o
            tipo de operación.
          </p>

          <p className="mt-4">
            El objetivo es evitar que un solo evento tenga un impacto excesivo
            sobre el resultado general de una cartera o de un conjunto de
            operaciones.
          </p>

          <p className="mt-4">
            Diversificar no elimina el riesgo, pero puede ayudar a reducir la
            exposición cuando se aplica dentro de una planificación adecuada.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Imagina dos inversores. Uno concentra todos sus recursos en un solo
            activo, mientras que el otro los distribuye entre diferentes
            instrumentos financieros.
          </p>

          <p className="mt-4">
            Si uno de esos activos presenta un comportamiento desfavorable, el
            impacto sobre quien diversificó puede ser menor al no depender de
            una única posición.
          </p>
        </>
      }
      advice={
        <>
          Diversificar significa repartir la exposición al riesgo de forma
          consciente. Antes de hacerlo, es importante comprender qué activos se
          están incorporando y por qué.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Concentrar todo el capital en un solo activo.</li>
            <li>Creer que diversificar elimina completamente el riesgo.</li>
            <li>Diversificar sin conocer los activos elegidos.</li>
            <li>Confundir cantidad de activos con una buena planificación.</li>
          </ul>
        </>
      }
      fact={
        <>
          La diversificación es un principio ampliamente utilizado en distintas
          áreas de la inversión para distribuir la exposición al riesgo, aunque
          su efectividad depende de cómo se aplique y del contexto del mercado.
        </>
      }
      points={[
        "Busca distribuir la exposición al riesgo.",
        "No elimina completamente las pérdidas posibles.",
        "Debe formar parte de una planificación consciente.",
        "Conocer los activos es tan importante como diversificar."
      ]}
    />
  );
}