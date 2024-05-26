let counterValueEl = document.getElementById("counterValue");

// Getting the value of the clickCount from the localStorage
let clickCount = localStorage.getItem("clickCount");

// Checking if the clickCount value exists in the localStorage or not
if (clickCount === null) {
  // Assigning 0 to the textContent of the counterValueEl if it doesn't exist
  counterValueEl.textContent = 0;
} else {
  // Assigning the clickCount value to the textContent of the counterValueEl if it exists
  counterValueEl.textContent = clickCount;
}

function onIncrementCount() {
  let previousCounterValue = counterValueEl.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;

  // Updating the clickCount value in the localStorage
  localStorage.setItem("clickCount", updatedCounterValue);
  // Updating the counterValueEl textContent
  counterValueEl.textContent = updatedCounterValue;
}
