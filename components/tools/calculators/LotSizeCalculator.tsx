"use client";

import { useMemo, useState } from "react";
import { instruments } from "@/lib/instruments";

export default function LotSizeCalculator() {
  const [balance, setBalance] = useState(10000);
  const [risk, setRisk] = useState(1);
  const [stopLoss, setStopLoss] = useState(20);

  const [symbol, setSymbol] = useState("EURUSD");

  const instrument = instruments.find(
    (item) => item.symbol === symbol
  );

  const riskAmount = useMemo(() => {
    return (balance * risk) / 100;
  }, [balance, risk]);

  const lotSize = useMemo(() => {
    if (!instrument) return 0;
    if (stopLoss <= 0) return 0;

    return riskAmount / (stopLoss * instrument.pipValue);
  }, [riskAmount, stopLoss, instrument]);

  return (
    <section className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8">

      <h1 className="text-4xl font-bold text-yellow-400">
        📦 Calculadora de Lotaje
      </h1>

      <p className="mt-3 text-zinc-400">
        Calcula automáticamente el tamaño de lote recomendado según tu gestión
        del riesgo.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">

        {/* Inputs */}

        <div className="space-y-6">

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Instrumento
            </label>

            <select
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-yellow-400"
            >
              {instruments.map((item) => (
                <option
                  key={item.symbol}
                  value={item.symbol}
                >
                  {item.symbol} — {item.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Balance ($)
            </label>

            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Riesgo (%)
            </label>

            <input
              type="number"
              step="0.1"
              value={risk}
              onChange={(e) => setRisk(Number(e.target.value))}
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Stop Loss (Pips)
            </label>

            <input
              type="number"
              value={stopLoss}
              onChange={(e) => setStopLoss(Number(e.target.value))}
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-yellow-400"
            />
          </div>

        </div>

        {/* Resultados */}

        <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8">

          <h2 className="text-2xl font-bold text-green-400">
            Resultado
          </h2>

          <div className="mt-8 space-y-5">

            <div className="rounded-2xl bg-zinc-900 p-6">

              <p className="text-zinc-400">
                Riesgo máximo
              </p>

              <h3 className="mt-2 text-4xl font-bold text-green-400">
                ${riskAmount.toFixed(2)}
              </h3>

            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">

              <p className="text-zinc-400">
                Lote recomendado
              </p>

              <h3 className="mt-2 text-5xl font-bold text-yellow-400">
                {lotSize.toFixed(2)}
              </h3>

            </div>

          </div>

          <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">

            <h3 className="font-semibold text-blue-400">
              Instrumento seleccionado
            </h3>

            <div className="mt-4 space-y-2">

              <div className="flex justify-between">
                <span>Nombre</span>
                <span>{instrument?.name}</span>
              </div>

              <div className="flex justify-between">
                <span>Categoría</span>
                <span>{instrument?.category}</span>
              </div>

              <div className="flex justify-between">
                <span>Valor Pip</span>
                <span>${instrument?.pipValue}</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}