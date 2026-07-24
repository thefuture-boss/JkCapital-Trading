import LotSizeCalculator from "@/components/tools/calculators/LotSizeCalculator";

export default function LotSizePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <LotSizeCalculator />
      </div>
    </main>
  );
}