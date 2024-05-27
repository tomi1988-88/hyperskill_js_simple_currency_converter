const input = require('sync-input');

const info = `Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`;

const exchange = {
    "USD": 1,
    "JPY": 113.5,
    "EUR": 0.89,
    "RUB": 74.36,
    "GBP": 0.75,
}

function converting() {
  while (true) {
    console.log(`What do you want to convert?`)
    
    let currencyFrom = input("From:").toUpperCase();
    
    if (!(Object.keys(exchange).includes(currencyFrom))) {
        console.log(`Unknown currency`);
        continue;
    }
    
    let currencyTo = input("To:").toUpperCase();
  
    if (!(Object.keys(exchange).includes(currencyTo))) {
        console.log(`Unknown currency`);
        continue;
    }
  
    let amount = input("Amount:");
  
    if (!(/\d+/.test(amount))) {
        console.log(`The amount has to be a number`);
        continue;
    }
  
    amount = Number(amount);
  
    if (amount < 1) {
        console.log(`The amount cannot be less than 1`);
        continue;
    }
  
    console.log(`Result: ${amount} ${currencyFrom} equals ${(amount / exchange[currencyFrom] * exchange[currencyTo]).toFixed(4)} ${currencyTo}`);
    break
  }
}
  


function mainLoop() {
  while (true) {
    console.log(`What do you want to do?
1-Convert currencies 2-Exit program`)
    
    let choice = input();

    const possibleChoice = ["1", "2"]
    
    if (!possibleChoice.includes(choice)) {
      console.log(`Unknown input`);
      continue;
    }

    if (choice == 1) {
      converting();
    } else {
      console.log(`Have a nice day!`);
      break;
    }
  }
}

console.log(info);
mainLoop();
