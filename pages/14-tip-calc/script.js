// TODO: Get the form submission as an object
const form = document.querySelector("form");

// TODO: Write a function to calculate the total amount
function calcTotalWithTip(total, tipPct) {
  return total + total * (tipPct / 100);
}

function handleSubmit(e) {
  // prevents the browsers default behavior of trying to submit a form and the page reloading.
  e.preventDefault();

  const submission = {
    total: e.target.total.value,
    tip: e.target.tip.value,
  };
}

form.addEventListener("submit", handleSubmit);

// TODO: Output the information showing voff, the tip amount and the total in 'p' tags
