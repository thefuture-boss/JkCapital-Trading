import LessonTemplate from "@/components/article/LessonTemplate";

export default function SupportResistancePage() {
  return (
    <LessonTemplate
      category="Price Action"
      title="Soportes y Resistencias"
      description="Aprende qué son los soportes y las resistencias y por qué representan zonas importantes dentro del movimiento del precio."
      readingTime="10 min"
      updatedAt="2026"
      breadcrumb="Soportes y Resistencias"
      infoTitle="¿Qué son los soportes y las resistencias?"
      info={
        <>
          <p>
            Los <strong>soportes</strong> y las <strong>resistencias</strong> son
            zonas del gráfico donde históricamente el precio ha reaccionado con
            mayor frecuencia.
          </p>

          <p className="mt-4">
            Un <strong>soporte</strong> es una zona donde la presión compradora
            ha sido suficiente para detener o ralentizar una caída.
          </p>

          <p className="mt-4">
            Una <strong>resistencia</strong> es una zona donde la presión
            vendedora ha sido suficiente para detener o ralentizar un avance del
            precio.
          </p>

          <p className="mt-4">
            Es importante entender que no son líneas exactas, sino áreas donde
            suele existir una mayor interacción entre compradores y vendedores.
          </p>
        </>
      }
      exampleTitle="Ejemplo"
      example={
        <>
          <p>
            Si el precio llega varias veces a una misma zona y desde allí cambia
            de dirección, esa área puede considerarse un soporte o una
            resistencia, dependiendo del contexto.
          </p>

          <p className="mt-4">
            Estas zonas ayudan a comprender dónde el mercado ha mostrado interés
            anteriormente.
          </p>
        </>
      }
      advice={
        <>
          Piensa en soportes y resistencias como zonas de reacción, no como
          precios exactos. El mercado rara vez respeta un nivel con precisión
          absoluta.
        </>
      }
      mistakes={
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dibujar demasiados soportes y resistencias.</li>
            <li>Considerarlos como líneas exactas.</li>
            <li>Ignorar el contexto general del mercado.</li>
            <li>Creer que siempre provocarán un cambio de dirección.</li>
          </ul>
        </>
      }
      fact={
        <>
          Muchos participantes del mercado observan niveles similares, lo que
          convierte a los soportes y resistencias en zonas ampliamente
          seguidas dentro del análisis del precio.
        </>
      }
      points={[
        "Los soportes son zonas donde el precio ha encontrado interés comprador.",
        "Las resistencias son zonas donde ha encontrado interés vendedor.",
        "No son líneas exactas, sino áreas.",
        "Siempre deben analizarse junto con la estructura del mercado."
      ]}
    />
  );
}