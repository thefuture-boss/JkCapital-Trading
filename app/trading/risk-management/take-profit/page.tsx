import LessonTemplate from "@/components/article/LessonTemplate";

export default function TakeProfitPage() {
  return (
    <LessonTemplate
      category="Gestión del Riesgo"
      title="Take Profit"
      description="Conoce qué es un Take Profit y cómo ayuda a establecer un objetivo de salida antes de abrir una operación."
      readingTime="8 min"
      updatedAt="2026"
      breadcrumb="Take Profit"
      infoTitle="¿Qué es un Take Profit?"
      info={
        <>
          <p>
            Un <strong>Take Profit</strong> es una instrucción utilizada para
            cerrar automáticamente una operación cuando el precio alcanza un
            objetivo previamente definido.
          </p>

          <p className="mt-4">
            Su finalidad es proteger las ganancias obtenidas y mantener la
            disciplina al seguir un plan establecido antes de entrar al mercado.
          </p>

          <p className="mt-4">
            Al igual que otras herramientas de gestión del riesgo, el Take
            Profit no garantiza resultados positivos, pero ayuda a evitar que
            las decisiones sean tomadas únicamente por las emociones.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Un trader identifica una oportunidad y, antes de abrir la operación,
            establece un objetivo donde considera razonable finalizarla si el
            mercado evoluciona a su favor.
          </p>

          <p className="mt-4">
            Si el precio alcanza ese nivel, la operación se cierra
            automáticamente según la planificación realizada.
          </p>
        </>
      }
      advice={
        <>
          Definir un objetivo antes de operar favorece la disciplina y ayuda a
          reducir las decisiones impulsivas cuando el mercado está en
          movimiento.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cambiar constantemente el objetivo por emociones.</li>
            <li>Eliminar el objetivo esperando ganar mucho más.</li>
            <li>No definir una salida antes de operar.</li>
            <li>Confundir planificación con garantía de éxito.</li>
          </ul>
        </>
      }
      fact={
        <>
          Muchos traders consideran que planificar tanto la salida por pérdida
          como la salida por beneficio forma parte de una preparación completa
          antes de abrir una operación.
        </>
      }
      points={[
        "Permite definir un objetivo antes de operar.",
        "Favorece la disciplina.",
        "Ayuda a proteger beneficios obtenidos.",
        "Forma parte de una buena planificación."
      ]}
    />
  );
}