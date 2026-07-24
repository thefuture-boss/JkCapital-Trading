import LessonTemplate from "@/components/article/LessonTemplate";

export default function OvertradingPage() {
  return (
    <LessonTemplate
      category="Psicología"
      title="Sobreoperar (Overtrading)"
      description="Descubre por qué abrir demasiadas operaciones puede convertirse en uno de los mayores obstáculos para un trader."
      readingTime="7 min"
      updatedAt="2026"
      breadcrumb="Sobreoperar"
      infoTitle="¿Qué es el Overtrading?"
      info={
        <>
          <p>
            El <strong>Overtrading</strong> ocurre cuando un trader realiza más
            operaciones de las que realmente exige su estrategia.
          </p>

          <p className="mt-4">
            Generalmente aparece después de una racha de pérdidas, por aburrimiento
            o por la necesidad de ganar dinero rápidamente.
          </p>

          <p className="mt-4">
            Cuantas más operaciones impulsivas realizas, mayor es la probabilidad
            de cometer errores y perder dinero innecesariamente.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Tu plan establece un máximo de dos operaciones por día.
          </p>

          <p className="mt-4">
            Después de perder ambas operaciones decides abrir cinco más para
            intentar recuperar el dinero.
          </p>

          <p className="mt-4">
            Ninguna de esas operaciones cumplía con tu estrategia y terminas
            aumentando considerablemente tus pérdidas.
          </p>
        </>
      }
      advice={
        <>
          Establece un límite diario de operaciones y respétalo sin excepciones.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operar por aburrimiento.</li>
            <li>Buscar recuperar pérdidas inmediatamente.</li>
            <li>Abrir operaciones sin confirmación.</li>
            <li>No respetar el plan de trading.</li>
          </ul>
        </>
      }
      fact={
        <>
          Muchos traders mejoran su rentabilidad simplemente reduciendo la
          cantidad de operaciones que realizan cada semana.
        </>
      }
      points={[
        "Más operaciones no significan más ganancias.",
        "La calidad siempre supera a la cantidad.",
        "Respeta el número máximo de operaciones diarias.",
        "Opera únicamente cuando exista una oportunidad clara.",
      ]}
    />
  );
}