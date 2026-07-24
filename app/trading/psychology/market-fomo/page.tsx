import LessonTemplate from "@/components/article/LessonTemplate";

export default function MarketFOMOPage() {
  return (
    <LessonTemplate
      category="Psicología"
      title="FOMO (Fear Of Missing Out)"
      description="Aprende a identificar el FOMO y evita entrar al mercado únicamente por miedo a perder una oportunidad."
      readingTime="7 min"
      updatedAt="2026"
      breadcrumb="FOMO"
      infoTitle="¿Qué es el FOMO?"
      info={
        <>
          <p>
            <strong>FOMO</strong> significa <em>Fear Of Missing Out</em>, o miedo
            a quedarse fuera de un movimiento del mercado.
          </p>

          <p className="mt-4">
            Es una de las emociones más comunes en los traders principiantes.
            Aparece cuando el precio ya ha recorrido gran parte del movimiento y
            sentimos la necesidad de entrar rápidamente para no "perder dinero".
          </p>

          <p className="mt-4">
            La mayoría de las veces, entrar por FOMO significa comprar cuando
            todos ya compraron o vender cuando todos ya vendieron.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            EURUSD rompe una resistencia y sube con mucha fuerza.
          </p>

          <p className="mt-4">
            Aunque tu estrategia nunca dio entrada, decides comprar porque ves
            muchas velas alcistas y piensas que seguirá subiendo.
          </p>

          <p className="mt-4">
            Minutos después ocurre un retroceso fuerte y tu operación termina en
            pérdida.
          </p>
        </>
      }
      advice={
        <>
          Si una oportunidad ya pasó, déjala ir. El mercado abrirá miles de
          oportunidades más.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Entrar tarde por desesperación.</li>
            <li>Perseguir el precio.</li>
            <li>No esperar confirmaciones.</li>
            <li>Operar porque otros están operando.</li>
          </ul>
        </>
      }
      fact={
        <>
          Los mejores traders no sienten la necesidad de participar en todos los
          movimientos del mercado. Prefieren esperar la siguiente oportunidad.
        </>
      }
      points={[
        "No todas las oportunidades son para ti.",
        "Nunca persigas el precio.",
        "Es mejor perder una entrada que perder dinero.",
        "El mercado siempre ofrecerá nuevas oportunidades.",
      ]}
    />
  );
}