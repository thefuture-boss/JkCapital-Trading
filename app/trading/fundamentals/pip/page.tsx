import LessonTemplate from "@/components/article/LessonTemplate";

export default function PipPage() {
  return (
    <LessonTemplate
      category="Fundamentos"
      title="¿Qué es un Pip?"
      description="Aprende qué es un pip, por qué es tan importante y cómo se utiliza para medir el movimiento del precio."
      readingTime="7 min"
      updatedAt="2026"
      breadcrumb="Pip"
      infoTitle="¿Qué es un Pip?"
      info={
        <>
          <p>
            Un <strong>Pip</strong> (Percentage in Point) es la unidad de medida
            más utilizada para expresar cuánto se mueve el precio de un activo,
            especialmente en el mercado Forex.
          </p>

          <p className="mt-4">
            En la mayoría de los pares de divisas, un pip corresponde al
            <strong> cuarto decimal</strong>.
          </p>

          <div className="mt-6 rounded-xl bg-zinc-800 p-5">
            <p>
              EUR/USD pasa de <strong>1.1050</strong> a{" "}
              <strong>1.1051</strong>
            </p>

            <p className="mt-3 text-yellow-400 font-semibold">
              Movimiento: 1 Pip
            </p>
          </div>

          <p className="mt-6">
            Los traders utilizan los pips para medir ganancias, pérdidas,
            distancias del Stop Loss y objetivos de Take Profit.
          </p>
        </>
      }
      exampleTitle="Ejemplo práctico"
      example={
        <>
          <p>
            Compras EUR/USD en <strong>1.1000</strong>.
          </p>

          <p className="mt-3">
            El precio sube hasta <strong>1.1015</strong>.
          </p>

          <p className="mt-3">
            La diferencia es de <strong>15 pips</strong>.
          </p>

          <p className="mt-3">
            Dependiendo del tamaño de tu lote, esos 15 pips representarán una
            ganancia determinada.
          </p>
        </>
      }
      advice={
        <>
          Antes de preocuparte por cuánto dinero ganarás, acostúmbrate a pensar
          en pips. Los traders profesionales primero analizan cuántos pips están
          arriesgando y cuántos esperan ganar.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Confundir un pip con dinero.</li>
            <li>No saber cuántos pips tiene el Stop Loss.</li>
            <li>Operar sin calcular el riesgo en pips.</li>
            <li>Pensar que todos los activos tienen el mismo valor por pip.</li>
          </ul>
        </>
      }
      fact={
        <>
          En la mayoría de las plataformas modernas también existen los
          <strong> pipettes</strong>, que representan una décima parte de un
          pip y permiten una mayor precisión en el precio.
        </>
      }
      points={[
        "El pip mide el movimiento del precio.",
        "Normalmente corresponde al cuarto decimal en Forex.",
        "Sirve para calcular ganancias y pérdidas.",
        "Todo trader debe aprender a pensar en pips antes que en dinero.",
      ]}
    />
  );
}