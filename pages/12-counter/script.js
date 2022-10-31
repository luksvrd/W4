// TODO: Wire up the buttons to update the count.
const button = document.querySelectorAll("button");
const count = document.querySelectorAll("#count");

function handleButtonClick(event) {
  // get the text Content of count - turn it into a number
  const countValue = Number(count.textContent);
// event.target reacts to the source of the event
  if (event.target.id === "increment") {
    count.textContent = countValue + 1;
  } else if (event.target.id === "decrement") {
    if (countValue > 0) (
      count.textContent = countValue - 1;
    )
  }
}


// TODO: Don't allow the count to go below 0.
buttons.forEach((button) function {{
  button.addEventListener("click, handleCuttonClick")
}})