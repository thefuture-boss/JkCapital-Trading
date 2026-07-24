export interface Instrument {
  symbol: string;
  name: string;
  category: "Forex" | "Índice" | "Materia Prima";
  pipValue: number;
  decimals: number;
}

export const instruments: Instrument[] = [
  {
    symbol: "EURUSD",
    name: "Euro / Dólar",
    category: "Forex",
    pipValue: 10,
    decimals: 5,
  },

  {
    symbol: "GBPUSD",
    name: "Libra / Dólar",
    category: "Forex",
    pipValue: 10,
    decimals: 5,
  },

  {
    symbol: "AUDUSD",
    name: "Dólar Australiano / Dólar",
    category: "Forex",
    pipValue: 10,
    decimals: 5,
  },

  {
    symbol: "NZDUSD",
    name: "Dólar Neozelandés / Dólar",
    category: "Forex",
    pipValue: 10,
    decimals: 5,
  },

  {
    symbol: "USDJPY",
    name: "Dólar / Yen",
    category: "Forex",
    pipValue: 9.13,
    decimals: 3,
  },

  {
    symbol: "USDCAD",
    name: "Dólar / Dólar Canadiense",
    category: "Forex",
    pipValue: 10,
    decimals: 5,
  },

  {
    symbol: "USDCHF",
    name: "Dólar / Franco Suizo",
    category: "Forex",
    pipValue: 10,
    decimals: 5,
  },

  {
    symbol: "XAUUSD",
    name: "Oro",
    category: "Materia Prima",
    pipValue: 1,
    decimals: 2,
  },

  {
    symbol: "US30",
    name: "Dow Jones",
    category: "Índice",
    pipValue: 1,
    decimals: 1,
  },

  {
    symbol: "NAS100",
    name: "Nasdaq 100",
    category: "Índice",
    pipValue: 1,
    decimals: 1,
  },
];