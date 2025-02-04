function exibirNome () {
    let nome = document.getElementById('nome').value; // o .value mostra que a função deve pegar o valor que existe dentro do elemento html com id "nome"

    console.log(nome);

    alert(`Olá ${nome}!`);
}

exibirNome();
