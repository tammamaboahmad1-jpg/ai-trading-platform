window.onload = function () {

const loginBtn = document.getElementById("loginBtn");

loginBtn.onclick = function () {

document.getElementById("loginPage").style.display = "none";

document.getElementById("appPage").style.display = "block";

loadPage("home");

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
"container_id": "tradingview"
});

};

const menuItems = document.querySelectorAll(".menu");

menuItems.forEach(item => {

item.addEventListener("click", function(){

menuItems.forEach(btn=>{
btn.classList.remove("active");
});

this.classList.add("active");

const text = this.innerText;

if(text.includes("الرئيسية")){
loadPage("home");
}

if(text.includes("الإشارات")){
loadPage("signals");
}

if(text.includes("المحفظة")){
loadPage("wallet");
}

if(text.includes("VIP")){
loadPage("vip");
}

if(text.includes("الأكاديمية")){
loadPage("academy");
}

if(text.includes("الإعدادات")){
loadPage("settings");
}

});

});

};

function loadPage(page){

const market =
document.querySelector(".market-card");

const signals =
document.querySelector(".signals");

if(page === "home"){

market.style.display = "block";
signals.style.display = "block";

}

if(page === "signals"){

market.style.display = "none";
signals.style.display = "block";

}

if(page === "wallet"){

market.style.display = "none";

signals.innerHTML = `

<h2>💰 المحفظة</h2>

<div class="signal buy">

الرصيد الحالي:
<br>
$10,000

</div>

<div class="signal sell">

الأرباح:
<br>
+$2,450

</div>

`;

}

if(page === "vip"){

market.style.display = "none";

signals.innerHTML = `

<h2>👑 عضوية VIP</h2>

<div class="signal buy">

VIP ACTIVE

<br><br>

185 يوم متبقي

</div>

`;

}

if(page === "academy"){

market.style.display = "none";

signals.innerHTML = `

<h2>🎓 الأكاديمية</h2>

<div class="signal buy">

📘 تعلم التداول

</div>

<div class="signal buy">

📈 تحليل الشموع

</div>

<div class="signal buy">

🤖 إشارات AI

</div>

`;

}

if(page === "settings"){

market.style.display = "none";

signals.innerHTML = `

<h2>⚙️ الإعدادات</h2>

<div class="signal buy">

🌐 تغيير اللغة

</div>

<div class="signal buy">

🌙 الوضع الليلي

</div>

`;

}

}
