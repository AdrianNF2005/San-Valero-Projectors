let basePath = "/LONG-VIDEOS/VideoFondoDinoDuck - "; // Ruta base local
let videoElement;
let videoIndex = 1; // Comienza en 1
let totalVideos = 70; // Total de videos en la secuencia

function setup() {
  createCanvas(800, 600); // Tamaño del canvas
  
  // Cargar el primer video
  loadNextVideo();
}

function loadNextVideo() {
  // Construir la ruta local del video
  let videoPath = `${basePath}${videoIndex}of70.mp4`;
  
  // Crear el video y ocultar controles
  videoElement = createVideo([videoPath], videoLoaded);
  videoElement.size(800, 600); // Ajustar el tamaño del video
  videoElement.hide(); // Ocultar los controles del video
  videoElement.onended(nextVideo); // Detectar cuando el video termina
}

function videoLoaded() {
  videoElement.play(); // Reproducir el video cuando se carga
}

function nextVideo() {
  videoIndex++; // Avanzar al siguiente video
  if (videoIndex > totalVideos) {
    videoIndex = 1; // Reiniciar la secuencia si llega al final
  }
  
  // Detener el video actual y cargar el siguiente
  videoElement.stop(); // Detener el video actual
  loadNextVideo(); // Cargar el siguiente video
}

function draw() {
  background(0); // Fondo negro
  if (videoElement) {
    image(videoElement, 0, 0, width, height); // Dibujar el video en el canvas
  }
}
