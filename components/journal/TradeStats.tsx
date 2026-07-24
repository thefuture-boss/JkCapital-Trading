import { Trade } from "@/types/trade";

interface TradeStatsProps {
  trades: Trade[];
}

export default function TradeStats({
  trades,
}: TradeStatsProps) {
  const totalTrades = trades.length;

  const wins = trades.filter(
    (trade) => trade.result === "WIN"
  ).length;

  const losses = trades.filter(
    (trade) => trade.result === "LOSS"
  ).length;

  const winRate =
    totalTrades > 0
      ? (wins / totalTrades) * 100
      : 0;

  const totalProfit = trades.reduce(
    (total, trade) => total + trade.pnl,
    0
  );

  const grossProfit = trades
    .filter((trade) => trade.pnl > 0)
    .reduce((total, trade) => total + trade.pnl, 0);

  const grossLoss = Math.abs(
    trades
      .filter((trade) => trade.pnl < 0)
      .reduce((total, trade) => total + trade.pnl, 0)
  );

  const profitFactor =
    grossLoss === 0
      ? grossProfit
      : grossProfit / grossLoss;

  const cards = [
    {
      title: "Operaciones",
      value: totalTrades,
      color: "text-yellow-400",
    },
    {
      title: "Win Rate",
      value: `${winRate.toFixed(1)}%`,
      color: "text-green-400",
    },
    {
      title: "Ganancia Total",
      value: `$${totalProfit.toFixed(2)}`,
      color:
        totalProfit >= 0
          ? "text-green-400"
          : "text-red-400",
    },
    {
      title: "Profit Factor",
      value: profitFactor.toFixed(2),
      color: "text-blue-400",
    },
  ];

  return (
    <div className="mb-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
        >
          <p className="text-sm text-zinc-500">
            {card.title}
          </p>

          <h2
            className={`mt-3 text-4xl font-bold ${card.color}`}
          >
            {card.value}
          </h2>
        </div>
      ))}

    </div>
  );
}