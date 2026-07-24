"use client";

import { useState } from "react";

export default function TradeForm() {
  const [instrument, setInstrument] = useState("EURUSD");
  const [strategy, setStrategy] = useState("");

  const [type, setType] = useState<"BUY" | "SELL">("BUY");

  const [entry, setEntry] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [takeProfit, setTakeProfit] = useState("");
  const [lotSize, setLotSize] = useState("");

  const [result, setResult] = useState("WIN");
  const [pnl, setPnl] = useState("");

  const [emotion, setEmotion] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log({
      instrument,
      strategy,
      type,
      entry,
      stopLoss,
      takeProfit,
      lotSize,
      result,
      pnl,
      emotion,
      notes,
    });

    alert("Operación guardada (temporal)");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10"
    >
      {/* INFORMACIÓN */}

      <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="mb-6 text-2xl font-bold text-yellow-400">
          Información General
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm text-zinc-400">
              Instrumento
            </label>

            <input
              value={instrument}
              onChange={(e) => setInstrument(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-zinc-400">
              Estrategia
            </label>

            <input
              value={strategy}
              onChange={(e) => setStrategy(e.target.value)}
              placeholder="Order Block..."
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-zinc-400">
              Tipo
            </label>

            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value as "BUY" | "SELL")
              }
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3"
            >
              <option>BUY</option>
              <option>SELL</option>
            </select>

          </div>

        </div>

      </section>

      {/* OPERACIÓN */}

      <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="mb-6 text-2xl font-bold text-yellow-400">
          Datos de la Operación
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <input
            placeholder="Entrada"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
          />

          <input
            placeholder="Stop Loss"
            value={stopLoss}
            onChange={(e) => setStopLoss(e.target.value)}
            className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
          />

          <input
            placeholder="Take Profit"
            value={takeProfit}
            onChange={(e) => setTakeProfit(e.target.value)}
            className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
          />

          <input
            placeholder="Lote"
            value={lotSize}
            onChange={(e) => setLotSize(e.target.value)}
            className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
          />

        </div>

      </section>

      {/* RESULTADO */}

      <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="mb-6 text-2xl font-bold text-yellow-400">
          Resultado
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <select
            value={result}
            onChange={(e) => setResult(e.target.value)}
            className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
          >
            <option>WIN</option>
            <option>LOSS</option>
            <option>BREAKEVEN</option>
          </select>

          <input
            placeholder="PnL"
            value={pnl}
            onChange={(e) => setPnl(e.target.value)}
            className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
          />

        </div>

      </section>

      {/* PSICOLOGÍA */}

      <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="mb-6 text-2xl font-bold text-yellow-400">
          Psicología
        </h2>

        <div className="space-y-6">

          <input
            placeholder="Estado emocional"
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3"
          />

          <textarea
            rows={5}
            placeholder="Comentarios..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3"
          />

        </div>

      </section>

      <button
        type="submit"
        className="w-full rounded-2xl bg-yellow-400 py-4 text-xl font-bold text-black transition hover:bg-yellow-300"
      >
        Guardar Operación
      </button>

    </form>
  );
}