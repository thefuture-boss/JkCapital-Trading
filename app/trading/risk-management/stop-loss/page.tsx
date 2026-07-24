import LessonTemplate from "@/components/article/LessonTemplate";

export default function StopLossPage() {
  return (
    <LessonTemplate
      category="Gestión del Riesgo"
      title="Stop Loss"
      description="Comprende qué es un Stop Loss y por qué se considera una de las herramientas más importantes para la protección del capital."
      readingTime="9 min"
      updatedAt="2026"
      breadcrumb="Stop Loss"
      infoTitle="¿Qué es un Stop Loss?"
      info={
        <>
          <p>
            Un <strong>Stop Loss</strong> es una instrucción utilizada para
            limitar la pérdida potencial de una operación cuando el mercado se
            mueve en una dirección desfavorable.
          </p>

          <p className="mt-4">
            Su principal objetivo es proteger el capital del trader evitando que
            una única operación genere una pérdida mayor de la que estaba
            dispuesto a aceptar.
          </p>

          <p className="mt-4">
            Aunque no elimina el riesgo, ayuda a establecer límites antes de que
            la operación sea ejecutada.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Un trader abre una operación después de realizar su análisis.
          </p>

          <p className="mt-4">
            Antes de hacerlo, define el nivel máximo de pérdida que está
            dispuesto a asumir. Si el mercado alcanza ese punto, la operación se
            cierra automáticamente según las condiciones establecidas.
          </p>

          <p className="mt-4">
            De esta forma, la decisión de proteger el capital ya había sido
            tomada antes de que aparezcan las emociones.
          </p>
        </>
      }
      advice={
        <>
          Considera el Stop Loss como una herramienta de protección, no como un
          obstáculo. Su propósito es ayudarte a controlar el riesgo desde el
          inicio de la operación.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>No utilizar ningún límite de pérdida.</li>
            <li>Cambiar constantemente el nivel de protección por impulso.</li>
            <li>Pensar que usar un Stop Loss garantiza una operación ganadora.</li>
            <li>Tomar decisiones emocionales una vez abierta la operación.</li>
          </ul>
        </>
      }
      fact={
        <>
          El Stop Loss es una herramienta ampliamente utilizada en distintos
          mercados financieros como parte de una correcta gestión del riesgo.
        </>
      }
      points={[
        "Ayuda a limitar pérdidas potenciales.",
        "Protege el capital del trader.",
        "No elimina el riesgo, pero ayuda a controlarlo.",
        "Debe formar parte de la planificación antes de operar."
      ]}
    />
  );
}