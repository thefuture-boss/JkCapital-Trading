import ModulePage from "@/components/module/ModulePage";
import { tradingModules } from "@/components/data/tradingModules";

export default function PsychologyPage() {
  const module = tradingModules.find(
    (m) => m.slug === "psychology"
  );

  if (!module) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1>Módulo no encontrado</h1>
      </main>
    );
  }

  return <ModulePage module={module} />;
}