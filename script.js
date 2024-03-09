

const convert = document.getElementById("convert");


const result = document.getElementById("result");

const from = document.getElementById("from");


const to = document.getElementById("to");


convert.addEventListener("click", async function(e){


    let fromCurrency = from.value;

    let toCurrency = to.value;

    let amt = amount.value;





let url=`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`


let responce= await fetch(url)

let data= await responce.json()

let rate=data.rates[toCurrency]


let currancy=rate*amt;

result.innerHTML = `${amt} ${fromCurrency} = ${currancy}
            ${toCurrency}`;


})


