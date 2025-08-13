
let amigos = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nomeAmigo = nomeInput.value.trim(); 
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido.');
        return; 
    }

    if (amigos.map(amigo => amigo.toLowerCase()).includes(nomeAmigo.toLowerCase())) {
        alert('Este nome já foi adicionado! Por favor, insira um nome diferente.');
        nomeInput.value = ''; 
        return;
    }

    amigos.push(nomeAmigo);

    const listaAmigos = document.getElementById('listaAmigos');
    
    listaAmigos.innerHTML = ''; 
    for (let amigo of amigos) {
        
        listaAmigos.innerHTML += `<p>${amigo}</p>`;
    }

    nomeInput.value = '';
    nomeInput.focus();
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}