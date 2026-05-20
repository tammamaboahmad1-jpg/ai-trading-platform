import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore,
doc,
setDoc,
getDoc,
collection,
getDocs
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey:
"AIzaSyBUmHBoRmQ4naiC4TwouANrYAeScKW9DNk",

authDomain:
"ai-trading-platform-cde38.firebaseapp.com",

projectId:
"ai-trading-platform-cde38",

storageBucket:
"ai-trading-platform-cde38.firebasestorage.app",

messagingSenderId:
"431162854518",

appId:
"1:431162854518:web:bafe44171a3c042782a357"

};

const app =
initializeApp(firebaseConfig);

const auth =
getAuth(app);

const db =
getFirestore(app);

const loginBtn =
document.getElementById("loginBtn");

const registerBtn =
document.getElementById("registerBtn");

const emailInput =
document.getElementById("email");

const passwordInput =
document.getElementById("password");

registerBtn.onclick =
async function(){

const email =
emailInput.value;

const password =
passwordInput.value;

try{

const userCredential =
await createUserWithEmailAndPassword(
auth,
email,
password
);

await setDoc(
doc(
db,
"users",
userCredential.user.uid
),
{

email,

balance:10000,

profit:2450,

vip:true,

verified:false,

createdAt:
new Date().toString()

}

);

alert("تم إنشاء الحساب 🚀");

showPlatform(email);

}
catch(error){

alert(error.message);

}

};

loginBtn.onclick =
async function(){

const email =
emailInput.value;

const password =
passwordInput.value;

try{

await signInWithEmailAndPassword(
auth,
email,
password
);

showPlatform(email);

}
catch(error){

alert(error.message);

}

};

function showPlatform(email){

document.getElementById("loginPage")
.style.display = "none";

document.getElementById("appPage")
.style.display = "block";

document.getElementById("userEmail")
.innerText = email;

loadAdminData();

new TradingView.widget({

"autosize": true,

"symbol":
"BINANCE:BTCUSDT",

"interval": "15",

"timezone":"Etc/UTC",

"theme":"dark",

"style":"1",

"locale":"ar",

"toolbar_bg":"#071733",

"enable_publishing":false,

"container_id":"tradingview"

});

}

async function loadAdminData(){

const usersSnap =
await getDocs(
collection(db,"users")
);

document.getElementById(
"usersCount"
).innerText =
usersSnap.size;

const depositsSnap =
await getDocs(
collection(db,"deposits")
);

document.getElementById(
"depositsCount"
).innerText =
depositsSnap.size;

const withdrawsSnap =
await getDocs(
collection(db,"withdraws")
);

document.getElementById(
"withdrawsCount"
).innerText =
withdrawsSnap.size;

const kycSnap =
await getDocs(
collection(db,"kyc")
);

document.getElementById(
"kycCount"
).innerText =
kycSnap.size;

}

window.submitKYC =
async function(){

const user =
auth.currentUser;

const fullName =
document.getElementById(
"fullName"
).value;

const country =
document.getElementById(
"country"
).value;

const idNumber =
document.getElementById(
"idNumber"
).value;

const documentType =
document.getElementById(
"documentType"
).value;

await setDoc(
doc(db,"kyc",user.uid),
{

fullName,

country,

idNumber,

documentType,

status:"pending",

createdAt:
new Date().toString()

}

);

document.getElementById(
"kycStatus"
).innerHTML =
"الحالة: قيد المراجعة ⏳";

alert("تم إرسال التوثيق 🚀");

loadAdminData();

};

window.depositMoney =
async function(){

const user =
auth.currentUser;

const amount =
document.getElementById(
"amount"
).value;

const binanceId =
document.getElementById(
"binanceId"
).value;

await setDoc(
doc(
db,
"deposits",
user.uid + Date.now()
),
{

email:user.email,

amount,

binanceId,

status:"pending",

createdAt:
new Date().toString()

}

);

alert("تم إرسال طلب الإيداع 🚀");

loadAdminData();

};

window.withdrawMoney =
async function(){

const user =
auth.currentUser;

const amount =
document.getElementById(
"amount"
).value;

const binanceId =
document.getElementById(
"binanceId"
).value;

await setDoc(
doc(
db,
"withdraws",
user.uid + Date.now()
),
{

email:user.email,

amount,

binanceId,

status:"pending",

createdAt:
new Date().toString()

}

);

alert("تم إرسال طلب السحب 💸");

loadAdminData();

};

onAuthStateChanged(auth,(user)=>{

if(user){

showPlatform(user.email);

}

});
