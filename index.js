const buyingPrice = document.querySelector("#buying_price");
const stockQuantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current_price");
const showBtn = document.querySelector("#submit_btn");
const outputBox = document.querySelector(".output_box");

outputBox.style.color = "black"

showBtn.addEventListener("click", handlwShow)

function handlwShow() {
  if (buyingPrice.value === "" || stockQuantity.value === "" || currentPrice.value === "") {
    outputBox.innerHTML = "Plzz Fill All The Data First."
    outputBox.style.color = "white";
  }


  else {
    let buy = Number(buyingPrice.value);
    let qunt = Number(stockQuantity.value);
    let curr = Number(currentPrice.value);
    calculateProfitAndLoss(buy, qunt, curr);

  }
}



function calculateProfitAndLoss(buying, quantity, current) {

  if (buying > current) { //loss
    if (buying <= 0 || current <= 0) {
      outputBox.innerText = "All values should be greater than 0";
      outputBox.style.color = "red";
    }
    else {

      let loss = (buying - current) * quantity;

      let lossPercent = (loss / (buying * quantity)) * 100;

      showOutput(`Ohhh!! Your Loss is <b>${loss.toFixed(2)}</b> ð§ and loss Percentage is <b>${lossPercent.toFixed(2)}%</b> ð`)
      outputBox.style.color = "red";
    }
  }
  else if (current > buying) { //profit
    if (current <= 0 || buying <= 0) {
      outputBox.innerText = "All values should be greater than 0";
      outputBox.style.color = "red";
    }
    else {
      let profit = (current - buying) * quantity;

      let profitPercent = (profit / (buying * quantity)) * 100;

      showOutput(`Yay!! Your Profit is <b>${profit.toFixed(2)}</b> ð¥ and profit Percentage is <b>${profitPercent.toFixed(2)}% ð</b>`)
      outputBox.style.color = "#31ff31";
    }


  }
  else { // If they are equal 
    showOutput("ð¶No Profit | No Lossð¶")
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}

