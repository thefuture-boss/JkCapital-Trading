import LessonTemplate from "@/components/article/LessonTemplate";

export default function CommonMistakesPage() {
  return (
    <LessonTemplate
      category="Gestión del Riesgo"
      title="Errores Comunes en la Gestión del Riesgo"
      description="Conoce algunos de los errores más frecuentes relacionados con la gestión del riesgo y comprende por qué pueden afectar el desarrollo de un trader."
      readingTime="9 min"
      updatedAt="2026"
      breadcrumb="Errores Comunes"
      infoTitle="¿Por qué es importante conocer estos errores?"
      info={
        <>
          <p>
            Muchos errores no aparecen por falta de conocimientos, sino por
            actuar sin planificación o dejarse llevar por las emociones.
          </p>

          <p className="mt-4">
            Identificar estos comportamientos permite desarrollar hábitos más
            responsables y fortalecer la disciplina dentro del trading.
          </p>

          <p className="mt-4">
            Reconocer un error es el primer paso para evitar repetirlo en el
            futuro.
          </p>
        </>
      }
      exampleTitle="Ejemplos frecuentes"
      example={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operar sin una planificación previa.</li>
            <li>Ignorar la importancia de proteger el capital.</li>
            <li>Modificar decisiones por miedo o euforia.</li>
            <li>Buscar recuperar pérdidas de forma impulsiva.</li>
            <li>Confiar demasiado después de una serie de operaciones positivas.</li>
          </ul>
        </>
      }
      advice={
        <>
          La disciplina suele construirse evitando pequeños errores repetitivos,
          no únicamente tomando grandes decisiones.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operar impulsivamente.</li>
            <li>No respetar la planificación establecida.</li>
            <li>Tomar decisiones influenciadas por las emociones.</li>
            <li>Pensar únicamente en recuperar pérdidas.</li>
          </ul>
        </>
      }
      fact={
        <>
          Incluso los traders con experiencia continúan revisando sus errores
          para mejorar continuamente su proceso de toma de decisiones.
        </>
      }
      points={[
        "Todos los traders cometen errores.",
        "La disciplina ayuda a reducir errores repetitivos.",
        "Aprender de los errores forma parte del crecimiento.",
        "La planificación disminuye las decisiones impulsivas."
      ]}
    />
  );
}