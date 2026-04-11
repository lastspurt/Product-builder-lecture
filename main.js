function generateNumbers() {
  const numbersContainer = document.getElementById('lotto-numbers');
  numbersContainer.innerHTML = '';
  const numbers = [];
  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  numbers.sort((a, b) => a - b);
  for (const number of numbers) {
    const numberElement = document.createElement('div');
    numberElement.classList.add('lotto-number');
    numberElement.textContent = number;
    numbersContainer.appendChild(numberElement);
  }
}