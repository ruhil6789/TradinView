// TradingViewWidget.jsx
import React, { useEffect, useState, useRef } from 'react';
let tvScriptLoadingPromise;
const TradingViewWidget = () => {
    const [selectedCoin, setSelectedCoin] = useState("BTC")
    const onLoadScriptRef = useRef();


    useEffect(
        () => {
            onLoadScriptRef.current = createWidget;

            if (!tvScriptLoadingPromise) {
                tvScriptLoadingPromise = new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.id = 'tradingview-widget-loading-script';
                    script.src = 'https://s3.tradingview.com/tv.js';
                    script.type = 'text/javascript';
                    script.onload = resolve;

                    document.head.appendChild(script);
                });
            }

            tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

            return () => onLoadScriptRef.current = null;

            function createWidget() {
                if (document.getElementById('tradingview_13f25') && 'TradingView' in window) {
                    new window.TradingView.widget({
                        width: 980,
                        height: 1100,
                        symbol: `${selectedCoin}USD`,
                        interval: "D",
                        timezone: "Etc/UTC",
                        theme: "light",
                        style: "1",
                        locale: "in",
                        toolbar_bg: "#f1f3f6",
                        enable_publishing: false,
                        allow_symbol_change: true,
                        container_id: "tradingview_13f25"
                    });
                }
            }
        },
        [selectedCoin]
    );

    return (
        <>
            <div className='tradingview-widget-container'>
                <div id='tradingview_13f25' />
                <div className="tradingview-widget-copyright">
                    <a href="https://in.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span className="blue-text">AAPL stock chart</span></a> by TradingView
                </div>
                <div>
                    <button onClick={() => { setSelectedCoin("DAI") }} >Add coin</button>
                </div>
            </div>
        </>
    );
}
export default TradingViewWidget 