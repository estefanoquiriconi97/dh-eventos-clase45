window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');


    let colors = ["red", "blue", "black", "yellow", "pink", "green"]

    titulo.addEventListener('mouseover', ()=> {
        titulo.style.color = colors[Math.floor(Math.random()*colors.length)];
    })

    let inputTitulo = document.getElementById("titulo");
    console.log(inputTitulo);

    let estadoSecreto = 0;

    inputTitulo.addEventListener('keypress', (event) =>{
        let letra = (event.key).toUpperCase();
        estadoSecreto == 0 && letra == 'S' ? estadoSecreto = 1 : 
        estadoSecreto == 1 && letra == 'E' ? estadoSecreto = 2 : 
        estadoSecreto == 2 && letra == 'C' ? estadoSecreto = 3 : 
        estadoSecreto == 3 && letra == 'R' ? estadoSecreto = 4 : 
        estadoSecreto == 4 && letra == 'E' ? estadoSecreto = 5 :
        estadoSecreto == 5 && letra == 'T' ? estadoSecreto = 6 : 
        estadoSecreto == 6 && letra == 'O' ? alert("SCRETO MAGICO") : estadoSecreto = 0;

        console.log(estadoSecreto);
    })




}