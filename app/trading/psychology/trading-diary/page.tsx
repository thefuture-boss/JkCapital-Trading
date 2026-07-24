import LessonTemplate from "@/components/article/LessonTemplate";

export default function TradingDiaryPage() {
  return (
    <LessonTemplate
      category="Psicología"
      title="Diario de Trading"
      description="Aprende por qué llevar un diario de trading es una de las herramientas más importantes para mejorar como trader."
      readingTime="8 min"
      updatedAt="2026"
      breadcrumb="Diario de Trading"
      infoTitle="¿Qué es un Diario de Trading?"
      info={
        <>
          <p>
            Un diario de trading es un registro detallado de todas tus
            operaciones. No sirve únicamente para anotar ganancias o pérdidas,
            sino para analizar tus decisiones y detectar patrones de mejora.
          </p>

          <p className="mt-4">
            Los traders profesionales documentan prácticamente todas sus
            operaciones para identificar errores, fortalezas y oportunidades de
            crecimiento.
          </p>

          <p className="mt-4">
            Sin un registro es muy difícil saber por qué una estrategia funciona
            o por qué está dejando de funcionar.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>Después de cada operación puedes registrar:</p>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Activo operado.</li>
            <li>Hora de entrada.</li>
            <li>Hora de salida.</li>
            <li>Setup utilizado.</li>
            <li>Riesgo asumido.</li>
            <li>Resultado.</li>
            <li>Cómo te sentías emocionalmente.</li>
            <li>Qué aprendiste de esa operación.</li>
          </ul>
        </>
      }
      advice={
        <>
          Dedica cinco minutos al finalizar cada sesión para registrar todas tus
          operaciones. Con el tiempo descubrirás errores que antes no podías ver.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Registrar únicamente las operaciones ganadoras.</li>
            <li>No escribir las emociones.</li>
            <li>Olvidar revisar el diario cada semana.</li>
            <li>No analizar los errores repetitivos.</li>
          </ul>
        </>
      }
      fact={
        <>
          Muchos fondos de inversión exigen que sus traders mantengan un diario
          detallado de cada operación como parte de su proceso profesional.
        </>
      }
      points={[
        "Documenta todas tus operaciones.",
        "Registra también tus emociones.",
        "Analiza el diario cada semana.",
        "La mejora continua nace del análisis.",
      ]}
    />
  );
}