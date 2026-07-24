import LessonTemplate from "@/components/article/LessonTemplate";

export default function WhatIsBrokerPage() {
  return (
    <LessonTemplate
      category="Fundamentos"
      title="¿Qué es un Broker?"
      description="Descubre qué es un broker, cuál es su función y por qué es indispensable para operar en los mercados financieros."
      readingTime="7 min"
      updatedAt="2026"
      breadcrumb="¿Qué es un Broker?"
      infoTitle="¿Qué hace un broker?"
      info={
        <>
          <p>
            Un broker es una empresa que actúa como intermediario entre el trader
            y los mercados financieros. Gracias a un broker puedes comprar y
            vender activos como divisas, acciones, índices, materias primas y
            criptomonedas.
          </p>

          <p className="mt-4">
            Sin un broker, un trader particular no tendría acceso directo a los
            mercados internacionales.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Imagina que quieres comprar acciones de una empresa.
          </p>

          <p className="mt-3">
            No puedes comprarlas directamente en la bolsa. En su lugar utilizas
            un broker, que envía tu orden de compra al mercado y ejecuta la
            operación por ti.
          </p>
        </>
      }
      advice={
        <>
          Antes de abrir una cuenta, verifica que el broker esté regulado por una
          autoridad financiera reconocida y revisa sus comisiones, spreads y
          métodos de retiro.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Elegir un broker únicamente porque ofrece mucho apalancamiento.</li>
            <li>No comprobar si está regulado.</li>
            <li>No revisar las comisiones antes de depositar dinero.</li>
            <li>Operar con brokers de dudosa reputación.</li>
          </ul>
        </>
      }
      fact={
        <>
          Existen cientos de brokers en el mundo, pero solo una parte está
          regulada por organismos financieros reconocidos, lo que ofrece mayor
          seguridad a los inversionistas.
        </>
      }
      points={[
        "El broker conecta al trader con el mercado.",
        "Es indispensable para comprar y vender activos.",
        "Debe ser regulado y confiable.",
        "Comparar comisiones y condiciones antes de elegir uno.",
      ]}
    />
  );
}