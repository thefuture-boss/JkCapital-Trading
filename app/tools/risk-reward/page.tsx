import RiskRewardCalculator from "@/components/tools/calculators/RiskRewardCalculator";

export default function RiskRewardPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <RiskRewardCalculator />
      </div>
    </main>
  );
}