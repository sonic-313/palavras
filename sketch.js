let palavra;

function setup() {
  createCanvas(400 , 400);
  palavra = palavraAleatoria();
}

function palavraAleatoria(){
  let palavras = ["explosivo", "piadista", "talentoso", "emocional"];
  return random(palavras);
}

function inicializaCores(){
  background("red");
  fill("black");
  textSize(70);
  textAlign(CENTER, CENTER);
}

  function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}


function draw() {
  inicializaCores();
  let parcial = palavraParcial(0, width);
  text(parcial, 200, 200);
  
 /* if (mouseX < 50){
    let palavra = "P";
    text(palavra, 200, 200);
  } else if(mouseX < 100){
    let palavra = "Pi";
    text(palavra, 200, 200);
  } else if(mouseX < 150){
    let palavra = "Pip";
    text(palavra, 200, 200);
  } else if(mouseX < 200){
    let palavra = "Pipo";
    text(palavra, 200, 200);
  } else if(mouseX < 250){
    let palavra = "Pipok";
    text(palavra, 200, 200);
  } else if(mouseX < 300){
    let palavra = "Pipoki";
    text(palavra, 200, 200);
  } else if(mouseX < 350){
    let palavra = "Pipokin";
    text(palavra, 200, 200);
  } else if(mouseX < 400){
    let palavra = "Pipokinh";
    text(palavra, 200, 200);
  } else if(mouseX < 450){
    let palavra = "Pipokinha";
    text(palavra, 200, 200);
  } */
}