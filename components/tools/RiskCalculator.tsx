"use client";

import { useMemo, useState } from "react";

export default function RiskCalculator() {
  const [balance, setBalance] = useState(10000);
  const [risk, setRisk] = useState(1);
  const [stopLoss, setStopLoss] = useState(20);
  const [pipValue, setPipValue] = useState(10);

  const riskAmount = useMemo(() => {
    return (balance * risk) / 100;
  }, [balance, risk]);

  const lotSize = useMemo(() => {
    if (stopLoss <= 0 || pipValue <= 0) return 0;

    return riskAmount / (stopLoss * pipValue);
  }, [riskAmount, stopLoss, pipValue]);

  return (
    <section className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8">

      <h1 className="text-4xl font-bold text-yellow-400">
        🛡 Calculadora de Gestión de Riesgo
      </h1>

      <p className="mt-3 max-w-3xl text-zinc-400">
        Calcula automáticamente cuánto dinero puedes arriesgar y cuál es el
        tamaño de lote recomendado antes de abrir una operación.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">

        {/* Panel izquierdo */}

        <div className="space-y-6">

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Balance de la cuenta ($)
            </label>

            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 focus:border-yellow-400 outline-none"
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
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 focus:border-yellow-400 outline-none"
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
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 focus:border-yellow-400 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Valor del Pip (USD)
            </label>

            <input
              type="number"
              step="0.01"
              value={pipValue}
              onChange={(e) => setPipValue(Number(e.target.value))}
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 focus:border-yellow-400 outline-none"
            />
          </div>

        </div>

        {/* Resultados */}

        <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8">

          <h2 className="text-2xl font-bold text-green-400">
            Resultado
          </h2>

          <div className="mt-8 space-y-6">

            <div className="rounded-2xl bg-zinc-900 p-6">

              <p className="text-zinc-400">
                Dinero que puedes arriesgar
              </p>

              <h3 className="mt-3 text-4xl font-bold text-green-400">
                ${riskAmount.toFixed(2)}
              </h3>

            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">

              <p className="text-zinc-400">
                Tamaño de lote recomendado
              </p>

              <h3 className="mt-3 text-4xl font-bold text-yellow-400">
                {lotSize.toFixed(2)}
              </h3>

            </div>

          </div>

          <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">

            <h3 className="font-semibold text-blue-400">
              💡 Consejo
            </h3>

            <p className="mt-2 text-sm leading-7 text-zinc-300">
              Nunca aumentes el tamaño del lote únicamente para intentar recuperar
              pérdidas. Mantén siempre el mismo porcentaje de riesgo por operación.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}