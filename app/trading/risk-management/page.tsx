import LessonTemplate from "@/components/article/LessonTemplate";

export default function RiskRewardPage() {
  return (
    <LessonTemplate
      category="Gestión del Riesgo"
      title="Relación Riesgo–Beneficio"
      description="Comprende qué representa la relación riesgo–beneficio y por qué es un concepto fundamental dentro de la gestión del riesgo."
      readingTime="9 min"
      updatedAt="2026"
      breadcrumb="Relación Riesgo–Beneficio"
      infoTitle="¿Qué es la relación riesgo–beneficio?"
      info={
        <>
          <p>
            La relación riesgo–beneficio compara la pérdida potencial de una
            operación con la ganancia potencial que podría obtenerse si el
            mercado evoluciona de forma favorable.
          </p>

          <p className="mt-4">
            Este concepto ayuda a evaluar si una oportunidad parece razonable
            desde el punto de vista del riesgo asumido, aunque nunca garantiza un
            resultado determinado.
          </p>

          <p className="mt-4">
            Comprender esta relación permite analizar las operaciones con una
            visión más objetiva y menos impulsiva.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Imagina una situación donde la posible ganancia estimada es mayor que
            la pérdida potencial.
          </p>

          <p className="mt-4">
            Analizar esa diferencia ayuda al trader a valorar la operación antes
            de tomar cualquier decisión, siempre teniendo presente que el mercado
            puede comportarse de forma distinta a la esperada.
          </p>
        </>
      }
      advice={
        <>
          No te centres únicamente en cuánto podrías ganar. Analiza también qué
          riesgo implica cada decisión y si ese riesgo resulta coherente con tu
          planificación.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Observar solo la ganancia potencial.</li>
            <li>Ignorar el riesgo asociado a la operación.</li>
            <li>Tomar decisiones basadas únicamente en la emoción.</li>
            <li>Olvidar que una buena relación riesgo–beneficio no garantiza el éxito.</li>
          </ul>
        </>
      }
      fact={
        <>
          La relación riesgo–beneficio es una herramienta de evaluación. Su
          función es ayudar a analizar oportunidades, no predecir el resultado
          de una operación.
        </>
      }
      points={[
        "Compara el riesgo con la posible recompensa.",
        "Ayuda a evaluar oportunidades de forma objetiva.",
        "No garantiza resultados positivos.",
        "Debe analizarse junto con el contexto del mercado."
      ]}
    />
  );
}