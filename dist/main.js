const button = document.querySelector(".toggle");
const circle = document.querySelector(".circle");

const annualPrices = document.querySelectorAll(".annually");
const monthlyPrices = document.querySelectorAll(".monthly");

let toggle = false;

button.addEventListener("click", () => {
  if (!toggle) {
    circle.style.transform = "translateX(0)";

    monthlyPrices.forEach((monthlyPrice) => {
      monthlyPrice.classList.add("hidden");
    });
    annualPrices.forEach((annualPrice) => {
      annualPrice.classList.remove("hidden");
    });

    toggle = true;
  } else {
    circle.style.transform = "translateX(100%)";

    monthlyPrices.forEach((monthlyPrice) => {
      monthlyPrice.classList.remove("hidden");
    });
    annualPrices.forEach((annualPrice) => {
      annualPrice.classList.add("hidden");
    });

    toggle = false;
  }
});

console.log(annualPrices);
console.log(monthlyPrices);
