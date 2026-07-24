import LessonTemplate from "@/components/article/LessonTemplate";

export default function WhatIsRiskManagementPage() {
  return (
    <LessonTemplate
      category="Gestión del Riesgo"
      title="¿Qué es la Gestión del Riesgo?"
      description="Descubre qué significa gestionar el riesgo y por qué es uno de los pilares más importantes para cualquier trader."
      readingTime="8 min"
      updatedAt="2026"
      breadcrumb="¿Qué es la Gestión del Riesgo?"
      infoTitle="¿Qué significa gestionar el riesgo?"
      info={
        <>
          <p>
            La <strong>gestión del riesgo</strong> consiste en tomar decisiones
            que permitan proteger el capital frente a las pérdidas que pueden
            producirse en los mercados financieros.
          </p>

          <p className="mt-4">
            Ningún trader puede evitar que existan operaciones negativas. Sin
            embargo, sí puede controlar el impacto que esas pérdidas tienen sobre
            su cuenta.
          </p>

          <p className="mt-4">
            Gestionar el riesgo significa preparar un plan antes de operar y
            comprender que preservar el capital es tan importante como buscar
            beneficios.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Dos personas obtienen exactamente el mismo resultado en una
            operación. Sin embargo, una había planificado previamente el riesgo
            que estaba dispuesta a asumir y la otra no.
          </p>

          <p className="mt-4">
            Aunque el resultado haya sido igual, la primera actuó con una mejor
            preparación y disciplina.
          </p>
        </>
      }
      advice={
        <>
          Antes de pensar en cuánto puedes ganar, piensa en cómo proteger tu
          capital. Una buena gestión del riesgo comienza antes de abrir una
          operación.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Creer que la gestión del riesgo solo sirve cuando se pierde.</li>
            <li>Operar sin un plan previo.</li>
            <li>Pensar únicamente en las ganancias.</li>
            <li>Ignorar la importancia de proteger el capital.</li>
          </ul>
        </>
      }
      fact={
        <>
          Muchos traders consideran que la gestión del riesgo es uno de los
          factores que más influye en la supervivencia a largo plazo dentro de
          los mercados financieros.
        </>
      }
      points={[
        "La gestión del riesgo busca proteger el capital.",
        "Las pérdidas forman parte del trading.",
        "Planificar es más importante que improvisar.",
        "Proteger el capital permite mantenerse en el mercado a largo plazo."
      ]}
    />
  );
}