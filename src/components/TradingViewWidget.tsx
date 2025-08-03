// src/components/TradingViewWidget.tsx
"use client";

import { useEffect, useRef } from "react";

export default function TradingViewWidget({ symbol }: { symbol: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [[symbol]],
      chartOnly: false,
      width: "100%",
      height: 400,
      locale: "en",
      colorTheme: "light",
      autosize: true,
      showVolume: true,
      showMA: true,
      hideLegend: false,
      scalePosition: "right",
      scaleMode: "Normal",
    });

    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(script);
  }, [symbol]);

  return <div className="tradingview-widget-container" ref={containerRef}></div>;
}
