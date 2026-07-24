import LessonTemplate from "@/components/article/LessonTemplate";

export default function LeveragePage() {
  return (
    <LessonTemplate
      category="Fundamentos"
      title="¿Qué es el Apalancamiento?"
      description="Descubre cómo funciona el apalancamiento, sus ventajas y los riesgos que implica al operar."
      readingTime="8 min"
      updatedAt="2026"
      breadcrumb="Apalancamiento"
      infoTitle="¿Qué es el apalancamiento?"
      info={
        <>
          <p>
            El <strong>apalancamiento</strong> es una herramienta que ofrece el
            broker para que puedas controlar una posición mayor utilizando una
            cantidad menor de tu propio capital.
          </p>

          <p className="mt-4">
            Se expresa normalmente como una relación, por ejemplo:
            <strong> 1:10</strong>, <strong>1:50</strong>,
            <strong> 1:100</strong> o <strong>1:500</strong>.
          </p>

          <p className="mt-4">
            Un apalancamiento de <strong>1:100</strong> significa que por cada
            dólar de tu cuenta puedes controlar hasta 100 dólares en el mercado.
          </p>
        </>
      }
      exampleTitle="Ejemplo práctico"
      example={
        <>
          <p>
            Supongamos que tienes <strong>$100</strong> en tu cuenta.
          </p>

          <p className="mt-3">
            Con un apalancamiento de <strong>1:100</strong> podrías controlar una
            posición de hasta <strong>$10 000</strong>.
          </p>

          <p className="mt-3">
            Esto aumenta tanto el potencial de ganancias como el de pérdidas, por
            lo que debe utilizarse con mucha responsabilidad.
          </p>
        </>
      }
      advice={
        <>
          El apalancamiento no debe verse como una forma de ganar más dinero,
          sino como una herramienta que debe ir siempre acompañada de una buena
          gestión del riesgo y un tamaño de lote adecuado.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Usar el máximo apalancamiento disponible sin experiencia.</li>
            <li>Creer que un mayor apalancamiento garantiza mayores ganancias.</li>
            <li>No colocar Stop Loss por confiar demasiado en el apalancamiento.</li>
            <li>Arriesgar un porcentaje excesivo de la cuenta en una sola operación.</li>
          </ul>
        </>
      }
      fact={
        <>
          Muchos brokers permiten elegir el nivel de apalancamiento al abrir una
          cuenta. Un apalancamiento menor suele ayudar a controlar mejor el riesgo,
          especialmente para quienes están comenzando.
        </>
      }
      points={[
        "El apalancamiento permite controlar posiciones mayores con menos capital.",
        "Aumenta tanto las ganancias como las pérdidas potenciales.",
        "Debe utilizarse junto con una buena gestión del riesgo.",
        "Más apalancamiento no significa necesariamente mejores resultados.",
      ]}
    />
  );
}