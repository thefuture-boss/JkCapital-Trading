export type TradeType = "BUY" | "SELL";

export type TradeResult =
  | "WIN"
  | "LOSS"
  | "BREAKEVEN";

export interface Trade {

  id: string;

  instrument: string;

  strategy: string;

  type: TradeType;

  entry: number;

  stopLoss: number;

  takeProfit: number;

  lotSize: number;

  riskReward: number;

  result: TradeResult;

  pnl: number;

  emotion: string;

  notes: string;

  image?: string;

  createdAt: string;

}