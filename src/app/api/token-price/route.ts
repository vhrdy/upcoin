export async function GET() {
  try {
    const CA = "CgwW9y8aLVJKGSLbjRr23mY1iGSDpwgbQetLAph15fRk"; // Upcoin
    const res = await fetch(
      `https://api.dexscreener.com/latest/dex/tokens/${CA}`,
      { next: { revalidate: 30 } } // revalidation 30s
    );

    if (!res.ok) {
      return Response.json({ error: "Failed to fetch price" }, { status: 500 });
    }

    const data = await res.json();
    const pair = data?.pairs?.[0];

    return Response.json({
      name: pair?.baseToken?.name ?? "Unknown",
      symbol: pair?.baseToken?.symbol ?? "???",
      priceUsd: pair?.priceUsd ?? null,
      priceChange24h: pair?.priceChange?.h24 ?? null,
      volume24h: pair?.volume?.h24 ?? null,
      liquidityUsd: pair?.liquidity?.usd ?? null,
      marketCap: pair?.fdv ?? null, // Fully Diluted Valuation
      dex: pair?.dexId ?? null,
      url: pair?.url ?? null,
      lastUpdated: new Date().toISOString(),
      pairCreatedAt: pair?.pairCreatedAt
        ? new Date(pair.pairCreatedAt).toISOString()
        : null,
    });
  } catch (err) {
    console.error("Error in token-price route:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}