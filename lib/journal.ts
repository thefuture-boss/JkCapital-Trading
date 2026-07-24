import { Trade } from "@/types/trade";

export const demoTrades: Trade[] = [

{
id:"1",

instrument:"EURUSD",

strategy:"Order Block",

type:"BUY",

entry:1.08500,

stopLoss:1.08300,

takeProfit:1.09100,

lotSize:0.50,

riskReward:3,

result:"WIN",

pnl:150,

emotion:"Confiado",

notes:"Excelente entrada",

createdAt:"2026-07-20"

},

{
id:"2",

instrument:"XAUUSD",

strategy:"Liquidity Sweep",

type:"SELL",

entry:3355,

stopLoss:3362,

takeProfit:3330,

lotSize:0.20,

riskReward:3,

result:"LOSS",

pnl:-50,

emotion:"Impaciente",

notes:"Entré demasiado temprano",

createdAt:"2026-07-18"

}

];