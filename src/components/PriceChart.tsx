"use client";

import { useEffect, useState } from "react";

interface TokenData {
  name: string;
  symbol: string;
  priceUsd: string | null;
  priceChange24h: string | null;
  volume24h: string | null;
  liquidityUsd: string | null;
  marketCap: string | null;
  lastUpdated: string | null;
}

export default function PriceChart() {
  const [data, setData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrice() {
      try {
        const res = await fetch(`/api/token-price`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error fetching token data:", err);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchPrice();
  }, []);

  if (loading) {
    return <div className="text-center text-xl text-muted-foreground">Loading token data...</div>;
  }

  if (!data || !data.priceUsd) {
    return <div className="text-center text-xl text-red-400">Unable to fetch token data.</div>;
  }

  return (
    <div className="text-green-400 space-y-4">
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-extrabold">${parseFloat(data.priceUsd).toFixed(6)}</div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base text-white/80">
        <div className="bg-white/5 rounded-md p-3 text-center">
          <div className="text-white/60 text-md uppercase">Market Cap</div>
          <div className="font-semibold text-2xl">${Number(data.marketCap).toLocaleString()}</div>
        </div>
        <div className="bg-white/5 rounded-md p-3 text-center">
          <div className="text-white/60 text-md uppercase">Volume 24h</div>
          <div className="font-semibold text-2xl">${Number(data.volume24h).toLocaleString()}</div>
        </div>
        <div className="bg-white/5 rounded-md p-3 text-center">
          <div className="text-white/60 text-md uppercase">Liquidity</div>
          <div className="font-semibold text-2xl">${Number(data.liquidityUsd).toLocaleString()}</div>
        </div>
        <div
          className={`bg-white/5 rounded-md p-3 text-center ${
            Number(data.priceChange24h) >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          <div className="text-white/60 text-md uppercase">24h Change</div>
          <div className="font-semibold text-2xl">{Number(data.priceChange24h).toFixed(2)}%</div>
        </div>
        <div className="bg-white/5 rounded-md p-3 text-center">
          <div className="text-white/60 text-md uppercase">Last Update</div>
          <div className="font-semibold text-2xl">{new Date(data.lastUpdated || "").toLocaleTimeString()}</div>
        </div>
      </div>
    </div>
  );
}
