import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore,
doc,
setDoc,
getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyBUmHBoRmQ4naiC4TwouANrYAeScKW9DNk",

authDomain: "ai-trading-platform-cde38.firebaseapp.com",

projectId: "ai-trading-platform-cde38",

storageBucket: "ai-trading-platform-cde38.firebasestorage.app",

messagingSenderId: "431162854518",

appId: "1:431162854518:web:bafe44171a3c042782a357"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const loginBtn =
document.getElementById("loginBtn");

const registerBtn =
document.getElementById("registerBtn");

const emailInput =
document.getElementById("email");

const passwordInput =
document.getElementById("password");

registerBtn.onclick = async function(){

const email = emailInput.value;

const password = passwordInput.value;

try{

const userCredential =
await createUserWithEmailAndPassword(
auth,
email,
password
);

await setDoc(
doc(db,"users",userCredential.user.uid),
{

email: email,

balance: 10000,

profit: 2450,

vip: true,

verified: false,

createdAt: new Date().toString()

}

);

alert("تم إنشاء الحساب 🚀");

showPlatform(email);

}
catch(error){

alert(error.message);

}

};

loginBtn.onclick = async function(){

const email = emailInput.value;

const password = passwordInput.value;

try{

const userCredential =
await signInWithEmailAndPassword(
auth,
email,
password
);

const docRef =
doc(db,"users",userCredential.user.uid);

const userSnap =
await getDoc(docRef);

if(userSnap.exists()){

showPlatform(
userSnap.data().email
);

}

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

}

onAuthStateChanged(auth,(user)=>{

if(user){

showPlatform(user.email);

}

});
