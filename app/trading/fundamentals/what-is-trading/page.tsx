import LessonTemplate from "@/components/article/LessonTemplate";

export default function WhatIsTradingPage() {
  return (
    <LessonTemplate
      category="Fundamentos"
      title="¿Qué es el Trading?"
      description="Conoce qué es el trading, cómo funciona y por qué millones de personas participan diariamente en los mercados financieros."
      readingTime="8 min"
      updatedAt="2026"
      breadcrumb="¿Qué es el Trading?"
      infoTitle="¿Qué significa hacer Trading?"
      info={
        <>
          <p>
            El trading consiste en comprar y vender activos financieros con el
            objetivo de obtener beneficios aprovechando las variaciones del
            precio.
          </p>

          <p className="mt-4">
            Estos activos pueden ser divisas, acciones, índices, materias
            primas o criptomonedas.
          </p>

          <p className="mt-4">
            El trader analiza el mercado para intentar comprar barato y vender
            más caro, o vender primero y recomprar más barato dependiendo del
            mercado.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Compras una acción a <strong>$100</strong>.
          </p>

          <p className="mt-3">
            Horas después su precio aumenta hasta{" "}
            <strong>$110</strong>.
          </p>

          <p className="mt-3">
            Si decides venderla en ese momento, obtienes una ganancia de
            <strong> $10</strong> por acción (sin contar comisiones).
          </p>
        </>
      }
      advice={
        <>
          Nunca veas el trading como una forma de hacer dinero rápido.
          Considéralo una profesión que requiere estudio, práctica,
          disciplina y una correcta gestión del riesgo.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pensar que siempre se gana dinero.</li>
            <li>Operar sin conocimientos básicos.</li>
            <li>Invertir dinero que necesitas para vivir.</li>
            <li>Entrar al mercado únicamente por emociones.</li>
          </ul>
        </>
      }
      fact={
        <>
          El mercado Forex mueve más de <strong>7 billones de dólares</strong>
          diariamente, convirtiéndose en el mercado financiero más grande del
          mundo.
        </>
      }
      points={[
        "El trading consiste en comprar y vender activos financieros.",
        "Existen diferentes mercados para operar.",
        "La educación es la mejor inversión antes de comenzar.",
        "La disciplina es más importante que buscar ganancias rápidas.",
      ]}
    />
  );
}