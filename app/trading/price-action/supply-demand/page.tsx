import LessonTemplate from "@/components/article/LessonTemplate";

export default function SupplyDemandPage() {
  return (
    <LessonTemplate
      category="Price Action"
      title="Oferta y Demanda"
      description="Comprende qué representan las zonas de oferta y demanda y por qué son importantes para interpretar el comportamiento del mercado."
      readingTime="10 min"
      updatedAt="2026"
      breadcrumb="Oferta y Demanda"
      infoTitle="¿Qué son las zonas de oferta y demanda?"
      info={
        <>
          <p>
            Las zonas de <strong>oferta</strong> y <strong>demanda</strong> son
            áreas donde históricamente el mercado ha mostrado un fuerte
            desequilibrio entre compradores y vendedores.
          </p>

          <p className="mt-4">
            Una <strong>zona de demanda</strong> representa un área donde la
            presión compradora fue suficientemente fuerte como para impulsar el
            precio al alza.
          </p>

          <p className="mt-4">
            Una <strong>zona de oferta</strong> representa un área donde la
            presión vendedora fue dominante y provocó un movimiento bajista.
          </p>

          <p className="mt-4">
            Estas zonas ayudan a comprender dónde el mercado mostró interés en el
            pasado, aunque no garantizan que el mismo comportamiento vuelva a
            repetirse.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Imagina que el precio permanece estable durante un corto tiempo y,
            posteriormente, realiza un movimiento fuerte hacia arriba.
          </p>

          <p className="mt-4">
            Algunos analistas consideran esa área como una posible zona de
            demanda debido a la fuerte participación compradora que se observó en
            ese momento.
          </p>
        </>
      }
      advice={
        <>
          Observa siempre las zonas de oferta y demanda dentro del contexto
          general del mercado. No deben analizarse de forma aislada.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Confundirlas con niveles exactos.</li>
            <li>Dibujar demasiadas zonas en el gráfico.</li>
            <li>Creer que siempre producirán una reacción.</li>
            <li>Ignorar la estructura general del mercado.</li>
          </ul>
        </>
      }
      fact={
        <>
          Las zonas de oferta y demanda suelen analizarse como áreas, ya que el
          mercado rara vez reacciona exactamente en un único precio.
        </>
      }
      points={[
        "Representan zonas de desequilibrio entre compradores y vendedores.",
        "No son líneas exactas.",
        "Deben analizarse junto con la estructura del mercado.",
        "Ayudan a comprender movimientos anteriores del precio."
      ]}
    />
  );
}