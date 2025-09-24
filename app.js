// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos=[];

function agregarAmigo(){
     let userInput = document.getElementById("amigo").value; 
     let cont=0;
    if(userInput === ''){
       alert("Ingresa un valor");
       console.log("ponga un valor pelotudo");
    } else{
        listaAmigos.push('<li>'+userInput+'<li>');
        asignaTextoElemento('ul',listaAmigos);
        cont++;
    }
    boxClean();
console.log("test");
console.log(listaAmigos);
console.log(listaAmigos.length);
return;
}


//Limpiar campo de texto
function boxClean(){
    document.querySelector('#amigo').value = '';
}

//Asignar texto en elemento de pagina
function asignaTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function sortearAmigo(){
    let randomNumber = Math.floor(Math.random()*listaAmigos.length)+1;
    console.log(randomNumber);
    asignaTextoElemento('ul',`El amigo ganador es:  ${listaAmigos[randomNumber - 1]}`);
   return;
}
