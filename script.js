document.querySelector("#state_dropdown");

let userInput = document.querySelector("#income_input");

let submit_button = document.getElementById("button");

submit_button.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  let x = document.getElementById("States").value;

  if (userInput.value > 21,400 || userInput.value < 80,650 && x == "NY") {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p1.innerHTML = "You live in " + x;
    p2.innerHTML = "Your yearly income is " + "$" + userInput.value;
    let income = Math.round(userInput.value - (userInput.value * .0621) - (4,664 + userInput.value * .22));
    p3.innerHTML = "You will have " + "$" + income + " after state taxes and federal taxes";
    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3); 

    let clear_button = document.createElement("button");

    
    document.body.appendChild(clear_button);
    clear_button.addEventListener("click", clearClick);
      function clearClick(event) {
        location.reload();
      }

    if (userInput.value > 80, 650 || userInput.value < 160,000 && x == "NY") {
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      p1.innerHTML = "You live in " + x;
      p2.innerHTML = "Your yearly income is " + "$" + userInput.value;
      let income = Math.round(userInput.value - (userInput.value * .0649) - (14,751 + userInput.value * .24));
      p3.innerHTML = "You will have " + "$" + income + " after state taxes and federal taxes";
      document.body.appendChild(p1);
      document.body.appendChild(p2);
      document.body.appendChild(p3); 

      document.body.appendChild(clear_button);
      clear_button.addEventListener("click", clearClick);
      function clearClick(event) {
        location.reload();
      }
    }


  }

  if (x == "PA") {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p1.innerHTML = "You live in " + x;
    p2.innerHTML = "Your yearly income is " + "$" + userInput.value;
    let income = Math.round(userInput.value - (userInput.value * .0307) - (4,664 + userInput.value * .22));
    p3.innerHTML = "You will have " + "$" + income + " after state taxes and federal taxes";
    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3); 

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
    p1.innerHTML = "You live in " + x;
    p2.innerHTML = "Your yearly income is " + "$" + userInput.value;
    let income = Math.round(userInput.value - (userInput.value * .05) - (4,664 + userInput.value * .22));
    p3.innerHTML = "You will have " + "$" + income + " after state taxes and federal taxes";
    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3); 

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
    p1.innerHTML = "You live in " + x;
    p2.innerHTML = "Your yearly income is " + "$" + userInput.value;
    let income = Math.round(userInput.value - (userInput.value * .05) - (4,664 + userInput.value * .22));
    p3.innerHTML = "You will have " + "$" + income + " after state taxes and federal taxes";
    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3); 

    let clear_button = document.createElement("button");

    
    document.body.appendChild(clear_button);
    clear_button.addEventListener("click", clearClick);
      function clearClick(event) {
        location.reload();
      }
  }
  if (userInput.value > 21,400 || userInput.value < 80,650 && x == "NJ") {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let income = Math.round(userInput.value - (userInput.value * .05525) - (4,664 + userInput.value * .22));
    p1.innerHTML = "You live in " + x;
    p2.innerHTML = "Your yearly income is " + "$" + userInput.value;
    p3.innerHTML = "You will have " + "$" + income + " after state taxes and federal taxes";
    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3); 

    let clear_button = document.createElement("button");

    
    document.body.appendChild(clear_button);
    clear_button.addEventListener("click", clearClick);
      function clearClick(event) {
        location.reload();
      }
  }

  if (userInput.value > 21,400 || userInput.value < 80,650 && x == "CT") {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p1.innerHTML = "You live in " + x;
    p2.innerHTML = "Your yearly income is " + "$" + userInput.value;
    let income = Math.round(userInput.value - (userInput.value * .0550) - (4,664 + userInput.value * .22));
    p3.innerHTML = "You will have " + "$" + income + " after state taxes and federal taxes";
    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3); 

    let clear_button = document.createElement("button");

    
    document.body.appendChild(clear_button);
    clear_button.addEventListener("click", clearClick);
      function clearClick(event) {
        location.reload();
      }
  }
}
