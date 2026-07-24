import LessonTemplate from "@/components/article/LessonTemplate";

export default function DowntrendPage() {
  return (
    <LessonTemplate
      category="Price Action"
      title="Tendencia Bajista"
      description="Aprende cómo identificar una tendencia bajista analizando la estructura del precio."
      readingTime="8 min"
      updatedAt="2026"
      breadcrumb="Tendencia Bajista"
      infoTitle="¿Qué es una tendencia bajista?"
      info={
        <>
          <p>
            Una <strong>tendencia bajista</strong> ocurre cuando el precio forma
            una secuencia de <strong>máximos cada vez más bajos</strong> y
            <strong> mínimos cada vez más bajos</strong>.
          </p>

          <p className="mt-4">
            Esto refleja que los vendedores tienen mayor control del mercado y
            que la presión de venta supera a la de compra.
          </p>

          <p className="mt-4">
            Al igual que en una tendencia alcista, el precio no baja en línea
            recta. Los retrocesos son completamente normales y forman parte de
            la estructura.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            El precio marca un mínimo, rebota ligeramente sin superar el máximo
            anterior y luego vuelve a caer formando un nuevo mínimo más bajo.
          </p>

          <p className="mt-4">
            Mientras esta secuencia continúe, el mercado mantiene una estructura
            bajista.
          </p>
        </>
      }
      advice={
        <>
          Analiza siempre la secuencia completa de máximos y mínimos antes de
          concluir que el mercado está bajando. Un solo movimiento fuerte no
          define una tendencia.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pensar que cualquier caída representa una tendencia bajista.</li>
            <li>Ignorar los retrocesos temporales.</li>
            <li>Analizar únicamente las últimas velas.</li>
            <li>No observar el contexto general del gráfico.</li>
          </ul>
        </>
      }
      fact={
        <>
          Una tendencia bajista puede terminar cuando la estructura deja de
          formar máximos y mínimos descendentes, indicando un posible cambio en
          el comportamiento del mercado.
        </>
      }
      points={[
        "Presenta máximos descendentes.",
        "Presenta mínimos descendentes.",
        "Los retrocesos son normales.",
        "La estructura completa determina la tendencia."
      ]}
    />
  );
}