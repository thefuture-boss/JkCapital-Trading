import LessonTemplate from "@/components/article/LessonTemplate";

export default function EmotionalControlPage() {
  return (
    <LessonTemplate
      category="Psicología"
      title="Control Emocional"
      description="Aprende a controlar tus emociones para tomar decisiones racionales y consistentes en el mercado."
      readingTime="9 min"
      updatedAt="2026"
      breadcrumb="Control Emocional"
      infoTitle="¿Por qué es importante controlar las emociones?"
      info={
        <>
          <p>
            El mercado no premia a quien siente más confianza, sino a quien sigue
            su plan de trading sin dejarse dominar por el miedo o la codicia.
          </p>

          <p className="mt-4">
            Un trader emocional suele cerrar operaciones antes de tiempo,
            mover el Stop Loss o entrar impulsivamente.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Después de perder dos operaciones consecutivas, un trader decide
            duplicar el tamaño de su siguiente operación para recuperar el dinero.
          </p>

          <p className="mt-4">
            Esa decisión fue tomada por emoción, no por estrategia.
          </p>
        </>
      }
      advice={
        <>
          Antes de abrir una operación pregúntate:
          <strong> ¿Estoy siguiendo mi plan o mis emociones?</strong>
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operar por miedo.</li>
            <li>Operar por venganza.</li>
            <li>Operar por euforia.</li>
            <li>No aceptar pérdidas pequeñas.</li>
          </ul>
        </>
      }
      fact={
        <>
          La mayoría de traders rentables consideran que la psicología pesa más
          que la estrategia técnica.
        </>
      }
      points={[
        "Las emociones afectan las decisiones.",
        "Debes seguir tu plan.",
        "Nunca operes por impulso.",
        "Aceptar pérdidas forma parte del trading.",
      ]}
    />
  );
}