let contador = 0;

function atualizarDisplay() {
    document.getElementById('result').innerText = contador;
}

function zerar() {
    contador = 0;
    atualizarDisplay();
}

function adicionar() {
    contador += 1;
    atualizarDisplay();
}

function subtrair() {
    contador -= 1;
    atualizarDisplay();
}
