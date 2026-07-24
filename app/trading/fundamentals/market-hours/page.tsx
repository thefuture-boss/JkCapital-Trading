import LessonTemplate from "@/components/article/LessonTemplate";

export default function MarketHoursPage() {
  return (
    <LessonTemplate
      category="Fundamentos"
      title="Horarios del Mercado"
      description="Conoce las principales sesiones del mercado Forex y descubre cuándo existe mayor movimiento y liquidez."
      readingTime="8 min"
      updatedAt="2026"
      breadcrumb="Horarios del Mercado"
      infoTitle="¿Cuándo está abierto el mercado?"
      info={
        <>
          <p>
            El mercado Forex funciona las <strong>24 horas del día</strong>,
            desde el domingo por la tarde hasta el viernes por la tarde (hora
            de América), gracias a que los principales centros financieros del
            mundo abren en diferentes horarios.
          </p>

          <p className="mt-4">
            Las cuatro sesiones principales son:
          </p>

          <div className="mt-6 rounded-xl bg-zinc-800 p-5 space-y-3">
            <p><strong>🇦🇺 Sídney</strong> — Inicia la semana de trading.</p>
            <p><strong>🇯🇵 Tokio</strong> — Mayor actividad en pares asiáticos.</p>
            <p><strong>🇬🇧 Londres</strong> — La sesión con mayor volumen de operaciones.</p>
            <p><strong>🇺🇸 Nueva York</strong> — Gran liquidez y fuerte volatilidad.</p>
          </div>

          <p className="mt-6">
            Los momentos con mayor movimiento suelen producirse cuando dos
            sesiones importantes coinciden al mismo tiempo.
          </p>
        </>
      }
      exampleTitle="Ejemplo práctico"
      example={
        <>
          <p>
            Uno de los horarios favoritos de muchos traders es el cruce entre
            <strong> Londres y Nueva York</strong>.
          </p>

          <p className="mt-4">
            Durante ese periodo suele existir un mayor volumen de operaciones,
            spreads más bajos y movimientos de precio más claros.
          </p>

          <p className="mt-4">
            Por esta razón, muchos traders intradía prefieren operar durante
            ese horario.
          </p>
        </>
      }
      advice={
        <>
          No necesitas operar todo el día. Escoge una sesión que se adapte a tu
          horario y especialízate en ella. La consistencia suele ser más
          importante que pasar muchas horas frente al gráfico.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operar durante sesiones con poca liquidez.</li>
            <li>No conocer cuándo se publican noticias importantes.</li>
            <li>Permanecer todo el día frente al mercado buscando operaciones.</li>
            <li>Operar cuando estás cansado únicamente porque el mercado está abierto.</li>
          </ul>
        </>
      }
      fact={
        <>
          El mayor volumen de negociación del mercado Forex suele registrarse
          durante la superposición entre las sesiones de <strong>Londres</strong>
          {" "}y <strong>Nueva York</strong>.
        </>
      }
      points={[
        "Forex opera 24 horas al día de lunes a viernes.",
        "Existen cuatro sesiones principales: Sídney, Tokio, Londres y Nueva York.",
        "La sesión de Londres suele ser la más activa.",
        "Elegir un buen horario puede mejorar la calidad de tus operaciones.",
      ]}
    />
  );
}