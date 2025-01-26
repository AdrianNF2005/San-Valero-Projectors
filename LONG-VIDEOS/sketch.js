let myVideo;

function preload() {
  // Carga el video desde la URL de GitHub
  myVideo = createVideo('https://github.com/AdrianNF2005/San-Valero-Projectors/raw/refs/heads/main/LONG-VIDEOS/VideoFondoDinoDuck%20-%2010of70.mp4');
}

function setup() {
  createCanvas(800, 600);
  myVideo.size(800, 600); // Ajusta el tamaño del video al canvas
  myVideo.loop();         // Reproduce el video en bucle
  myVideo.hide();         // Oculta el elemento HTML del video
}

function draw() {
  background(0);
  image(myVideo, 0, 0, width, height); // Dibuja el video en el canvas
}
