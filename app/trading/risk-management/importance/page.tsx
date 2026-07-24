import LessonTemplate from "@/components/article/LessonTemplate";

export default function ImportancePage() {
  return (
    <LessonTemplate
      category="Gestión del Riesgo"
      title="¿Por qué es importante la Gestión del Riesgo?"
      description="Comprende por qué proteger el capital es una de las prioridades más importantes para cualquier trader."
      readingTime="8 min"
      updatedAt="2026"
      breadcrumb="Importancia"
      infoTitle="¿Por qué es tan importante?"
      info={
        <>
          <p>
            En los mercados financieros no existe un método capaz de ganar el
            100% de las veces. Incluso los traders más experimentados atraviesan
            operaciones negativas.
          </p>

          <p className="mt-4">
            La gestión del riesgo permite que una pérdida individual no tenga un
            impacto tan grande como para impedir seguir operando en el futuro.
          </p>

          <p className="mt-4">
            El objetivo principal no es evitar perder, sino mantener la capacidad
            de continuar participando en el mercado durante el largo plazo.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Imagina dos traders con el mismo conocimiento. Uno protege su capital
            y el otro no presta atención al riesgo.
          </p>

          <p className="mt-4">
            Después de una serie de operaciones negativas, el primero conserva la
            posibilidad de continuar aprendiendo y operando, mientras que el
            segundo podría quedar fuera del mercado.
          </p>
        </>
      }
      advice={
        <>
          Considera la protección del capital como una inversión en tu futuro
          como trader. Permanecer en el mercado es lo que permite seguir
          adquiriendo experiencia.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Creer que solo importa cuánto se gana.</li>
            <li>Subestimar el impacto de varias pérdidas consecutivas.</li>
            <li>Operar sin un plan de protección del capital.</li>
            <li>Pensar únicamente en el corto plazo.</li>
          </ul>
        </>
      }
      fact={
        <>
          La mayoría de los profesionales coinciden en que conservar el capital
          es uno de los factores más importantes para lograr consistencia en los
          mercados financieros.
        </>
      }
      points={[
        "Las pérdidas forman parte del trading.",
        "La gestión del riesgo ayuda a proteger el capital.",
        "Permanecer en el mercado es fundamental para seguir aprendiendo.",
        "Pensar en el largo plazo mejora la toma de decisiones."
      ]}
    />
  );
}