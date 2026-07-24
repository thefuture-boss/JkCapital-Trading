import LessonTemplate from "@/components/article/LessonTemplate";

export default function SpreadPage() {
  return (
    <LessonTemplate
      category="Fundamentos"
      title="¿Qué es el Spread?"
      description="Comprende qué es el spread, por qué existe y cómo influye en el costo de cada operación."
      readingTime="6 min"
      updatedAt="2026"
      breadcrumb="Spread"
      infoTitle="¿Qué es el Spread?"
      info={
        <>
          <p>
            El <strong>spread</strong> es la diferencia entre el precio
            <strong> Bid</strong> (compra del mercado) y el precio
            <strong> Ask</strong> (venta del mercado).
          </p>

          <p className="mt-4">
            Esta diferencia representa uno de los principales costos de operar y
            es la forma en que muchos brokers obtienen parte de sus ingresos.
          </p>

          <p className="mt-4">
            Cuanto menor sea el spread, menor será el costo inicial de la
            operación.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <div className="rounded-xl bg-zinc-800 p-5">
            <p>Bid: <strong>1.2050</strong></p>
            <p>Ask: <strong>1.2052</strong></p>
          </div>

          <p className="mt-4">
            La diferencia es de <strong>2 pips</strong>, por lo que el spread es
            de 2 pips.
          </p>

          <p className="mt-3">
            Cuando abras una operación comenzarás con una pequeña pérdida
            equivalente al spread.
          </p>
        </>
      }
      advice={
        <>
          Compara siempre el spread entre diferentes brokers. Un spread más bajo
          puede reducir significativamente tus costos si realizas muchas
          operaciones.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>No considerar el spread antes de abrir una operación.</li>
            <li>Operar durante noticias cuando el spread suele ampliarse.</li>
            <li>Pensar que el spread es una comisión adicional.</li>
            <li>Elegir un broker sin comparar sus costos.</li>
          </ul>
        </>
      }
      fact={
        <>
          Durante eventos económicos importantes, algunos brokers pueden aumentar
          temporalmente el spread debido a la alta volatilidad del mercado.
        </>
      }
      points={[
        "El spread es la diferencia entre Bid y Ask.",
        "Representa un costo de operación.",
        "Mientras menor sea el spread, menor será el costo inicial.",
        "Puede aumentar en momentos de alta volatilidad.",
      ]}
    />
  );
}