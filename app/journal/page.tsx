import TradeForm from "@/components/journal/TradeForm";

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-5xl px-6 py-12">

        <h1 className="mb-10 text-5xl font-bold text-yellow-400">
          Trading Journal
        </h1>

        <TradeForm />

      </div>

    </main>
  );
}