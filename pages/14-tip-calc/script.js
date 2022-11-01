// TODO: Get the form submission as an object
const form = document.querySelector("form");

function handleSubmit(e) {
  // prevents the browsers default behavior of trying to submit a form and the page reloading.
  e.preventDefault();

  const submission = {
    total: e.target.total.value,
    tip: e.target.tip.value,
  };
}

form.addEventListener("submit", handleSubmit);

// TODO: Write a function to calculate the total amount
// const tipSum = (arr => {
//   let sum = 0;
//   for (t = 0; t < arr.length; t++)
//     {
//       if (typeof arr [t] == "number")
//       {
//         sum = sum + arr [t];
//       }
//     }
//     return sum;
// }
// TODO: Output the information showing voff, the tip amount and the total in 'p' tags
