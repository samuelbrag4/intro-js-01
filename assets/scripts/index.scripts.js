function exibirNome() {
    let nome = document.getElementById('nome').value; // o .value mostra que a função deve pegar o valor que existe dentro do elemento html com id "nome"

    console.log(nome);

    let mensagem = document.getElementById('msg').innerHTML = `Olá, ${nome}!`

    /*
    .innerHTML - pode ser usado para alterar/criar elementos de forma mais abrangente. Podendo até mesmo criar tags

    .innerText - usado para mudar somente o texto contido em um elemento
    */

    console.log(mensagem)

    confetti();
}
