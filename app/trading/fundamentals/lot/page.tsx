import LessonTemplate from "@/components/article/LessonTemplate";

export default function LotPage() {
  return (
    <LessonTemplate
      category="Fundamentos"
      title="¿Qué es un Lote?"
      description="Aprende qué representa un lote en trading y cómo influye directamente en el tamaño de tus operaciones y el riesgo."
      readingTime="8 min"
      updatedAt="2026"
      breadcrumb="Lote"
      infoTitle="¿Qué es un lote?"
      info={
        <>
          <p>
            Un <strong>lote</strong> representa el tamaño de una operación en el
            mercado. Cuanto mayor sea el lote, mayor será la cantidad de dinero
            que controlas y mayor será la ganancia o pérdida por cada pip.
          </p>

          <div className="mt-6 rounded-xl bg-zinc-800 p-5">
            <p><strong>Lote estándar:</strong> 100 000 unidades</p>
            <p><strong>Mini lote:</strong> 10 000 unidades</p>
            <p><strong>Micro lote:</strong> 1 000 unidades</p>
            <p><strong>Nano lote:</strong> 100 unidades (solo algunos brokers)</p>
          </div>

          <p className="mt-6">
            Elegir el tamaño correcto del lote es una de las decisiones más
            importantes para controlar el riesgo.
          </p>
        </>
      }
      exampleTitle="Ejemplo práctico"
      example={
        <>
          <p>
            Dos traders abren exactamente la misma operación.
          </p>

          <div className="mt-5 rounded-xl bg-zinc-800 p-5">
            <p>Trader A → 0.01 lotes</p>
            <p>Trader B → 1.00 lote</p>
          </div>

          <p className="mt-5">
            Si el precio avanza la misma cantidad de pips, ambos ganarán, pero
            el Trader B obtendrá una ganancia mucho mayor porque abrió una
            posición de mayor tamaño. Lo mismo ocurre con las pérdidas.
          </p>
        </>
      }
      advice={
        <>
          Nunca elijas el tamaño del lote basándote en cuánto quieres ganar.
          Primero calcula cuánto estás dispuesto a perder y después determina
          el lote adecuado según tu gestión del riesgo.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Abrir lotes demasiado grandes para una cuenta pequeña.</li>
            <li>Confundir el tamaño del lote con el apalancamiento.</li>
            <li>No calcular el riesgo antes de abrir una operación.</li>
            <li>Copiar el lote de otros traders sin analizar tu capital.</li>
          </ul>
        </>
      }
      fact={
        <>
          Muchos traders principiantes pierden sus cuentas no por una mala
          estrategia, sino por utilizar un tamaño de lote demasiado grande para
          su capital.
        </>
      }
      points={[
        "El lote representa el tamaño de una operación.",
        "A mayor lote, mayor ganancia y también mayor riesgo.",
        "Existen lotes estándar, mini, micro y nano.",
        "El lote debe elegirse según la gestión del riesgo.",
      ]}
    />
  );
}