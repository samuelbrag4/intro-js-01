function soma() {
    let a = parseInt(document.getElementById('numA').value);
    let b = parseInt(document.getElementById('numB').value);

    console.log(`Valor A: ${a} | Valor B: ${b}`);

    // let calcular = a + b;

    // console.log(calcular);

    document.getElementById('result').innerHTML = a + b;

    console.log(document.getElementById('result').innerText)
}

function sub() {
    let a = parseInt(document.getElementById('numA').value);
    let b = parseInt(document.getElementById('numB').value);

    console.log(`Valor A: ${a} | Valor B: ${b}`);

    document.getElementById('result').innerHTML = a - b;

    console.log(document.getElementById('result').innerText)
}

function mult() {
    let a = parseInt(document.getElementById('numA').value);
    let b = parseInt(document.getElementById('numB').value);

    console.log(`Valor A: ${a} | Valor B: ${b}`);

    document.getElementById('result').innerHTML = a * b;

    console.log(document.getElementById('result').innerText)
}

function divi() {
    let a = parseInt(document.getElementById('numA').value);
    let b = parseInt(document.getElementById('numB').value);

    console.log(`Valor A: ${a} | Valor B: ${b}`);

    document.getElementById('result').innerHTML = a / b;

    console.log(document.getElementById('result').innerText)
}