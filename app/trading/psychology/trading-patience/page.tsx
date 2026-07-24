import LessonTemplate from "@/components/article/LessonTemplate";

export default function TradingPatiencePage() {
  return (
    <LessonTemplate
      category="Psicología"
      title="Paciencia"
      description="La paciencia permite esperar únicamente las mejores oportunidades en lugar de operar constantemente por impulso."
      readingTime="6 min"
      updatedAt="2026"
      breadcrumb="Paciencia"
      infoTitle="¿Por qué la paciencia es una ventaja?"
      info={
        <>
          <p>
            El mercado ofrece cientos de movimientos cada día, pero muy pocas
            oportunidades cumplen realmente con tu estrategia.
          </p>

          <p className="mt-4">
            Un trader paciente entiende que no operar también es una decisión
            inteligente. Esperar una entrada de alta probabilidad suele producir
            mejores resultados que abrir muchas operaciones sin fundamento.
          </p>

          <p className="mt-4">
            La paciencia evita errores, reduce el estrés y mejora la calidad de
            cada operación.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Tu estrategia requiere que el precio llegue a una zona de liquidez y
            forme una confirmación. Aunque ves movimientos interesantes, decides
            esperar porque aún no se cumplen todas las condiciones.
          </p>

          <p className="mt-4">
            Horas después aparece exactamente la configuración que buscabas y
            ejecutas una operación con mucha mayor probabilidad de éxito.
          </p>
        </>
      }
      advice={
        <>
          No abras operaciones solo porque el mercado está abierto. Opera
          únicamente cuando exista una oportunidad clara según tu plan.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operar por aburrimiento.</li>
            <li>Entrar demasiado pronto.</li>
            <li>Buscar operaciones todos los días obligatoriamente.</li>
            <li>No respetar las confirmaciones de la estrategia.</li>
          </ul>
        </>
      }
      fact={
        <>
          Muchos traders profesionales realizan solo unas pocas operaciones por
          semana y aun así obtienen excelentes resultados gracias a su paciencia.
        </>
      }
      points={[
        "No todas las velas son una oportunidad.",
        "Esperar aumenta la calidad de las entradas.",
        "No operar también es parte del trading.",
        "La paciencia reduce errores emocionales.",
      ]}
    />
  );
}