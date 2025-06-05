let displayValue = '';

function calculator_key(value) {
  const displayElement = document.getElementById('display');
  if (value === '=') {
    try {
      displayValue = eval(displayValue);
    } catch {
      displayValue = 'Error';
    }
  } else if (value === 'C') {
    displayValue = '';
  } else if (value === 'CE') {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue += value;
  }
  displayElement.innerText = displayValue; // Update the display element
}
