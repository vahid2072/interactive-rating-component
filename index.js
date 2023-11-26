const card = document.querySelector(".card");
const numbers = document.querySelector(".numbers");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", function () {
  const selectedRating = document.querySelector(".dot.selected").textContent;
  
  card.innerHTML = `
  <div class="thank-you-icon"></div>
  <p class="selected-stars">You selected ${selectedRating} out of 5</p>
  <h1 class="thank-you">Thank you!</h1>
  <p class="appreciation">We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
  `;
});

const dots = document.querySelectorAll(".dot");
dots.forEach((dot) => {
  dot.addEventListener("click", function () {
    dots.forEach((dot) => dot.classList.remove("selected"));
    this.classList.add("selected");

    dots.forEach(dot => {
      if(dot.classList.contains('selected')) {
        dot.style.backgroundColor = 'var(--Light-Grey)';
        dot.style.color = 'white';
      } else {
        dot.style.backgroundColor = 'hsl(213, 10%, 21%)';
        dot.style.color = 'var(--Light-Grey)';
      }
    })
  });
});
