import LessonTemplate from "@/components/article/LessonTemplate";

export default function OrderTypesPage() {
  return (
    <LessonTemplate
      category="Fundamentos"
      title="Tipos de Órdenes"
      description="Conoce las órdenes más utilizadas en trading y cuándo se emplea cada una."
      readingTime="9 min"
      updatedAt="2026"
      breadcrumb="Tipos de Órdenes"
      infoTitle="¿Qué son las órdenes?"
      info={
        <>
          <p>
            Una orden es la instrucción que envías al broker para abrir, cerrar
            o gestionar una operación en el mercado.
          </p>

          <p className="mt-4">
            Las plataformas de trading permiten diferentes tipos de órdenes
            según el momento en que deseas entrar o salir del mercado.
          </p>

          <div className="mt-6 rounded-xl bg-zinc-800 p-5 space-y-3">
            <p><strong>Market Order:</strong> Ejecuta la operación inmediatamente al mejor precio disponible.</p>

            <p><strong>Buy Limit:</strong> Compra a un precio inferior al actual.</p>

            <p><strong>Sell Limit:</strong> Venta a un precio superior al actual.</p>

            <p><strong>Buy Stop:</strong> Compra cuando el precio supera un nivel determinado.</p>

            <p><strong>Sell Stop:</strong> Venta cuando el precio cae por debajo de un nivel determinado.</p>
          </div>
        </>
      }
      exampleTitle="Ejemplo práctico"
      example={
        <>
          <p>
            El precio del EUR/USD es de <strong>1.1000</strong>.
          </p>

          <p className="mt-3">
            Si piensas que primero bajará hasta <strong>1.0980</strong> para
            luego subir, podrías colocar una <strong>Buy Limit</strong>.
          </p>

          <p className="mt-3">
            Si crees que romperá la resistencia en <strong>1.1020</strong> y
            continuará subiendo, podrías utilizar una
            <strong> Buy Stop</strong>.
          </p>
        </>
      }
      advice={
        <>
          Aprende cuándo utilizar cada tipo de orden. Elegir la orden correcta
          puede ayudarte a ejecutar tu estrategia con mayor precisión y evitar
          entradas impulsivas.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Confundir una Buy Stop con una Buy Limit.</li>
            <li>Abrir todas las operaciones con Market Order.</li>
            <li>No revisar el precio al que quedará colocada una orden pendiente.</li>
            <li>Olvidar cancelar órdenes pendientes que ya no forman parte del plan.</li>
          </ul>
        </>
      }
      fact={
        <>
          Los traders profesionales utilizan con frecuencia órdenes pendientes
          porque les permiten planificar operaciones sin necesidad de estar
          observando el gráfico todo el tiempo.
        </>
      }
      points={[
        "Las órdenes permiten ejecutar operaciones de distintas maneras.",
        "Market Order abre la operación inmediatamente.",
        "Las órdenes Limit buscan mejores precios.",
        "Las órdenes Stop buscan aprovechar rupturas del mercado."
      ]}
    />
  );
}