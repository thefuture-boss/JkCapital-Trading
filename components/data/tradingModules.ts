export interface Lesson {
  title: string;
  slug: string;
  description: string;
  readingTime: string;
  difficulty: "Básico" | "Intermedio" | "Avanzado";
}

export interface TradingModule {
  title: string;
  slug: string;
  description: string;
  lessons: Lesson[];
}

export const tradingModules: TradingModule[] = [
  {
    title: "Fundamentos",
    slug: "fundamentals",
    description:
      "Aprende los conceptos esenciales que todo trader debe conocer antes de operar.",

    lessons: [
      {
        title: "¿Qué es el Trading?",
        slug: "what-is-trading",
        description: "Descubre qué es el trading y cómo funcionan los mercados.",
        readingTime: "8 min",
        difficulty: "Básico",
      },
      {
        title: "¿Qué es un Broker?",
        slug: "what-is-broker",
        description: "Conoce qué hace un broker y por qué es indispensable.",
        readingTime: "7 min",
        difficulty: "Básico",
      },
      {
        title: "Bid y Ask",
        slug: "bid-ask",
        description: "Aprende la diferencia entre precio de compra y venta.",
        readingTime: "6 min",
        difficulty: "Básico",
      },
      {
        title: "Spread",
        slug: "spread",
        description: "Comprende qué es el spread.",
        readingTime: "5 min",
        difficulty: "Básico",
      },
      {
        title: "Pip",
        slug: "pip",
        description: "Descubre cómo se mide el movimiento del precio.",
        readingTime: "6 min",
        difficulty: "Básico",
      },
      {
        title: "Lote",
        slug: "lot",
        description: "Aprende qué representa un lote.",
        readingTime: "6 min",
        difficulty: "Básico",
      },
      {
        title: "Apalancamiento",
        slug: "leverage",
        description: "Entiende cómo funciona el apalancamiento.",
        readingTime: "8 min",
        difficulty: "Básico",
      },
      {
        title: "Tipos de Órdenes",
        slug: "orders",
        description: "Conoce las órdenes más utilizadas.",
        readingTime: "9 min",
        difficulty: "Básico",
      },
      {
        title: "Horarios del Mercado",
        slug: "market-hours",
        description: "Aprende cuándo abren las principales sesiones.",
        readingTime: "7 min",
        difficulty: "Básico",
      },
    ],
  },

  {
    title: "Price Action",
    slug: "price-action",
    description:
      "Aprende a leer el mercado únicamente con el movimiento del precio.",

    lessons: [
      {
        title: "¿Qué es el Price Action?",
        slug: "what-is-price-action",
        description: "Introducción al Price Action.",
        readingTime: "8 min",
        difficulty: "Básico",
      },
      {
        title: "Estructura del Mercado",
        slug: "market-structure",
        description: "La base para entender cualquier gráfico.",
        readingTime: "10 min",
        difficulty: "Intermedio",
      },
      {
        title: "Tendencias",
        slug: "trends",
        description: "Cómo identificar tendencias.",
        readingTime: "9 min",
        difficulty: "Intermedio",
      },
      {
        title: "Mercado Lateral",
        slug: "market-range",
        description: "Aprende a identificar consolidaciones.",
        readingTime: "7 min",
        difficulty: "Intermedio",
      },
      {
        title: "BOS",
        slug: "bos",
        description: "Break of Structure.",
        readingTime: "9 min",
        difficulty: "Intermedio",
      },
      {
        title: "CHOCH",
        slug: "choch",
        description: "Cambio de carácter.",
        readingTime: "9 min",
        difficulty: "Intermedio",
      },
      {
        title: "Liquidez",
        slug: "liquidity",
        description: "Qué es la liquidez.",
        readingTime: "11 min",
        difficulty: "Intermedio",
      },
      {
        title: "Order Block",
        slug: "order-block",
        description: "Cómo identificar Order Blocks.",
        readingTime: "12 min",
        difficulty: "Intermedio",
      },
      {
        title: "Fair Value Gap",
        slug: "fair-value-gap",
        description: "Desequilibrios del mercado.",
        readingTime: "10 min",
        difficulty: "Intermedio",
      },
      {
        title: "Oferta y Demanda",
        slug: "supply-demand",
        description: "Zonas de oferta y demanda.",
        readingTime: "10 min",
        difficulty: "Intermedio",
      },
    ],
  },

  {
    title: "Gestión del Riesgo",
    slug: "risk-management",
    description:
      "Protege tu capital antes de pensar en ganar dinero.",

    lessons: [
      {
        title: "Riesgo por Operación",
        slug: "risk-per-trade",
        description: "Cuánto arriesgar.",
        readingTime: "8 min",
        difficulty: "Básico",
      },
      {
        title: "Risk Reward",
        slug: "risk-reward",
        description: "Relación riesgo-beneficio.",
        readingTime: "7 min",
        difficulty: "Básico",
      },
      {
        title: "Stop Loss",
        slug: "stop-loss",
        description: "Cómo proteger una operación.",
        readingTime: "7 min",
        difficulty: "Básico",
      },
      {
        title: "Take Profit",
        slug: "take-profit",
        description: "Cómo definir objetivos.",
        readingTime: "7 min",
        difficulty: "Básico",
      },
      {
        title: "Tamaño de Posición",
        slug: "position-size",
        description: "Calcula correctamente tus lotes.",
        readingTime: "10 min",
        difficulty: "Intermedio",
      },
      {
        title: "Gestión del Capital",
        slug: "capital-management",
        description: "La clave para sobrevivir.",
        readingTime: "9 min",
        difficulty: "Intermedio",
      },
    ],
  },

  {
    title: "Psicología",
    slug: "psychology",
    description:
      "Domina tus emociones para convertirte en un trader consistente.",

    lessons: [
      {
        title: "Control Emocional",
        slug: "emotional-control",
        description: "Aprende a controlar el miedo y la codicia.",
        readingTime: "9 min",
        difficulty: "Intermedio",
      },
      {
        title: "Disciplina",
        slug: "discipline",
        description: "La habilidad más importante de un trader.",
        readingTime: "7 min",
        difficulty: "Intermedio",
      },
      {
        title: "Paciencia",
        slug: "trading-patience",
        description: "Aprende a esperar las mejores oportunidades.",
        readingTime: "6 min",
        difficulty: "Intermedio",
      },
      {
        title: "FOMO",
        slug: "market-fomo",
        description: "Cómo evitar entrar tarde al mercado.",
        readingTime: "7 min",
        difficulty: "Intermedio",
      },
      {
        title: "Sobreoperar",
        slug: "overtrading",
        description: "Uno de los errores más comunes.",
        readingTime: "7 min",
        difficulty: "Intermedio",
      },
      {
        title: "Diario de Trading",
        slug: "trading-diary",
        description: "La herramienta para mejorar constantemente.",
        readingTime: "8 min",
        difficulty: "Intermedio",
      },
    ],
  },
];