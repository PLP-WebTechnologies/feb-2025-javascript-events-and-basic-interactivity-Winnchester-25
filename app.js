// Add event listeners to the buttons
const clicked = document.querySelector(".btn");

clicked.addEventListener("click", () => {
  alert("Hello World!");
});


// Hover Effect
const hover = document.querySelector(".hover");
hover.addEventListener(
  "mouseenter",
  () => (hover.style.backgroundColor = "orange")
);
hover.addEventListener("mouseleave", () => (hover.style.backgroundColor = ""));

// Click Effect
const clicky = document.querySelector(".clicky");
clicky.addEventListener("dblclick", () => {
  clicky.style.backgroundColor = "teal";
  clicky.textContent = "Gotcha!";
});

//  Morph Effect
const morph = document.querySelector(".morph");
morph.addEventListener("click", () => {
  morph.style.backgroundColor = "purple";
  alert("SPD EMERGENCY!!");
});

// Slide Effect
const images = [
  "/img/desk-3139127_1920.jpg",
  "/img/computer-1149148_1920.jpg",
  "/img/keyboard-7369516_1920.jpg",
];

// const nextImage = querySelector(".nextImage");

let index = 0;

function nextImage() {
  index = (index + 1) % images.length;

document.querySelector(".slide").src = images[index];

}

function showTab(tabId) {
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "none";
    document.getElementById(tabId).style.display = "block";
}

// Animate Effect
function triggerBounce() {
    const btn = document.querySelector(".animate-btn");
    if (!btn) {
        console.error("No element with class 'animate' found.");
        return;
    }
    btn.classList.remove("bounce");
    void btn.offsetWidth;
    btn.classList.add("bounce");
    setTimeout(() => btn.classList.remove("bounce"), 1200);
  }
  
// Form validation
const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMsg = document.getElementById("errorMsg");

    if (name === "") {
        errorMsg.textContent = "Name is required.";
      } else if (!email.includes("@")) {
        errorMsg.textContent = "Invalid email format.";
      } else if (password.length < 8) {
        errorMsg.textContent = "Password must be at least 8 characters.";
      } else if (password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match.";
      } else {
        errorMsg.textContent = "✅ Form submitted!";
   
      }
});

