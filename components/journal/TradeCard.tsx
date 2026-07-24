import { Trade } from "@/types/trade";

interface TradeCardProps {
  trade: Trade;
}

export default function TradeCard({
  trade,
}: TradeCardProps) {
  const resultColor =
    trade.result === "WIN"
      ? "text-green-400"
      : trade.result === "LOSS"
      ? "text-red-400"
      : "text-yellow-400";

  const pnlColor =
    trade.pnl > 0
      ? "text-green-400"
      : trade.pnl < 0
      ? "text-red-400"
      : "text-yellow-400";

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-yellow-400">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            {trade.instrument}
          </h2>

          <p className="mt-1 text-zinc-400">
            {trade.strategy}
          </p>
        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-bold ${
            trade.type === "BUY"
              ? "bg-green-500/10 text-green-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          {trade.type}
        </span>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">

        <div>
          <p className="text-sm text-zinc-500">
            Resultado
          </p>

          <p className={`mt-1 text-xl font-bold ${resultColor}`}>
            {trade.result}
          </p>
        </div>

        <div>
          <p className="text-sm text-zinc-500">
            PnL
          </p>

          <p className={`mt-1 text-xl font-bold ${pnlColor}`}>
            ${trade.pnl}
          </p>
        </div>

        <div>
          <p className="text-sm text-zinc-500">
            RR
          </p>

          <p className="mt-1 font-semibold">
            1 : {trade.riskReward}
          </p>
        </div>

        <div>
          <p className="text-sm text-zinc-500">
            Lote
          </p>

          <p className="mt-1 font-semibold">
            {trade.lotSize}
          </p>
        </div>

      </div>

      <div className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-6">

        <div>
          <p className="text-sm text-zinc-500">
            Emoción
          </p>

          <p className="font-medium">
            {trade.emotion}
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-zinc-500">
            Fecha
          </p>

          <p className="font-medium">
            {trade.createdAt}
          </p>
        </div>

      </div>

    </div>
  );
}