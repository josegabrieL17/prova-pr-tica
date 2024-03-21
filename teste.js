// função de escolha aleatorio
function escolherFilme (filimes) {
    const indiceAleatorio =Math.floor (Math.random()*filmes.length);
    return filmes [indiceAleatorio];
}
//exemplos de uso
let filmeUsuario = []; //array para armazenar os filmes

for(let i = 0; i <5 ; i++) {
    let filme = prompt("Digite seus filmes " + (i + 1) + ";")
    filmesUsuario.push(filme);
}

let filmesUsuario = escolherFilme(filmesUsuario);
console.log("Filme escolhido foi: ", filmeEscolhido);
