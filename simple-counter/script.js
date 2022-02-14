const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const count = document.querySelector(".count");

function counter() {
  let countVal = 0;
  increment.addEventListener("click", () => {
    countVal++;
    count.textContent = countVal;
  });
  decrement.addEventListener("click", () => {
    if (countVal === 0 || countVal < 0) {
      return null;
    }
    countVal--;
    count.textContent = countVal;
  });
}

counter();
