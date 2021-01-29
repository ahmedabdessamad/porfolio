var firebaseConfig = {
  apiKey: "AIzaSyCFYAgaUuNn9Q1Gg_WPLrKAVbJLy5raRF0",
  authDomain: "personalportfolio-d498c.firebaseapp.com",
  databaseURL: "https://personalportfolio-d498c.firebaseio.com",
  projectId: "personalportfolio-d498c",
  storageBucket: "personalportfolio-d498c.appspot.com",
  messagingSenderId: "980209484978",
  appId: "1:980209484978:web:e1413d8f5824fee3f335ab",
  measurementId: "G-9P2VWGYQ1P",
};
firebase.initializeApp(firebaseConfig),
  firebase.analytics(),
  document.getElementById("refresh-me").addEventListener("click", resetForm),
  document
    .getElementById("contact-form")
    .addEventListener("submit", submitForm);
let notification = document.getElementById("notification-alert");
function submitForm(e) {
  e.preventDefault();
  var t = document.getElementById("name-input").value,
    a = document.getElementById("email-input").value,
    n = document.getElementById("message-input").value;
  sendDataToFireBase(t + "_" + Date.now().toString().slice(8), t, a, n);
}
let mydatabase = firebase.database();
function sendDataToFireBase(e, t, a, n) {
  mydatabase.ref("clients/" + e).set({ name: t, email: a, message: n }),
    document.getElementById("contact-form").reset(),
    (notification.style.display = "block"),
    setTimeout(() => {
      notification.classList.add("fadeOut"),
        setTimeout(() => {
          (notification.style.display = "none"), location.replace("index.html");
        }, 1e3);
    }, 3e3);
}
function resetForm() {
  document.getElementById("contact-form").reset();
}
