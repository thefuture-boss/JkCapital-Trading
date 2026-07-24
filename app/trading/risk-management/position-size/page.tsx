import LessonTemplate from "@/components/article/LessonTemplate";

export default function PositionSizePage() {
  return (
    <LessonTemplate
      category="Gestión del Riesgo"
      title="Tamaño de Posición"
      description="Aprende qué significa el tamaño de una posición y por qué influye directamente en la gestión del riesgo."
      readingTime="8 min"
      updatedAt="2026"
      breadcrumb="Tamaño de Posición"
      infoTitle="¿Qué es el tamaño de posición?"
      info={
        <>
          <p>
            El <strong>tamaño de posición</strong> representa la cantidad de un
            activo que un trader decide negociar en una operación.
          </p>

          <p className="mt-4">
            Esta decisión influye directamente en la exposición al riesgo. Una
            posición más grande puede aumentar tanto las ganancias potenciales
            como las pérdidas potenciales.
          </p>

          <p className="mt-4">
            Comprender este concepto permite entender que el resultado de una
            operación no depende únicamente del movimiento del precio, sino
            también del volumen con el que se participa en el mercado.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Dos traders analizan exactamente el mismo activo y obtienen el mismo
            movimiento del mercado.
          </p>

          <p className="mt-4">
            Sin embargo, al utilizar tamaños de posición diferentes, el impacto
            sobre sus cuentas también será diferente.
          </p>
        </>
      }
      advice={
        <>
          Antes de abrir una operación, recuerda que el tamaño de la posición es
          una decisión tan importante como el análisis del mercado.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Aumentar el tamaño de posición por impulso.</li>
            <li>Ignorar cómo afecta al riesgo total.</li>
            <li>Creer que una posición más grande siempre es mejor.</li>
            <li>No mantener un criterio consistente.</li>
          </ul>
        </>
      }
      fact={
        <>
          Muchos traders principiantes se enfocan únicamente en encontrar buenas
          oportunidades, mientras que los más experimentados también prestan
          mucha atención al tamaño de cada posición.
        </>
      }
      points={[
        "El tamaño de posición determina la exposición al mercado.",
        "Influye tanto en ganancias como en pérdidas.",
        "Debe formar parte de la planificación previa.",
        "La consistencia es más importante que operar con posiciones grandes."
      ]}
    />
  );
}