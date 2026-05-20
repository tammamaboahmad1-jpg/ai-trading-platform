function enterPlatform(){

document.getElementById("loginPage").style.display = "none";

document.getElementById("appPage").style.display = "block";

new TradingView.widget({
"autosize": true,
"symbol": "BINANCE:BTCUSDT",
"interval": "15",
"timezone": "Etc/UTC",
"theme": "dark",
"style": "1",
"locale": "ar",
"toolbar_bg": "#071733",
"enable_publishing": false,
"hide_top_toolbar": false,
"hide_legend": false,
"container_id": "tradingview"
});

}
