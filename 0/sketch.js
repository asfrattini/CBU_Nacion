var termo1;
var termo2;
var termo3;
var termo4;
var flechaY = 270;
var estado1;
var estado2;
var estado3;
var estado4;
var cancion1;
var cancion2;
var cancion3;
var cancion4;

var tipografia;

var estado = 1;


function preload(){
 termo1 = loadImage("Termometro/Termo-01.png"); 
 termo2 = loadImage("Termometro/Termo-02.png");
 termo3 = loadImage("Termometro/Termo-03.png"); 
 termo4 = loadImage("Termometro/Termo-04.png"); 
 flecha = loadImage("Termometro/Flecha-05.png");
  
  cancion1 = loadSound("Estado1/Estado1_mezcla.mp3");
  cancion2 = loadSound("Estado2/Estado2_mezcla.mp3");
  cancion3 = loadSound("Estado3/Estado3_mezcla.mp3");
  cancion4 = loadSound("Estado4/Estado4_mezcla.mp3");

  estado4 = loadImage("Estado4/Estado4-09.png");
  estado3 = loadImage("Estado3/Estado3-08.png");
  estado2 = loadImage("Estado2/Estado2-07.png");
  estado1 = loadImage("Estado1/Estado1-06.png");
  tipografia = loadFont("Fuente/CALIBRI.TTF");
}

function setup() {
  createCanvas(1280, 1024);
}

function draw() {
	background(255);
  textFont(tipografia);
  textSize(35);
  
  text("TERMÓMETRO DE", 20, 50);
  text("COLOMBIANIDAD", 20, 85);
  
  textSize(17);
  text("(Mueve la flecha y elige el nivel que quieres ver)", 20, 110);
  image(flecha, 0, flechaY, 50, 37);

  
  if (mouseIsPressed) {
    if (mouseX > 0 && mouseX < 50) {
      if (mouseY > 134 && mouseY < 269) { 
        flechaY = mouseY;

        if (mouseY + 20 > 154 && mouseY + 20 < 187) {
          estado = 4;
        } else if (mouseY + 20 >= 187 && mouseY + 20 < 220) {
          estado = 3;
        } else if (mouseY + 20 >= 220 && mouseY + 20 < 253) {
          estado = 2;
        } else if (mouseY + 20 >= 253 && mouseY + 20 < 287) {
          estado = 1;
        }

      }

    }
  }
  
  
  if(estado == 1){
    image(termo1, -50, 90, 300, 319);
    image(estado1, 0, 0);
    
    if(!cancion1.isPlaying() || cancion2.isPlaying() || cancion3.isPlaying() || cancion4.isPlaying()){
    cancion1.play();
    cancion2.stop();
    cancion3.stop();
    cancion4.stop();
    }
  } else if(estado == 2){
    image(termo2, -50, 90, 300, 319);
    image(estado2, 0, 0);
    
    if(!cancion2.isPlaying() || cancion1.isPlaying() || cancion3.isPlaying() || cancion4.isPlaying()){
      cancion2.play();
      cancion1.stop();
      cancion3.stop();
      cancion4.stop();
    }
  } else if(estado == 3){
    image(termo3, -50, 90, 300, 319);
    image(estado3, 0, 0);
    
    if(!cancion3.isPlaying() || cancion1.isPlaying() || cancion2.isPlaying() || cancion4.isPlaying()){
      cancion1.stop();
      cancion2.stop();
      cancion3.setVolume(0.4);
      cancion3.play();
      cancion4.stop();
    }
    
  } else if(estado == 4){
    image(termo4, -50, 90, 300, 319);
    image(estado4, 0, 0);
    
    if(!cancion4.isPlaying() || cancion1.isPlaying() || cancion2.isPlaying() || cancion3.isPlaying()){
      cancion4.setVolume(0.5);
      cancion4.play();
      cancion1.stop();
      cancion2.stop();
      cancion3.stop();
    }
  }
}