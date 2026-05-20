const signals = [
{
pair:"BTC/USD",
type:"BUY",
entry:"43,250",
target:"44,500",
stop:"42,900"
},

{
pair:"ETH/USD",
type:"SELL",
entry:"2,350",
target:"2,180",
stop:"2,420"
},

{
pair:"SOL/USD",
type:"BUY",
entry:"145",
target:"168",
stop:"132"
}
];

const signalBox = document.getElementById("signals");

if(signalBox){

signals.forEach(signal=>{

const div = document.createElement("div");

div.className = "signal-card";

div.innerHTML = `

<div class="signal-top">
<h3>${signal.pair}</h3>
<span class="${signal.type}">
${signal.type}
</span>
</div>

<div class="signal-data">

<p>سعر الدخول:
<b>${signal.entry}</b>
</p>

<p>الهدف:
<b>${signal.target}</b>
</p>

<p>وقف الخسارة:
<b>${signal.stop}</b>
</p>

</div>

`;

signalBox.appendChild(div);

});

}

setInterval(()=>{

const prices = document.querySelectorAll(".price");

prices.forEach(price=>{

let random =
(Math.random()*1000).toFixed(2);

price.innerHTML =
"$"+random;

});

},3000);
