import LessonTemplate from "@/components/article/LessonTemplate";

export default function BidAskPage() {
  return (
    <LessonTemplate
      category="Fundamentos"
      title="Bid y Ask"
      description="Aprende qué significan los precios Bid y Ask y cómo afectan cada operación que realizas."
      readingTime="6 min"
      updatedAt="2026"
      breadcrumb="Bid y Ask"
      infoTitle="¿Qué son el Bid y el Ask?"
      info={
        <>
          <p>
            Cada activo financiero muestra dos precios diferentes:
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>
              <strong>Bid:</strong> es el precio al que el mercado está dispuesto
              a comprar.
            </li>

            <li>
              <strong>Ask:</strong> es el precio al que el mercado está dispuesto
              a vender.
            </li>
          </ul>

          <p className="mt-4">
            La diferencia entre ambos precios se conoce como <strong>Spread</strong>,
            tema que veremos en la siguiente lección.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            EUR/USD muestra:
          </p>

          <div className="mt-4 rounded-xl bg-zinc-800 p-4">
            <p>Bid: <strong>1.1050</strong></p>
            <p>Ask: <strong>1.1052</strong></p>
          </div>

          <p className="mt-4">
            Si compras, entrarás al precio Ask.
            Si vendes, entrarás al precio Bid.
          </p>
        </>
      }
      advice={
        <>
          Antes de abrir una operación, observa siempre ambos precios.
          Muchos principiantes solo miran el precio del gráfico y olvidan
          que realmente entran al precio Ask o Bid según el tipo de operación.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>No entender por qué una operación empieza con una pequeña pérdida.</li>
            <li>Ignorar la diferencia entre Bid y Ask.</li>
            <li>Pensar que el gráfico muestra exactamente el precio de entrada.</li>
            <li>No considerar el spread antes de operar.</li>
          </ul>
        </>
      }
      fact={
        <>
          En la mayoría de plataformas, el gráfico muestra únicamente el precio
          <strong> Bid</strong>, mientras que las compras se ejecutan al precio
          <strong> Ask</strong>.
        </>
      }
      points={[
        "Todo activo tiene un precio Bid y un precio Ask.",
        "Las compras utilizan el precio Ask.",
        "Las ventas utilizan el precio Bid.",
        "La diferencia entre ambos precios es el Spread.",
      ]}
    />
  );
}