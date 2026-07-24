import LessonTemplate from "@/components/article/LessonTemplate";

export default function LiquidityPage() {
  return (
    <LessonTemplate
      category="Price Action"
      title="Liquidez del Mercado"
      description="Comprende qué es la liquidez y por qué desempeña un papel fundamental en el movimiento del precio."
      readingTime="9 min"
      updatedAt="2026"
      breadcrumb="Liquidez"
      infoTitle="¿Qué es la liquidez?"
      info={
        <>
          <p>
            La <strong>liquidez</strong> representa la facilidad con la que un
            activo puede comprarse o venderse sin generar cambios bruscos en su
            precio.
          </p>

          <p className="mt-4">
            En mercados con mucha liquidez existen numerosos compradores y
            vendedores participando al mismo tiempo, lo que facilita la ejecución
            de operaciones.
          </p>

          <p className="mt-4">
            Cuando la liquidez es baja, los movimientos del precio pueden ser más
            rápidos e impredecibles debido a la menor cantidad de participantes.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            El par <strong>EUR/USD</strong> suele ser uno de los instrumentos con
            mayor liquidez del mercado Forex debido al gran volumen de
            operaciones diarias.
          </p>

          <p className="mt-4">
            En cambio, algunos pares menos negociados pueden presentar una menor
            liquidez y movimientos de precio más irregulares.
          </p>
        </>
      }
      advice={
        <>
          Comprender la liquidez ayuda a interpretar mejor el comportamiento del
          mercado y a entender por qué algunos horarios presentan movimientos más
          activos que otros.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Creer que un mercado con mucha liquidez siempre es más fácil de operar.</li>
            <li>Confundir liquidez con volatilidad.</li>
            <li>Ignorar el horario en el que se está operando.</li>
            <li>Pensar que todos los activos tienen el mismo nivel de liquidez.</li>
          </ul>
        </>
      }
      fact={
        <>
          Los mayores niveles de liquidez en Forex suelen producirse cuando las
          sesiones de <strong>Londres</strong> y <strong>Nueva York</strong>
          coinciden, ya que participan millones de operaciones durante ese
          periodo.
        </>
      }
      points={[
        "La liquidez facilita la compra y venta de un activo.",
        "Mayor liquidez suele significar mayor participación del mercado.",
        "No todos los activos tienen el mismo nivel de liquidez.",
        "El horario influye directamente en la liquidez disponible."
      ]}
    />
  );
}