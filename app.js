const signals = [

{
pair:"BTC/USD",
type:"BUY",
entry:"43,250$",
target:"44,500$"
},

{
pair:"ETH/USD",
type:"SELL",
entry:"3,450$",
target:"3,180$"
},

{
pair:"SOL/USD",
type:"BUY",
entry:"120$",
target:"138$"
}

];

let current = 0;

function changeSignal(){

const signal = document.querySelector(".signal");

const info = document.querySelector(".signal-info");

if(!signal || !info) return;

const s = signals[current];

signal.innerHTML = `${s.type} ${s.pair}`;

if(s.type === "BUY"){
signal.classList.remove("sell");
signal.classList.add("buy");
}else{
signal.classList.remove("buy");
signal.classList.add("sell");
}

info.innerHTML = `

<div>
سعر الدخول:
${s.entry}
</div>

<div>
الهدف:
${s.target}
</div>

`;

current++;

if(current >= signals.length){
current = 0;
}

}

setInterval(changeSignal,4000);

changeSignal();
