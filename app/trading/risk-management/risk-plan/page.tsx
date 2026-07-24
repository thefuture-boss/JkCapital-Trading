import LessonTemplate from "@/components/article/LessonTemplate";

export default function RiskPlanPage() {
  return (
    <LessonTemplate
      category="Gestión del Riesgo"
      title="Construyendo un Plan de Riesgo"
      description="Descubre qué es un plan de riesgo y por qué puede convertirse en una de las herramientas más importantes para desarrollar disciplina y consistencia en el trading."
      readingTime="9 min"
      updatedAt="2026"
      breadcrumb="Plan de Riesgo"
      infoTitle="¿Qué es un plan de riesgo?"
      info={
        <>
          <p>
            Un <strong>plan de riesgo</strong> es un conjunto de reglas y
            decisiones definidas antes de operar con el objetivo de proteger el
            capital y mantener una actuación disciplinada.
          </p>

          <p className="mt-4">
            En lugar de decidir bajo presión cuando el mercado está en
            movimiento, el trader establece previamente cómo desea gestionar el
            riesgo en sus operaciones.
          </p>

          <p className="mt-4">
            Cada persona puede construir un plan diferente, pero todos tienen un
            mismo propósito: actuar con consistencia y reducir las decisiones
            impulsivas.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Antes de comenzar su jornada, un trader revisa su planificación y
            recuerda las reglas que decidió seguir para proteger su capital.
          </p>

          <p className="mt-4">
            Gracias a esa preparación, evita improvisar cuando el mercado se
            mueve rápidamente y mantiene una forma de actuar más organizada.
          </p>
        </>
      }
      advice={
        <>
          Un buen plan no busca predecir el mercado. Busca ayudarte a mantener
          la disciplina independientemente del resultado de una operación.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operar sin ninguna planificación.</li>
            <li>Cambiar las reglas constantemente.</li>
            <li>Improvisar por emociones.</li>
            <li>Creer que un plan garantiza beneficios.</li>
          </ul>
        </>
      }
      fact={
        <>
          Muchos traders experimentados revisan y actualizan periódicamente su
          plan de riesgo conforme adquieren más experiencia y conocimientos.
        </>
      }
      points={[
        "Un plan de riesgo ayuda a mantener la disciplina.",
        "Debe prepararse antes de operar.",
        "Reduce las decisiones impulsivas.",
        "Es una herramienta para proteger el capital a largo plazo."
      ]}
    />
  );
}