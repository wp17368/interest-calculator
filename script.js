function calcCulmulativeInterest() {
  let investment = Number(document.querySelector("#investment").value);
  let interestRate = Number(document.querySelector("#interest-rate").value);
  let timeUnit = Number(document.querySelector("#duration").value);
  let time = Number(document.querySelector("#time").value);
  let totalAmount = investment * interestRate * time * timeUnit;
  let totalInterest = investment + totalAmount;
  document.querySelector("#totalInterest").value = totalInterest;
  document.querySelector("#totalAmount").value = totalAmount;
}

document
  .querySelector("#calculate")
  .addEventListener("click", calcCulmulativeInterest);
