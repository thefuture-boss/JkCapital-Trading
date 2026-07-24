import LessonTemplate from "@/components/article/LessonTemplate";

export default function DisciplinePage() {
  return (
    <LessonTemplate
      category="Psicología"
      title="Disciplina"
      description="La disciplina es la capacidad de seguir tu plan de trading sin importar las emociones o los resultados de las operaciones anteriores."
      readingTime="7 min"
      updatedAt="2026"
      breadcrumb="Disciplina"
      infoTitle="¿Qué significa ser disciplinado?"
      info={
        <>
          <p>
            La disciplina consiste en respetar tus reglas de entrada, salida y
            gestión del riesgo incluso cuando sientes miedo o euforia.
          </p>

          <p className="mt-4">
            Un trader disciplinado entiende que una sola operación no determina
            su éxito. Lo importante es ejecutar correctamente cientos de
            operaciones siguiendo el mismo sistema.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Tu estrategia indica que debes esperar un retroceso antes de entrar.
            Aunque el precio siga subiendo sin ti, decides esperar porque no se
            cumplen las condiciones de entrada.
          </p>

          <p className="mt-4">
            Esa es una decisión disciplinada.
          </p>
        </>
      }
      advice={
        <>
          Escribe tus reglas y revísalas antes de cada sesión de trading.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>No respetar el Stop Loss.</li>
            <li>Entrar antes de que aparezca la señal.</li>
            <li>Cambiar la estrategia constantemente.</li>
            <li>Operar por aburrimiento.</li>
          </ul>
        </>
      }
      fact={
        <>
          La disciplina permite obtener resultados consistentes incluso cuando
          existen pérdidas consecutivas.
        </>
      }
      points={[
        "Sigue siempre tu plan.",
        "No cambies las reglas durante la operación.",
        "Acepta que no todas las operaciones serán ganadoras.",
        "La consistencia nace de la disciplina.",
      ]}
    />
  );
}