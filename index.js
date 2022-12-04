const buyingPrice = document.querySelector("#buying_price");
const stockQuantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current_price");
const showBtn = document.querySelector("#submit_btn");
const outputBox = document.querySelector(".output_box");


function calculateProfitAndLoss(buying, quantity, current) {
  if (buying > current) { //loss
    let loss = (buying - current) * quantity;
    let lossPercent = (loss / buying) * 100;
    console.log(`The loss is ${loss} And ${lossPercent}%`);
  }
  else if (buying < current) { //profit
    let profit = (current - buying) * quantity;
    let profitPercent = (profit / buying) * 100;
    console.log(`The profit is ${profit} And ${profitPercent}%`)
  }
  else { // If they are equal 
    console.log("equal");
  }
}

calculateProfitAndLoss(100, 10, 100);