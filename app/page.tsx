import Container from "../components/layout/Container";
import Logo from "../components/ui/Logo";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Container>
        <section className="py-24 text-center">

          <div className="flex justify-center mb-8">
            <Logo />
          </div>

          <h1 className="text-6xl font-bold mb-6">
            Bienvenido a
            <span className="text-yellow-500"> JK Capital Trading</span>
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-10">
            Aprende Trading desde cero con una academia diseñada para formar
            traders disciplinados mediante contenido profesional, herramientas
            prácticas y estrategias basadas en la experiencia.
          </p>

          <Button href="/trading">
            Comenzar Academia
          </Button>

        </section>

        <section className="grid md:grid-cols-3 gap-8 pb-24">

          <Card>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              📘 Academia
            </h2>

            <p className="text-gray-400">
              Aprende desde los fundamentos hasta estrategias avanzadas de
              Price Action.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              📊 Herramientas
            </h2>

            <p className="text-gray-400">
              Calculadoras, recursos y utilidades para mejorar tu operativa.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              🧠 Psicología
            </h2>

            <p className="text-gray-400">
              Desarrolla disciplina, gestión emocional y control del riesgo.
            </p>
          </Card>

        </section>
      </Container>
    </main>
  );
}