function calcCulmulativeInterest() {
  let investment = Number(document.querySelector("#investment").value);
  let interestRate = Number(document.querySelector("#interest-rate").value);
  let timeUnit = Number(document.querySelector("#duration").value);
  let time = Number(document.querySelector("#time").value);
  let totalAmount = calculateTotalAmount(
    investment,
    interestRate,
    time,
    timeUnit
  );
  let totalInterest = calculateTotalInterest(investment, totalAmount);
  displayResults(totalInterest, totalAmount);
}
function calculateTotalAmount(investment, interestRate, time, timeUnit) {
  return investment * interestRate * time * timeUnit;
}
function calculateTotalInterest(investment, totalAmount) {
  return investment + totalAmount;
}
function displayResults(totalInterest, totalAmount) {
  document.querySelector("#totalInterest").value = totalInterest;
  document.querySelector("#totalAmount").value = totalAmount;
}
document
  .querySelector("#calculate")
  .addEventListener("click", calcCulmulativeInterest);
