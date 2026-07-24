"use client";

import { useMemo, useState } from "react";

export default function RiskRewardCalculator() {
  const [entry, setEntry] = useState(1.1000);
  const [stopLoss, setStopLoss] = useState(1.0950);
  const [takeProfit, setTakeProfit] = useState(1.1100);
  const [type, setType] = useState<"BUY" | "SELL">("BUY");

  const result = useMemo(() => {
    let risk = 0;
    let reward = 0;

    if (type === "BUY") {
      risk = Math.abs(entry - stopLoss);
      reward = Math.abs(takeProfit - entry);
    } else {
      risk = Math.abs(stopLoss - entry);
      reward = Math.abs(entry - takeProfit);
    }

    const rr = risk > 0 ? reward / risk : 0;

    return {
      risk,
      reward,
      rr,
    };
  }, [entry, stopLoss, takeProfit, type]);

  const quality =
    result.rr >= 3
      ? "Excelente"
      : result.rr >= 2
      ? "Buena"
      : result.rr >= 1
      ? "Aceptable"
      : "Mala";

  const qualityColor =
    result.rr >= 3
      ? "text-green-400"
      : result.rr >= 2
      ? "text-yellow-400"
      : result.rr >= 1
      ? "text-orange-400"
      : "text-red-400";

  return (
    <section className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8">

      <h1 className="text-4xl font-bold text-yellow-400">
        📊 Calculadora Risk / Reward
      </h1>

      <p className="mt-3 text-zinc-400">
        Descubre si una operación tiene una buena relación riesgo-beneficio.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">

        <div className="space-y-6">

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Tipo de operación
            </label>

            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value as "BUY" | "SELL")
              }
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3"
            >
              <option value="BUY">BUY</option>
              <option value="SELL">SELL</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Precio de Entrada
            </label>

            <input
              type="number"
              step="0.00001"
              value={entry}
              onChange={(e) => setEntry(Number(e.target.value))}
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Stop Loss
            </label>

            <input
              type="number"
              step="0.00001"
              value={stopLoss}
              onChange={(e) => setStopLoss(Number(e.target.value))}
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Take Profit
            </label>

            <input
              type="number"
              step="0.00001"
              value={takeProfit}
              onChange={(e) => setTakeProfit(Number(e.target.value))}
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3"
            />
          </div>

        </div>

        <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8">

          <h2 className="text-2xl font-bold text-green-400">
            Resultado
          </h2>

          <div className="mt-8 space-y-5">

            <div className="rounded-2xl bg-zinc-900 p-6">

              <p className="text-zinc-400">
                Riesgo
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                {result.risk.toFixed(5)}
              </h3>

            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">

              <p className="text-zinc-400">
                Beneficio
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                {result.reward.toFixed(5)}
              </h3>

            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">

              <p className="text-zinc-400">
                Relación Riesgo / Beneficio
              </p>

              <h3 className="mt-2 text-5xl font-bold text-yellow-400">
                1 : {result.rr.toFixed(2)}
              </h3>

            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">

              <p className="text-zinc-400">
                Calidad de la operación
              </p>

              <h3 className={`mt-2 text-3xl font-bold ${qualityColor}`}>
                {quality}
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}