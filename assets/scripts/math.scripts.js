function calcular() {
    let a = parseInt(document.getElementById('numA').value);
    let b = parseInt(document.getElementById('numB').value);

    console.log(`Valor A: ${a} | Valor B: ${b}`);

    // let calcular = a + b;

    // console.log(calcular);

    document.getElementById('result').innerHTML = a + b;

    console.log(document.getElementById('result').innerText)
}
