let baseURL = "https://github.com/AdrianNF2005/San-Valero-Projectors/raw/refs/heads/main/LONG-VIDEOS/VideoFondoDinoDuck%20-%20";
let videoElement;
let videoIndex = 1; // Comienza en 1
let totalVideos = 70; // Total de videos en la secuencia

function setup() {
  createCanvas(800, 600); // Tamaño del canvas
  videoElement = createVideo([`${baseURL}${videoIndex}of70.mp4`], videoLoaded); // Carga el primer video
  videoElement.size(800, 600);
  videoElement.hide(); // Oculta los controles del video
  videoElement.onended(nextVideo); // Detecta cuando el video termina
}

function videoLoaded() {
  videoElement.play(); // Reproduce el video al cargar
}

function nextVideo() {
  videoIndex++; // Avanza al siguiente video
  if (videoIndex > totalVideos) {
    videoIndex = 1; // Reinicia la secuencia si llega al final
  }
  videoElement.attribute('src', `${baseURL}${videoIndex}of70.mp4`); // Cambia la fuente del video
  videoElement.play(); // Reproduce el nuevo video
}

function draw() {
  background(0); // Fondo negro
  image(videoElement, 0, 0, width, height); // Dibuja el video en el canvas
}
