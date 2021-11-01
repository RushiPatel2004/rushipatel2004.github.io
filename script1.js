let price = document.querySelector("#tax_price");

let userFunds = document.querySelector("#tax_funds");

let tax_button = document.querySelector("#button1");

tax_button.addEventListener("click", taxClick);

function taxClick(event) {
  event.preventDefault();
  let x = document.getElementById("States").value;

  if (x == "NY") {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");

    let actual_price = Math.round((price.value * 1.08875));
    let user_funds = userFunds.value - actual_price;
    p1.innerHTML = "You live in " + x + " which has a total sales tax rate of 8.875%";
    p2.innerHTML = "The listed price is " + "$" + price.value;
    p3.innerHTML = "The price after tax is " + "$" + actual_price;
    p4.innerHTML = "You have " + "$" + user_funds + " left over";

    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3);
    document.body.appendChild(p4);

    if (userFunds.value < actual_price) {
      let p5 = document.createElement("p");
      p5.innerHTML = "You do not have enough to make this purchase"; 
      document.body.appendChild(p5);
     }


    let clear_button = document.createElement("button");

    
    document.body.appendChild(clear_button);
    clear_button.addEventListener("click", clearClick);
      function clearClick(event) {
        location.reload();
      }
  }

  if (x == "PA") {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let actual_price = Math.round((price.value * 1.08));
    let user_funds = userFunds.value - actual_price;

    
    p1.innerHTML = "You live in " + x + " which has a total sales tax rate of 8%";
    p2.innerHTML = "The listed price is " + "$" + price.value;
    p3.innerHTML = "The price after tax is " + "$" + actual_price;
    p4.innerHTML = "You have " + "$" + user_funds + " left over";

    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3);
    document.body.appendChild(p4);
  
    if (userFunds.value < actual_price) {
      let p5 = document.createElement("p");
      p5.innerHTML = "You do not have enough to make this purchase"; 
      document.body.appendChild(p5);
    }

    let clear_button = document.createElement("button");

    
    document.body.appendChild(clear_button);
    clear_button.addEventListener("click", clearClick);

      function clearClick(event) {
        location.reload();
      }
  }

  if (x == "CT") {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let actual_price = Math.round((price.value * 1.06350));
    let user_funds = userFunds.value - actual_price;
    p1.innerHTML = "You live in " + x + " which has a total sales tax rate of 6.35%";
    p2.innerHTML = "The listed price is " + "$" + price.value;
    p3.innerHTML = "The price after tax is " + "$" + actual_price;
    p4.innerHTML = "You have " + "$" + user_funds + " left over";

    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3);
    document.body.appendChild(p4);

    if (userFunds.value < actual_price) {
      let p5 = document.createElement("p");
      p5.innerHTML = "You do not have enough to make this purchase"; 
      document.body.appendChild(p5);
    }

    let clear_button = document.createElement("button");

    
    document.body.appendChild(clear_button);
    clear_button.addEventListener("click", clearClick);
      function clearClick(event) {
        location.reload();
      }
  }

  if (x == "MA") {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    // There is no local sales tax rates in MA
    let actual_price = Math.round(price.value * 1.0625);
    let user_funds = userFunds.value - actual_price;

    p1.innerHTML = "You live in " + x + " which has a total sales tax rate of 6.25%";
    p2.innerHTML = "The listed price is " + "$" + price.value;
    p3.innerHTML = "The price after tax is " + "$" + actual_price;
    p4.innerHTML = "You have " + "$" + user_funds + " left over";

    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3);
    document.body.appendChild(p4);

    if (userFunds.value < actual_price) {
      let p5 = document.createElement("p");
      p5.innerHTML = "You do not have enough to make this purchase"; 
      document.body.appendChild(p5);
    }

    let clear_button = document.createElement("button");

    
    document.body.appendChild(clear_button);
    clear_button.addEventListener("click", clearClick);
      function clearClick(event) {
        location.reload();
      }
  }

  if (x == "NH") {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    // There is no local sales tax rates in NH
    let actual_price = price.value;
    let user_funds = userFunds.value - actual_price;

    p1.innerHTML = "You live in " + x + " which has no sales tax";
    p2.innerHTML = "The listed price is " + "$" + price.value;
    p3.innerHTML = "The price after tax is " + "$" + actual_price;
    p4.innerHTML = "You have " + "$" + user_funds + " left over";

    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3);
    document.body.appendChild(p4);

    if (userFunds.value < actual_price) {
      let p5 = document.createElement("p");
      p5.innerHTML = "You do not have enough to make this purchase"; 
      document.body.appendChild(p5);
    }

    let clear_button = document.createElement("button");

    
    document.body.appendChild(clear_button);
    clear_button.addEventListener("click", clearClick);
      function clearClick(event) {
        location.reload();
      }
  } 
}
