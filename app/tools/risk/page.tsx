import RiskCalculator from "@/components/tools/RiskCalculator";

export default function RiskPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <RiskCalculator />
      </div>
    </main>
  );
}