
let ID_PROYECTOR = 1; //Cambiar este ID en funcion del proyector asignado.

var firebaseConfig = {
  apiKey: "AIzaSyDF_0fXUVHiauVr83vsVIqBMkoXjNzRKlY",
  authDomain: "san-valero-4b07e.firebaseapp.com",
  databaseURL:
    "https://san-valero-4b07e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "san-valero-4b07e",
  storageBucket: "san-valero-4b07e.firebasestorage.app",
  messagingSenderId: "200137559098",
  appId: "1:200137559098:web:eab160b3bd45ba282ab903",
  measurementId: "G-0BS3YBJ3KG", 
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

let URLOpened = false;

let sonido;
let audioCargando = false; // Para evitar que se recargue el audio en bucle

let SubidaTextCredits = 300;

let SubidaTextCredits2 = -700;

let MaxYmouse = 720;
let MinYmouse = 0;

let TasaMustreo = 5;

let FloatIcon = -1.5;

let TransicionIMG = 0;

let NUser = 1;

let DataShareIcon = 1;
let JuegoSVIcon = 1;
let RecomendadoIcon = 1;
let SVOnlineIcon = 1;

let FloatLeyenda = 0;

let OpacidadAllIcons = 0;

let GameOpacity = 255;

let posicionIMG = 1;
let posicionIMGini = 0;

let JuegoSeleccionadoData = -1;

let posIMG0 = 1280 / 2 - 1280 * 0.7;
let posIMG1 = 1280 / 2 - 1280 * 0.43;
let posIMG2 = 1280 / 2 - 1280 * 0.245;
let posIMG3 = 1280 / 2;
let posIMG4 = 1280 / 2 + 1280 * 0.245;
let posIMG5 = 1280 / 2 + 1280 * 0.43;
let posIMG6 = 1280 / 2 + 1280 * 0.7;

let MultiplicadoIMG1 = 0.37;
let MultiplicadoIMG2 = 0.26;
let MultiplicadoIMG3 = 0.2;
let MultiplicadoIMG4 = 0.00001;

let Tamaño0 = posIMG3;
let Tamaño1 = posIMG4;
let Tamaño2 = posIMG5;
let Tamaño3 = posIMG6;
let Tamaño4 = posIMG6;
let Tamaño5 = posIMG6;
let Tamaño6 = posIMG6;
let Tamaño7 = posIMG6;
let Tamaño8 = posIMG0;
let Tamaño9 = posIMG0;
let Tamaño10 = posIMG0;
let Tamaño11 = posIMG0;
let Tamaño12 = posIMG0;
let Tamaño13 = posIMG0;
let Tamaño14 = posIMG1;
let Tamaño15 = posIMG2;

let posicion0 = MultiplicadoIMG1;
let posicion1 = MultiplicadoIMG2;
let posicion2 = MultiplicadoIMG3;
let posicion3 = MultiplicadoIMG4;
let posicion4 = MultiplicadoIMG4;
let posicion5 = MultiplicadoIMG4;
let posicion6 = MultiplicadoIMG4;
let posicion7 = MultiplicadoIMG4;
let posicion8 = MultiplicadoIMG4;
let posicion9 = MultiplicadoIMG4;
let posicion10 = MultiplicadoIMG4;
let posicion11 = MultiplicadoIMG4;
let posicion12 = MultiplicadoIMG4;
let posicion13 = MultiplicadoIMG4;
let posicion14 = MultiplicadoIMG3;
let posicion15 = MultiplicadoIMG2;

let ACTTamaño0 = Tamaño0;
let ACTTamaño1 = Tamaño1;
let ACTTamaño2 = Tamaño2;
let ACTTamaño3 = Tamaño3;
let ACTTamaño4 = Tamaño4;
let ACTTamaño5 = Tamaño5;
let ACTTamaño6 = Tamaño6;
let ACTTamaño7 = Tamaño7;
let ACTTamaño8 = Tamaño8;
let ACTTamaño9 = Tamaño9;
let ACTTamaño10 = Tamaño10;
let ACTTamaño11 = Tamaño11;
let ACTTamaño12 = Tamaño12;
let ACTTamaño13 = Tamaño13;
let ACTTamaño14 = Tamaño14;
let ACTTamaño15 = Tamaño15;

let ACTposicion0 = posicion0;
let ACTposicion1 = posicion1;
let ACTposicion2 = posicion2;
let ACTposicion3 = posicion3;
let ACTposicion4 = posicion4;
let ACTposicion5 = posicion5;
let ACTposicion6 = posicion6;
let ACTposicion7 = posicion7;
let ACTposicion8 = posicion8;
let ACTposicion9 = posicion9;
let ACTposicion10 = posicion10;
let ACTposicion11 = posicion11;
let ACTposicion12 = posicion12;
let ACTposicion13 = posicion13;
let ACTposicion14 = posicion14;
let ACTposicion15 = posicion15;

let BACTTamaño0 = Tamaño0;
let BACTTamaño1 = Tamaño1;
let BACTTamaño2 = Tamaño2;
let BACTTamaño3 = Tamaño3;
let BACTTamaño4 = Tamaño4;
let BACTTamaño5 = Tamaño5;
let BACTTamaño6 = Tamaño6;
let BACTTamaño7 = Tamaño7;
let BACTTamaño8 = Tamaño8;
let BACTTamaño9 = Tamaño9;
let BACTTamaño10 = Tamaño10;
let BACTTamaño11 = Tamaño11;
let BACTTamaño12 = Tamaño12;
let BACTTamaño13 = Tamaño13;
let BACTTamaño14 = Tamaño14;
let BACTTamaño15 = Tamaño15;

let BACTposicion0 = posicion0;
let BACTposicion1 = posicion1;
let BACTposicion2 = posicion2;
let BACTposicion3 = posicion3;
let BACTposicion4 = posicion4;
let BACTposicion5 = posicion5;
let BACTposicion6 = posicion6;
let BACTposicion7 = posicion7;
let BACTposicion8 = posicion8;
let BACTposicion9 = posicion9;
let BACTposicion10 = posicion10;
let BACTposicion11 = posicion11;
let BACTposicion12 = posicion12;
let BACTposicion13 = posicion13;
let BACTposicion14 = posicion14;
let BACTposicion15 = posicion15;

let millisRefresData = -60000;

let CalibracionPantalla;

let images = [];
let videos = [];
let currentImageIndex = 0;
let nextImageIndex = 1;
let currentVideoIndex = 0;
let imageSlideCounter = 0;
let mode = "blackScreen"; // Empezamos con pantalla negra
let imageTimer = 0;
let blackScreenDuration = 1000; // 5 segundos de pantalla negra
let imageDisplayDuration = 20000; // Duración de cada imagen (3 segundos)
let ytApiReady = false;
let player;
let videoContainer;
let maxImages = 0;
let animDuration = 1000; // Duración de la animación para cada imagen
let animStartTime = 0;
let transitioning = false;
let ImagePrev;
let ImagePrev2;

let TiempoUnderProyector = 10000;
//let TiempoUnderProyector = 1000;
let proyectorMillisANT = 0;
let Etapa = -1;
let OpcacidadTrans = 0;

let MostrarImagenesVideos = false;
let TemporizadorMinTempPir = 0;
let TemporizadorMinTempPir2 = 0;
let TiempoPirDebeEstarEncendido = 16000;
let TiempoPirApagadoMin = 8000;

let started = false; // Variable para controlar el inicio

let stars = [];
let maxStars = 30;

let font;
var dots = [];
var things;
let down = false;
var placed = 0;
let opac = 255;
var wide;
let a = 0;
let easing = 0.1;
let hours;
let minutes;
let seconds;
let TemperaturaDegrees = 0;
let HumidityDegrees = 0;
let PreasureDegrees = 0;

let iframe;
let urls = [
  "https://adriannf2005.github.io/Game1/",
  "https://adriannf2005.github.io/Game2/",
  "https://adriannf2005.github.io/Game3/",
  "https://adriannf2005.github.io/Game4/",
  "https://adriannf2005.github.io/Game5/",
  "https://adriannf2005.github.io/Game6/",
  "https://adriannf2005.github.io/Game7/",
  "https://adriannf2005.github.io/Game8/",
  "https://adriannf2005.github.io/Game9/",
  "https://adriannf2005.github.io/Game10/",
  "https://adriannf2005.github.io/Game11/",
]; // Lista de URLs

let categories = ["ACTUALIDAD", "EVENTOS", "OTROS"]; // Orden de prioridad
let currentCategoryIndex = 0;
let imgIndex = 1;
let currentImage;
let errorImage;
let categoryHasImages = false; // Variable para saber si una categoría tiene imágenes

let r = 0;
let g = 0;
let b = 0;

let ano;
let mes;
let dia;
let diaSem;
let bissexto;
let daysNumber;
let daySquare = 100;
let weekDaysFull = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];
let weekdays = ["L", "M", "X", "J", "V", "S", "D"];
let nameMonth = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
let days = [];
let d;
let f;
let img;
let years = [];

let VolumenAltavoz = -1;

let videoFinishSignal = false;

let weatherData;
let temperature, humidity, pressure, windSpeed;
let weatherCode;
let weatherIconUrl;
let weatherIcon;
let lastUpdateTime = 0; // Tiempo de la última actualización
let updateInterval = 10 * 60 * 1000; // 10 minutos en milisegundos (600,000 ms)

let startX, startY, endX, endY;
let posX, posY;
let startTime;
let duration;
let angle = 0;
let rotationSpeed;
let isWaiting = false;
let waitStartTime;
let waitDuration;

let VolverActualizarDatos = true;

let PistaAudio = 0;

let FadeCalibracion = 0;

let MusicaTestTrack = 4;

let videoPlayed = false;

let TransparenciaCalibracion = 0;

let VecesTotalEncendido = -1;

let VecesTotalJuego0 = -1;

let VecesTotalJuego1 = -1;

let VecesTotalJuego2 = -1;

let VecesTotalJuego3 = -1;

let VecesTotalJuego4 = -1;

let VecesTotalJuego5 = -1;

let VecesTotalJuego6 = -1;

let VecesTotalJuego7 = -1;

let VecesTotalJuego8 = -1;

let VecesTotalJuego9 = -1;

let VecesTotalJuego10 = -1;

let ContarVecesEncendido = true;

function UsoDeJuego0(data) {
  VecesTotalJuego0 = data.val();
}

function UsoDeJuego1(data) {
  VecesTotalJuego1 = data.val();
}

function UsoDeJuego2(data) {
  VecesTotalJuego2 = data.val();
}

function UsoDeJuego3(data) {
  VecesTotalJuego3 = data.val();
}

function UsoDeJuego4(data) {
  VecesTotalJuego4 = data.val();
}

function UsoDeJuego5(data) {
  VecesTotalJuego5 = data.val();
}

function UsoDeJuego6(data) {
  VecesTotalJuego6 = data.val();
}

function UsoDeJuego7(data) {
  VecesTotalJuego7 = data.val();
}

function UsoDeJuego8(data) {
  VecesTotalJuego8 = data.val();
}

function UsoDeJuego9(data) {
  VecesTotalJuego9 = data.val();
}

function UsoDeJuego10(data) {
  VecesTotalJuego10 = data.val();
}

function VecesEncendidoProyector(data) {
  VecesTotalEncendido = data.val();
}

function Calibracion(data) {
  CalibracionPantalla = data.val();
}

function Volumen(data) {
  VolumenAltavoz = data.val();
}

function GetPistaN(data) {
  PistaAudio = data.val();
}

function preload() {
  font = loadFont(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Fonts/font.ttf"
  );
  video = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Video%20Bot.mp4"
  );
  video.hide();
  WallPaper = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/WallPapers/" +
      floor(random(1, 10)) +
      ".png"
  );

  Fuente1 = loadFont(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Fonts/Font1.otf"
  );
  Fuente2 = loadFont(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Fonts/Font2.ttf"
  );
  Fuente3 = loadFont(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Fonts/Font3.otf"
  );
  Fuente4 = loadFont(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Fonts/SuperMario256.ttf"
  );

  CalibracionIMG2 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/PantallaInicio/TestAudioVisuales2.png"
  );
  
  CalibracionIMG1 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/PantallaInicio/TestAudioVisuales.png"
  );
  
  AlturaIcon = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AlturaIcon.png"
  );
  ClimaIcon = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Clima.png"
  );
  IconTiempo = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/IconTiempo.png"
  );
  SVLOGO = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/SV%20DUCK.png"
  );
  Corners = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Corners.png"
  );
  Border = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Border.png"
  );
  errorImage = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/ERROR.png"
  );
  DuckSpace = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AstronautDuck.png"
  );

  videos = loadStrings(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/VIDEOS/Enlaces%20Videos.txt"
  );

  // Imágenes del menú de juegos
  IG0 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/DuckTris.png"
  );
  IG1 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/JustDanceSV.png"
  );
  IG2 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/4%20en%20Raya.png"
  );
  IG3 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/PongSv.png"
  );
  IG4 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/Flappy%20Duck.png"
  );
  IG5 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/Airconsole.png"
  );
  IG6 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/RompeBloques.png"
  );
  IG7 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/DinoDuck.png"
  );
  IG8 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/Doodle%20Jump.png"
  );
  IG9 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/DriveMad.png"
  );
  IG10 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/Tap%20Tap%20Shots.png"
  );
  IG11 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/RainbowStacker.png"
  );
  IG12 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/FlipBottle.png"
  );
  IG13 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Creditos/BorderClipCreditos.png"
  );
  IG14 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/DuckBlingsSV.png"
  );
  IG15 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/DuckBusters.png"
  );

  DataShare = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/MenuJuegos/Data%20share.png"
  );
  GameSV = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/MenuJuegos/GameSanValero.png"
  );
  Leyenda = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/MenuJuegos/Leyenda.png"
  );
  Recomendado = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/MenuJuegos/Recomendado.png"
  );
  SVOnline = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/MenuJuegos/SV%20Online.png"
  );
  UserIcon = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/MenuJuegos/UsuarioIcon.png"
  );
  GameSystem = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/MenuJuegos/GameSystem.png"
  );

  // Pantallas de calibración
  Pantalla0 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Calibraci%C3%B3n/Pantalla%20de%20calibraci%C3%B3n.png"
  );
  Pantalla1 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Calibraci%C3%B3n/Pantalla1.png"
  );
  Pantalla2 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Calibraci%C3%B3n/Pantalla2.png"
  );
  Pantalla3 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Calibraci%C3%B3n/Pantalla3.png"
  );
  Pantalla4 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Calibraci%C3%B3n/Pantalla4.png"
  );
  CornersCal = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Calibraci%C3%B3n/Corners.png"
  );

  BorderVideo = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/SOLO%20BORDE%20NO%20USAR.png"
  );

  TEXTCreditos = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Creditos/Creditos%20Text.png"
  );

  musicaCreditos = loadSound(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Creditos/Musica%20MarioKart.mp3"
  );

  MusicDuckBlings = loadSound(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Video%20Principal/DuckBlings.mp3"
  );

  MusicDuckBusters = loadSound(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Video%20Principal/DuckBusters.mp3"
  );

  MusicDuckTris = loadSound(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Video%20Principal/DuckTris.mp3"
  );
  
  MusicaTest1 = loadSound(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/PantallaInicio/Skyhook%20–%20Soundtrack%20(2019).mp3"
  );
  MusicaTest2 = loadSound(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/PantallaInicio/Trust%20–%20Soundtrack%20(2019).mp3"
  );
  MusicaTest3 = loadSound(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/PantallaInicio/Black%20Holes%202021%20–%20Soundtrack%20(2021).mp3"
  );
  MusicaTest4 = loadSound(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/PantallaInicio/Behind%20the%20Lies%20–%20Soundtrack%20(2021).mp3"
  );

  // Video de calibración
  VideoCalibracion = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Blue%20Streaks%20Abstract%20Shapes%20Geometric%20Moving%20Animated%20Background%20Loop.mp4"
  );
  VideoCalibracion.hide();

  VIDEO4Raya = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/4%20en%20Raya.mp4"
  );
  VIDEO4Raya.hide();

  VIDEOAirConsole = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/AirConsole.mp4"
  );
  VIDEOAirConsole.hide();

  VIDEOBottleFlip = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/BottleFlip.mp4"
  );
  VIDEOBottleFlip.hide();

  VIDEODinoDuck = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/DinoDuck.mp4"
  );
  VIDEODinoDuck.hide();

  VIDEODoodleJump = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/Doodle%20Jump.mp4"
  );
  VIDEODoodleJump.hide();

  VIDEODriveMad = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/DriveMad.mp4"
  );
  VIDEODriveMad.hide();

  VIDEOFlappyDuck = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/Flappy%20Duck.mp4"
  );
  VIDEOFlappyDuck.hide();

  VIDEOPongSV = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/PongSV.mp4"
  );
  VIDEOPongSV.hide();

  VIDEORainbow = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/Rainbow%20Stacker.mp4"
  );
  VIDEORainbow.hide();

  VIDEORompeBloques = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/Rompe%20bloques.mp4"
  );
  VIDEORompeBloques.hide();

  VIDEOTapTap = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/Tap%20Tap%20SHOTS.mp4"
  );
  VIDEOTapTap.hide();

  VIDEOJustDanceSV = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Video%20Principal/JustDanceSV.mp4"
  );
  VIDEOJustDanceSV.hide();
  
  VIDEOInicioProyector = createVideo("https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/PantallaInicio/VideoInicio.mp4"); // Carga el video
  video.hide(); // Oculta los controles del video (se dibujará en el canvas)
  video.onended(() => {
    videoPlayed = true; // Cambia el estado cuando el video termine
  });
  VIDEOInicioProyector.hide();

  VIDEOCreditos = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Creditos/Video%20De%20fondo%20Final%203MB.mp4"
  );
  VIDEOCreditos.hide();
}

function setup() {
  
    // Aplica un efecto de fade-out exagerado y oculta el loader
    let loadingScreen = document.getElementById('p5_loading');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 200); // Desaparece lentamente en 1.2s
    }
  
  TransicionIMG = HALF_PI;
  today();
  redo();
  loadNextImage();
  setInterval(loadNextImage, 10000); // Cambia cada 10 segundos
  createCanvas(1280, 720);
  gfx = createGraphics(
    daySquare * weekdays.length,
    daySquare * Math.ceil((daysNumber + f) / weekdays.length) + 100
  ); // Crea el gráfico
  if (16 - day() < 1) {
    days = 31 - day() + 16;
  } else {
    days = 16 - day();
  }
  textSize(width / 3);
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);

  getWeatherData();

  setNewPositions(); // Establecer los primeros puntos de inicio y fin

  createCalendar(gfx, 0, 0, 1);

  loadImagesFromRepo("IMAGENES", 1); // Cargar imágenes desde el repositorio
  videos = videos.map((s) => s.trim()).filter((s) => s.length > 0);

  // Cargar la API de YouTube
  let tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
  VIDEOInicioProyector.time(0); // Establece el tiempo de inicio en 56 segundos
  
  VIDEO4Raya.volume(0);
  VIDEOAirConsole.volume(0);
  VIDEOBottleFlip.volume(0);
  VIDEODinoDuck.volume(0);
  VIDEODoodleJump.volume(0);
  VIDEODriveMad.volume(0);
  VIDEOFlappyDuck.volume(0);
  VIDEOPongSV.volume(0);
  VIDEORainbow.volume(0);
  VIDEORompeBloques.volume(0);
  VIDEOTapTap.volume(0);
  VIDEOJustDanceSV.volume(0);
  
    ref = database.ref("Juegos/CuatroRaya/Partida1");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida2");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida3");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida1CuatroRayaPlayer");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida2CuatroRayaPlayer");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida3CuatroRayaPlayer");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida1Fin");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida2Fin");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida3Fin");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida1PlayerPos");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida2PlayerPos");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida3PlayerPos");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida1Hour");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida2Hour");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida3Hour");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida1Min");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida2Min");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida3Min");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida1Sec");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida2Sec");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida3Sec");

    ref.set(0);
    
    
    
    ref = database.ref("Juegos/SVPong/BallVXPlay1");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/BallVXPlay2");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/BallVXPlay3");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/BallVYPlay1");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/BallVYPlay2");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/BallVYPlay3");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/BallXPlay1");

    ref.set(640);
    
    ref = database.ref("Juegos/SVPong/BallXPlay2");

    ref.set(640);
    
    ref = database.ref("Juegos/SVPong/BallXPlay3");

    ref.set(640);
    
    ref = database.ref("Juegos/SVPong/BallYPlay1");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/BallYPlay2");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/BallYPlay3");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/MaxTouchLocal1");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/MaxTouchLocal2");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/MaxTouchLocal3");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/Partida1");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/Partida2");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/Partida3");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/Player1PosPartida1");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/Player1PosPartida2");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/Player1PosPartida3");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/Player2PosPartida1");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/Player2PosPartida2");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/Player2PosPartida3");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/ScorePlayer1Game1");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/ScorePlayer1Game2");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/ScorePlayer1Game3");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/ScorePlayer2Game1");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/ScorePlayer2Game2");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/ScorePlayer2Game3");

    ref.set(0);
  
    ref = database.ref("Proyectores/InicioProyectores");

    ref.set(1);
  
    ref = database.ref("Proyectores/Proyector" + ID_PROYECTOR + "JuegoSel");
  
    ref.set(-2);
  
    ref = database.ref("Proyectores/PuntoMaximoProyector" + ID_PROYECTOR);
  
    ref.set(0);
  
    ref = database.ref("Proyectores/PuntoMinimoProyector" + ID_PROYECTOR);
  
    ref.set(720);
  
  

  
}

function draw() {
    
  background(0);
  
  if (VolumenAltavoz == -1) {
  
  ref = database.ref("Proyectores/Calibracion");
  ref.on("value", Calibracion);
  ref = database.ref("Proyectores/Volumen");
  ref.on("value", Volumen);

  console.log("CalibracionPantalla: " + CalibracionPantalla);
  console.log("VolumenAltavoz: " + VolumenAltavoz);
  
  } else {
    
  if (ContarVecesEncendido == true) {
    
  ref = database.ref("SoloInformacion/VecesEncendidoProyector" + ID_PROYECTOR);
  ref.on("value", VecesEncendidoProyector);
    
  if (VecesTotalEncendido > -1) {
    
    console.log("VecesTotalEncendido: " + (VecesTotalEncendido + 1));
        
    ref.set(VecesTotalEncendido + 1);
     
    ContarVecesEncendido = false;
    
  }
    
  }
  
  if (started == true) {
  
  if (VIDEOInicioProyector.time() <= 59) {
    
    image(VIDEOInicioProyector, 0, 0, width, height); // Dibuja el video en el canvas
    
    proyectorMillisANT = millis();
    
    if (VIDEOInicioProyector.time() >= 55 && videoFinishSignal == false) {
    
      ref = database.ref("Proyectores/InicioProyectores");

      ref.set(0);
      
      videoFinishSignal = true;
        
    }

  } else {
  
  if (millis() >= millisRefresData + 60000) {
    millisRefresData = millis();

    ref = database.ref("Proyectores/Calibracion");
    ref.on("value", Calibracion);
    ref = database.ref("Proyectores/Volumen");
    ref.on("value", Volumen);

    console.log("CalibracionPantalla: " + CalibracionPantalla);
    console.log("VolumenAltavoz: " + VolumenAltavoz);
    
    MusicaTest1.setVolume(VolumenAltavoz/100);
    MusicaTest2.setVolume(VolumenAltavoz/100);
    MusicaTest3.setVolume(VolumenAltavoz/100);
    MusicaTest4.setVolume(VolumenAltavoz/100);
    
    ref = database.ref("SoloInformacion/UltimaComunicacionProyector" + ID_PROYECTOR);

    ref.set(day() + " / " + month() + " / " + year() + "  |  " + hour() + ":" + minute() + ":" + second());
    
  }
  
  if (CalibracionPantalla != undefined) {
  
  if (CalibracionPantalla == 1) {
    
    proyectorMillisANT = millis();
    
    TransparenciaCalibracion = TransparenciaCalibracion + 60/frameRate();
    
    push();
    
    imageMode(CORNER);
    
    image(CalibracionIMG2, 0, 0, width, height);
    
    tint(255, map(sin(TransparenciaCalibracion), -1, 1, 0, 255));
    
    image(CalibracionIMG1, 0, 0, width, height);
    
    pop();
    
    if (MusicaTestTrack == 1 && !MusicaTest1.isPlaying()) {
        
      MusicaTestTrack = 2;
      
      MusicaTest2.play();
        
    } else if (MusicaTestTrack == 2 && !MusicaTest2.isPlaying()) {
        
      MusicaTestTrack = 3;
      
      MusicaTest3.play();
        
    }  else if (MusicaTestTrack == 3 && !MusicaTest3.isPlaying()) {
        
      MusicaTestTrack = 4;
      
      MusicaTest4.play();
        
    }  else if (MusicaTestTrack == 4 && !MusicaTest4.isPlaying()) {
        
      MusicaTestTrack = 1;
      
      MusicaTest1.play();
        
    }
    
   // console.log("MusicaTestTrack: " + MusicaTestTrack);
    
  } else {
    
    if (URLOpened == true) {
      
     if (VolverActualizarDatos == true) {
       
       if (JuegoSeleccionadoData == 0) {
          
         ref = database.ref("SoloInformacion/UsoDeJuego0");
         ref.on("value", UsoDeJuego0);

         if (VecesTotalJuego0 > -1) {

         ref = database.ref("SoloInformacion/UsoDeJuego0");

         ref.set(VecesTotalJuego0 + 1);

         vecesTotalJuego0 = -1;

         VolverActualizarDatos = false;

        }
         
       } else if (JuegoSeleccionadoData == 1) {
          
         ref = database.ref("SoloInformacion/UsoDeJuego1");
         ref.on("value", UsoDeJuego1);

         if (VecesTotalJuego1 > -1) {

         ref = database.ref("SoloInformacion/UsoDeJuego1");

         ref.set(VecesTotalJuego1 + 1);

         vecesTotalJuego1 = -1;

         VolverActualizarDatos = false;

        }
         
       } else if (JuegoSeleccionadoData == 2) {
          
         ref = database.ref("SoloInformacion/UsoDeJuego2");
         ref.on("value", UsoDeJuego2);

         if (VecesTotalJuego2 > -1) {

         ref = database.ref("SoloInformacion/UsoDeJuego2");

         ref.set(VecesTotalJuego2 + 1);

         vecesTotalJuego2 = -1;

         VolverActualizarDatos = false;

        }
         
       } else if (JuegoSeleccionadoData == 3) {
          
         ref = database.ref("SoloInformacion/UsoDeJuego3");
         ref.on("value", UsoDeJuego3);

         if (VecesTotalJuego3 > -1) {

         ref = database.ref("SoloInformacion/UsoDeJuego3");

         ref.set(VecesTotalJuego3 + 1);

         vecesTotalJuego3 = -1;

         VolverActualizarDatos = false;

        }
         
       } else if (JuegoSeleccionadoData == 4) {
          
         ref = database.ref("SoloInformacion/UsoDeJuego4");
         ref.on("value", UsoDeJuego4);

         if (VecesTotalJuego4 > -1) {

         ref = database.ref("SoloInformacion/UsoDeJuego4");

         ref.set(VecesTotalJuego4 + 1);

         vecesTotalJuego4 = -1;

         VolverActualizarDatos = false;

        }
         
       } else if (JuegoSeleccionadoData == 5) {
          
         ref = database.ref("SoloInformacion/UsoDeJuego5");
         ref.on("value", UsoDeJuego5);

         if (VecesTotalJuego5 > -1) {

         ref = database.ref("SoloInformacion/UsoDeJuego5");

         ref.set(VecesTotalJuego5 + 1);

         vecesTotalJuego5 = -1;

         VolverActualizarDatos = false;

        }
         
       } else if (JuegoSeleccionadoData == 6) {
          
         ref = database.ref("SoloInformacion/UsoDeJuego6");
         ref.on("value", UsoDeJuego6);

         if (VecesTotalJuego6 > -1) {

         ref = database.ref("SoloInformacion/UsoDeJuego6");

         ref.set(VecesTotalJuego6 + 1);

         vecesTotalJuego6 = -1;

         VolverActualizarDatos = false;

        }
         
       } else if (JuegoSeleccionadoData == 7) {
          
         ref = database.ref("SoloInformacion/UsoDeJuego7");
         ref.on("value", UsoDeJuego7);

         if (VecesTotalJuego7 > -1) {

         ref = database.ref("SoloInformacion/UsoDeJuego7");

         ref.set(VecesTotalJuego7 + 1);

         vecesTotalJuego7 = -1;

         VolverActualizarDatos = false;

        }
         
       } else if (JuegoSeleccionadoData == 8) {
          
         ref = database.ref("SoloInformacion/UsoDeJuego8");
         ref.on("value", UsoDeJuego8);

         if (VecesTotalJuego8 > -1) {

         ref = database.ref("SoloInformacion/UsoDeJuego8");

         ref.set(VecesTotalJuego8 + 1);

         vecesTotalJuego8 = -1;

         VolverActualizarDatos = false;

        }
         
       } else if (JuegoSeleccionadoData == 9) {
          
         ref = database.ref("SoloInformacion/UsoDeJuego9");
         ref.on("value", UsoDeJuego9);

         if (VecesTotalJuego9 > -1) {

         ref = database.ref("SoloInformacion/UsoDeJuego9");

         ref.set(VecesTotalJuego9 + 1);

         vecesTotalJuego9 = -1;

         VolverActualizarDatos = false;

        }
         
       } else if (JuegoSeleccionadoData == 10) {
          
         ref = database.ref("SoloInformacion/UsoDeJuego10");
         ref.on("value", UsoDeJuego10);

         if (VecesTotalJuego10 > -1) {

         ref = database.ref("SoloInformacion/UsoDeJuego10");

         ref.set(VecesTotalJuego10 + 1);

         vecesTotalJuego10 = -1;

         VolverActualizarDatos = false;

        }
         
       }
            
    }
      
    }
    
    if (MusicaTest1.isPlaying()) {
      MusicaTest1.stop();
    }
    if (MusicaTest2.isPlaying()) {
      MusicaTest2.stop();
    }
    if (MusicaTest3.isPlaying()) {
      MusicaTest3.stop();
    }
    if (MusicaTest4.isPlaying()) {
      MusicaTest4.stop();
    }

  if (Etapa <= -1) {
    // Etapa = 1;

    // GameMenu();

    background(0);

    image(video, 0, height * 0.5, video.width * 0.5, video.height * 0.5);

    // Asegurar que siempre haya nuevas estrellas entrando
    if (stars.length < maxStars) {
      stars.push(new Star());
    }

    // Dibujar y actualizar estrellas
    for (let i = stars.length - 1; i >= 0; i--) {
      stars[i].update();
      stars[i].show();

      // Eliminar estrellas completamente desvanecidas
      if (stars[i].alpha <= 0) {
        stars.splice(i, 1);
      }
    }

    if (isWaiting) {
      // Si estamos en estado de espera, comprobamos si ya ha pasado el tiempo de espera
      if (millis() - waitStartTime >= waitDuration) {
        isWaiting = false; // Salir del estado de espera
        setNewPositions(); // Configurar la siguiente animación
      }
    } else {
      // Calcular el tiempo transcurrido como fracción entre 0 y 1
      let t = (millis() - startTime) / duration;

      // Si t ha llegado a 1 o más, significa que hemos alcanzado el destino
      if (t >= 1) {
        // Iniciar el estado de espera
        isWaiting = true;
        waitStartTime = millis();
        waitDuration = random(5000, 10000); // Espera entre 10 y 20 segundos
      }

      // Interpolación lineal para mover la imagen de (startX, startY) a (endX, endY)
      posX = lerp(startX, endX, t);
      posY = lerp(startY, endY, t);

      // Rotación con velocidad aleatoria
      angle += rotationSpeed;

      // Dibujar la imagen con rotación en la posición actual
      push();
      translate(posX, posY);
      rotate(angle);
      imageMode(CENTER);
      image(DuckSpace, 0, 0, DuckSpace.width * 0.3, DuckSpace.height * 0.3);
      pop();
    }

    push();

    imageMode(CENTER);

    // Mostrar la imagen actual en el canvas
    if (currentImage) {
      let imgWidth = currentImage.width;
      let imgHeight = currentImage.height;

      // Ajustar el tamaño mínimo al área especificada, asegurándose de que la imagen sea al menos tan grande como el área indicada
      let scaleX = min(Border.width * 0.7, imgWidth);
      let scaleY = min(Border.height * 0.7, imgHeight);

      // Ajustar la imagen al tamaño mínimo especificado, centrado en el canvas
      image(currentImage, width * 0.82, height * 0.795, scaleX, scaleY);
    }

    image(
      Border,
      width * 0.82,
      height * 0.795,
      Border.width * 0.7,
      Border.height * 0.7
    );

    if (currentCategoryIndex == 0) {
      textSize(36);
      fill(171, 235, 198);
      textFont(Fuente3);
      strokeWeight(1);
      stroke(171, 235, 198);
      text(
        "ACTUALIDAD",
        width * 0.82,
        height * 0.55 + sin(frameCount * 0.1) * 2.2
      );
    } else if (currentCategoryIndex == 1) {
      textSize(36);
      fill(210, 180, 222);
      textFont(Fuente3);
      strokeWeight(1);
      stroke(210, 180, 222);
      text(
        "EVENTOS",
        width * 0.82,
        height * 0.55 + sin(frameCount * 0.1) * 2.2
      );
    } else {
      textSize(36);
      fill(245, 183, 177);
      textFont(Fuente3);
      strokeWeight(1);
      stroke(245, 183, 177);
      text(
        "OTROS...",
        width * 0.82,
        height * 0.55 + sin(frameCount * 0.1) * 2.2
      );
    }

    pop();
    
    imageMode(CORNER);

    noStroke();
    fill(246, 221, 204, 50);
    rect(
      width * 0.05 - 10,
      height * 0.34 - 10,
      SVLOGO.width * 0.2 + 20,
      SVLOGO.height * 0.2 + 20,
      40
    );

    image(
      SVLOGO,
      width * 0.05,
      height * 0.34,
      SVLOGO.width * 0.2,
      SVLOGO.height * 0.2
    );

    // Dibujamos el gráfico sobre el canvas principal
    image(gfx, width * 0.67, 0, gfx.width * 0.56, gfx.height * 0.52);

    push();

    translate(width * 0.67 + 20, 20);

    angleMode(DEGREES);

    rotate(180);

    image(Corners, -20, -20, 40, 40);

    pop();

    push();

    translate(width * 0.67 + gfx.width * 0.56 - 20, 20);

    rotate(270);

    image(Corners, -20, -20, 40, 40);

    pop();

    let ArcX = 645;
    let ArcY = 290;
    fill(255, 140);
    noStroke();
    rect(ArcX - 170, ArcY - 170, 340, 340, 200, 40, 200, 200);

    fill(174, 214, 241, 140);

    rect(width * 0.463, 0, width * 0.16, height * 0.155, 50, 50, 50, 50);

    noFill();
    strokeWeight(10);

    angleMode(DEGREES);

    stroke(255, 90, 150);
    arc(ArcX, ArcY, 310, 310, -90, TemperaturaDegrees - 90);
    stroke(150, 255, 90);
    arc(ArcX, ArcY, 280, 280, -90, HumidityDegrees - 90);
    stroke(150, 90, 255);
    arc(ArcX, ArcY, 250, 250, -90, PreasureDegrees - 90);

    push();
    imageMode(CENTER);
    image(ClimaIcon, width * 0.612, height * 0.21, 50, 50);

    // Mostrar la imagen del clima en el canvas
    if (weatherIcon) {
      image(weatherIcon, ArcX + 50, height * 0.08, 200, 200);
    }

    image(
      IconTiempo,
      width * 0.458,
      ArcY,
      IconTiempo.width * 0.45,
      IconTiempo.height * 0.45
    );

    // Mostrar los datos del clima en el canvas
    textSize(22);
    fill(0);
    textAlign(LEFT, CENTER);
    textFont(Fuente3);
    strokeWeight(5);
    stroke(255, 90, 150);
    text(` ${temperature}°C`, width * 0.48, ArcY - 60);
    stroke(150, 255, 90);
    text(` ${humidity}%`, width * 0.48, ArcY - 18);
    let windSpeedKmH = windSpeed * 3.6; // Convertir m/s a km/h
    stroke(150, 90, 255);
    text(` ${windSpeedKmH.toFixed(2)} km/h`, width * 0.48, ArcY + 21); // Mostrar la velocidad en km/h
    stroke(253, 235, 208);
    text(` ${pressure} hPa`, width * 0.48, ArcY + 60);

    if (TemperaturaDegrees <= -15) {
      TemperaturaDegrees = 15;
    }

    if (TemperaturaDegrees >= 52) {
      TemperaturaDegrees = 52;
    }

    if (windSpeedKmH >= 60) {
      windSpeedKmH = 60;
    }

    let temperatureNum = parseFloat(temperature);
    let humidityNum = parseFloat(humidity);

    TemperaturaDegrees = map(temperatureNum, -15, 52, 10, 360);
    HumidityDegrees = map(humidityNum, 0, 100, 10, 360);
    PreasureDegrees = map(windSpeedKmH, 0, 60, 10, 360);

    textSize(40);
    fill(b, r, g);
    textAlign(CENTER, CENTER);
    textFont(Fuente3);
    strokeWeight(2);
    stroke(b, r, g);
    text(day() + " / " + month() + " / " + year(), width * 0.19, height * 0.26);

    pop();

    // Actualizar los datos cada 10 minutos
    if (millis() - lastUpdateTime > updateInterval) {
      getWeatherData(); // Obtener nuevos datos del clima
      lastUpdateTime = millis(); // Actualizar el tiempo de la última actualización
    }

    hours = hour();

    if (minute() < 10) {
      minutes = "0" + minute();
    } else {
      minutes = minute();
    }
    if (second() < 10) {
      seconds = "0" + second();
    } else {
      seconds = second();
    }
    
    textSize(400);
    textAlign(CENTER, CENTER);
    
    things = font.textToPoints(hours + ":" + minutes + ":" + seconds, 75, 220);
    for (let i = dots.length; i < things.length; i++) {
      dots.push(new Dot(things[i].x, things[i].y, 20));
    }

    if (frameCount % 50 == 1) {
      a++;
    }
    if (easing < 0.2) {
      easing += 0.001;
    }
    if (placed == things.length - 1) {
      setTimeout(function () {
        opac -= 3;
      }, 2000);
    }
    for (var i = 0; i < dots.length; i++) {
      var ia = (i + a) % things.length;
      var disty = abs((things[ia].y - height / 2) / 10);
      var distx = abs((things[ia].x - width / 2) / 10);
      var disdance = dist(dots[i].x, dots[i].y, things[ia].x, things[ia].y);
      dots[i].x += (things[ia].x - dots[i].x) * easing;
      dots[i].y += (things[ia].y - dots[i].y) * easing;
      dots[i].show();
      dots[i].move();
    }

    if (MostrarImagenesVideos == false) {
      if (mouseX >= width * 0.6) {
        if (millis() >= TemporizadorMinTempPir + TiempoPirDebeEstarEncendido) {
          mode = "blackScreen"; // Empezamos con pantalla negra
          imageTimer = 0;
          animStartTime = 0;
          transitioning = false;

          // Configurar temporizador para iniciar después de 5 segundos de pantalla negra
          setTimeout(() => {
            mode = "showImages"; // Cambiar al modo de mostrar imágenes
            imageTimer = millis(); // Reiniciar temporizador
            startTransition(); // Iniciar transición con la imagen 1
          }, blackScreenDuration);

          MostrarImagenesVideos = true;
        }

        TemporizadorMinTempPir2 = millis();
      }

      if (mouseX <= width * 0.4) {
        if (millis() >= TemporizadorMinTempPir2 + TiempoPirApagadoMin) {
          TemporizadorMinTempPir = millis();
        }
      }
    }

    if (MostrarImagenesVideos == true) {
      MostrarIMGVid();
    }

    if (mode != "showVideo") {
      if (Etapa == -1) {
        if (mouseY >= height * 0.82) {
          proyectorMillisANT = millis();
        } else {
          //if (round(millis() - proyectorMillisANT) <= 10) {

          if (9 - round((millis() - proyectorMillisANT) / 1000) >= 0) {
            push();
            textAlign(CENTER, CENTER);
            textSize(100);
            textFont(Fuente4);
            stroke(50);
            strokeWeight(12);
            fill(231, 76, 60);
            text(9 - round((millis() - proyectorMillisANT) / 1000), 60, 50);
            pop();
          } else {
            push();
            textAlign(CENTER, CENTER);
            textSize(100);
            textFont(Fuente4);
            stroke(50);
            strokeWeight(12);
            fill(231, 76, 60);
            text(0, 60, 50);
            pop();
          }

          if (millis() >= proyectorMillisANT + TiempoUnderProyector) {
            
            Etapa = 0; //Cambiar esto a 0
          }
        }
      } else {
        GameMenu();
      }
    }
  } else {
    GameMenu();
  }
  }
  }
}

function MostrarIMGVid() {
  if (mode === "blackScreen") {
    return; // Pantalla negra, no hace nada
  }

  // Si estamos mostrando una imagen, animamos primero
  if (mode === "showImage" && images.length > 0) {
    let elapsed = millis() - animStartTime;
    let t = constrain(elapsed / animDuration, 0, 1);
    let easing = sin(t * HALF_PI); // Función de easing para animaciones suaves

    let xOffset = easing * width;

    // Mostrar la imagen actual (anterior) con animación (desplazándose de derecha a izquierda)
    let imgCurrent = images[currentImageIndex];
    image(ImagePrev, 0, 0, width, height);
    image(imgCurrent, width - xOffset, 0, width, height); // Desplazar imagen para animación

    // Mostrar la imagen siguiente (nueva imagen) deslizándose
    if (transitioning) {
      let imgNext = images[nextImageIndex];
      image(imgNext, width - (xOffset - width), 0, width, height); // Imagen siguiente
    }

    // Continuar con la animación o cambiar de imagen después de la duración
    if (millis() - imageTimer > imageDisplayDuration) {
      finishTransition(); // Finalizar la transición y mostrar la siguiente imagen
    }
  }
}
  }
}

function Dot(x, y, m) {
  this.x = x;
  this.y = y;
  this.ex = random(100);
  this.ey = random(100);
  this.moving = m;
  this.s = height / 20;

  this.move = function () {
    this.x += this.moving * (noise(this.ex + frameCount / 15) - 0.5);
    this.y += this.moving * (noise(this.ey + frameCount / 15) - 0.5);
    if (this.moving > 1) {
      this.moving -= this.moving / 50;
    }
    if (dist(mouseX, mouseY, this.x, this.y) < 5) {
      this.moving += 10;
    }
  };

  this.show = function () {
    if (this.s > 6) {
      this.s -= 1;
    }
    push();
    angleMode(RADIANS);
    noStroke();
    r = round(127 + 127 * sin(frameCount * 0.005));
    g = round(127 + 127 * sin(frameCount * 0.005 + TWO_PI / 3));
    b = round(127 + 127 * sin(frameCount * 0.005 + (2 * TWO_PI) / 3));
    fill(r + 70, g + 70, b + 70);
    ellipse(this.x * 0.35, this.y * 0.35 + height * 0.08, this.s * 0.8);
    pop();
  };
}
  
}

function redo() {
  isBissex();
  d = new Date(ano, mes - 1, dia).getDay();
  f = (new Date(ano, mes - 1, 1).getDay() + 6) % 7; // Ajustar para que lunes sea el primer día
  monthDays();
}

function today() {
  ano = year();
  mes = month();
  dia = day();
}

function isBissex() {
  bissexto = ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0);
}

function monthDays() {
  // Validación para asegurarnos de que el número de días es correcto
  if ([0, 2, 4, 6, 7, 9, 11].includes(mes - 1)) {
    daysNumber = 31;
  } else if ([3, 5, 8, 10].includes(mes - 1)) {
    daysNumber = 30;
  } else {
    daysNumber = bissexto ? 29 : 28;
  }

  days = Array.from({ length: daysNumber }, (_, i) => (i + 1).toString());
}

function createCalendar(gfx, x, y, z) {
  let rows = Math.ceil((daysNumber + f) / weekdays.length);

  gfx.clear(); // Limpiamos el gráfico antes de dibujar
  gfx.push();
  gfx.imageMode(CENTER);
  gfx.tint(255, 200);
  gfx.image(
    WallPaper,
    x + (WallPaper.width / 4) * z,
    y + (WallPaper.height / 2) * z,
    WallPaper.width * z,
    WallPaper.height * z
  );
  gfx.pop();

  // Nombre del mes
  gfx.fill(0);
  gfx.noStroke();
  gfx.textSize(50 * z);
  gfx.textAlign(CENTER, CENTER);
  gfx.textFont(Fuente1);
  gfx.stroke(255);
  gfx.strokeWeight(5);
  gfx.text(
    nameMonth[mes - 1] + " - " + ano,
    gfx.width / 2 + x,
    daySquare / 2 + y - 27
  );

  // Días de la semana con fondo redondeado
  for (let i = 0; i < weekdays.length; i++) {
    gfx.fill(200);
    gfx.noStroke();
    gfx.rect(
      i * daySquare * z + 5 + x,
      daySquare * z - 25 + y - 10,
      daySquare * z - 10,
      30 * z,
      10
    ); // Bordes redondeados
    gfx.fill(0);
    gfx.textFont(Fuente2);
    gfx.textSize(20 * z);
    gfx.textAlign(CENTER, CENTER);
    gfx.text(
      weekdays[i],
      i * daySquare * z + (daySquare * z) / 2 + x,
      daySquare * z - 10 + y - 12
    );
  }

  // Cuadrícula del calendario con bordes redondeados
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < weekdays.length; j++) {
      gfx.fill(255, 60);
      gfx.strokeWeight(2);
      gfx.stroke(0);
      gfx.rect(
        j * daySquare * z + 5 + x,
        (i + 1) * daySquare * z + 5 + y,
        daySquare * z - 10,
        daySquare * z - 10,
        10
      );
    }
  }

  // Días del mes
  let col = f;
  let row = 0;
  for (let i = 0; i < daysNumber; i++) {
    gfx.fill(
      ano === year() && mes === month() && dia === i + 1 ? "red" : "black"
    );
    gfx.textSize(30 * z);
    gfx.textAlign(CENTER, CENTER);
    gfx.stroke(255);
    gfx.strokeWeight(1);
    gfx.text(
      i + 1,
      col * daySquare * z + (daySquare * z) / 2 + x,
      (row + 1) * daySquare * z + (daySquare * z) / 2 + y
    );

    col++;
    if (col === weekdays.length) {
      col = 0;
      row++;
    }
  }
}

function getWeatherData() {
  const api_key = "8b35f74d94f587666e40a0ba5f9f7791";
  const city = "Zaragoza"; // Ciudad a la que hacer la consulta
  const units = "metric"; // Unidades en grados Celsius

  // URL de la API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${api_key}`;

  loadJSON(url, gotData); // Obtener los datos en formato JSON
}

function gotData(data) {
  // Guardar los datos obtenidos
  weatherData = data;

  // Extraer los datos relevantes
  temperature = weatherData.main.temp;
  humidity = weatherData.main.humidity;
  pressure = weatherData.main.pressure;
  windSpeed = weatherData.wind.speed;

  // Obtener el código del ícono del clima (por ejemplo, "09d")
  weatherCode = weatherData.weather[0].icon;

  // Crear la URL del ícono del clima
  weatherIconUrl = `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;
  weatherIcon = loadImage(weatherIconUrl); // Cargar la imagen del ícono
}

// Función para cargar la siguiente imagen en la secuencia
function loadNextImage() {
  if (Etapa <= -1) {
    if (currentCategoryIndex >= categories.length) {
      // Si ya recorrió todas las categorías, reiniciar desde la primera
      currentCategoryIndex = 0;
      imgIndex = 1;
    }

    let category = categories[currentCategoryIndex];
    let imgUrl = `https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/${category}/${imgIndex}.png`;

    loadImage(
      imgUrl,
      (img) => {
        currentImage = img; // Imagen cargada correctamente
        categoryHasImages = true; // Confirmamos que hay imágenes en esta categoría
        imgIndex++; // Pasar a la siguiente imagen dentro de la categoría
      },
      () => {
        imgIndex++; // Intentar con la siguiente imagen en la misma categoría
        if (imgIndex > 10) {
          // Si falla 10 veces, cambiar de categoría
          if (!categoryHasImages) {
            currentImage = errorImage; // Mostrar imagen de error si no hubo imágenes en toda la categoría
          }
          imgIndex = 1; // Reiniciar índice de imágenes
          categoryHasImages = false; // Resetear la variable
          currentCategoryIndex++; // Pasar a la siguiente categoría
        }
        loadNextImage(); // Intentar cargar otra imagen
      }
    );
  }
}

function setNewPositions() {
  // Establecer un punto de inicio y fin aleatorio en el borde
  [startX, startY] = getRandomEdgePoint();
  [endX, endY] = getRandomEdgePoint();

  // Reiniciar tiempo de inicio y establecer duración aleatoria entre 10 y 20 segundos
  startTime = millis();
  duration = random(8000, 20000); // Tiempo que tardará en llegar al punto final

  // Generar una velocidad de rotación aleatoria entre -0.04 y 0.04
  rotationSpeed = random(-0.04, 0.04);
}

function getRandomEdgePoint() {
  let edge = floor(random(4));
  switch (edge) {
    case 0:
      return [-width * 0.2, random(-height * 0.1, height * 1.1)]; // Borde izquierdo
    case 1:
      return [width * 1.2, random(-height * 0.1, height * 1.1)]; // Borde derecho
    case 2:
      return [random(-width * 0.2, width * 1.1), -height * 0.1]; // Borde superior
    case 3:
      return [random(-width * 0.2, width * 1.1), height * 1.1]; // Borde inferior
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(2, 6);
    this.alpha = 0; // Comienza invisible
    this.fadeIn = true;
    this.lifetime = 200 + int(random(0, 100)); // Cada estrella tiene su propio tiempo
    this.fullyVisibleTime = frameCount + this.lifetime;
  }

  update() {
    if (this.fadeIn) {
      this.alpha += 3; // Aumenta opacidad más rápido
      if (this.alpha >= 255) {
        this.alpha = 255;
        this.fadeIn = false;
      }
    } else if (frameCount >= this.fullyVisibleTime) {
      this.alpha -= 3; // Reduce opacidad lentamente después de su tiempo individual
    }
  }

  show() {
    noStroke();
    fill(255, this.alpha);
    ellipse(this.x, this.y, this.size);
  }
}

function loadImagesFromRepo(category, imgIndex) {
  if (Etapa <= -1) {
    let url = `https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/${category}/${imgIndex}.png`;

    loadImage(
      url,
      (img) => {
        images.push(img);
        maxImages = imgIndex;
        loadImagesFromRepo(category, imgIndex + 1); // Cargar la siguiente imagen
      },
      (err) => {
        console.log(
          `No se encontró la imagen: ${imgIndex}.png. Total imágenes: ${maxImages}`
        );
      }
    );
  }
}

function startTransition() {
  transitioning = true; // Activar la transición
  animStartTime = millis(); // Marcar el inicio de la animación
  mode = "showImage"; // Cambiar al modo de mostrar imagen
  imageTimer = millis(); // Reiniciar temporizador para la imagen
  ImagePrev = get();
}

function finishTransition() {
  imageSlideCounter++;

  if (imageSlideCounter % 3 === 0) {
    // Después de cada 3 imágenes, mostrar el video
    startVideo();
    currentImageIndex = nextImageIndex;
    nextImageIndex = (currentImageIndex + 1) % images.length; // Definir el siguiente índice de imagen
  } else {
    // Si no es el tercer conjunto de imágenes, cambiar a la siguiente
    currentImageIndex = nextImageIndex;
    nextImageIndex = (currentImageIndex + 1) % images.length; // Definir el siguiente índice de imagen
    startTransition(); // Iniciar animación de la siguiente imagen
  }
}

function startVideo() {
  mode = "showVideo"; // Cambiar a modo de video
  //imageSlideCounter = 5; // Reiniciar contador de imágenes

  if (!ytApiReady) {
    console.log("Esperando API de YouTube...");
    setTimeout(startVideo, 500);
    return;
  }

  // Crear el contenedor para el video
  if (!videoContainer) {
    videoContainer = createDiv();
    videoContainer.id("video-container");
    videoContainer.style("position", "absolute");
    videoContainer.style("top", "0px");
    videoContainer.style("left", "0px");
    videoContainer.style("width", width + "px");
    videoContainer.style("height", height + "px");
    videoContainer.style("z-index", "10");
  } else {
    videoContainer.show();
  }

  // Cargar el video de YouTube usando la ID
  let videoURL = videos[currentVideoIndex];
  let videoID = extractVideoID(videoURL);

  player = new YT.Player("video-container", {
    height: height,
    width: width,
    videoId: videoID,
    playerVars: { autoplay: 1, controls: 1 },
    events: { onStateChange: onPlayerStateChange },
  });
}

// Función para extraer el ID del video de YouTube
function extractVideoID(url) {
  let videoID = "";
  if (url.includes("youtu.be/")) {
    videoID = url.split("youtu.be/")[1];
  } else if (url.includes("watch?v=")) {
    let parts = url.split("watch?v=");
    videoID = parts[1].split("&")[0];
  }
  return videoID;
}

// Función para manejar el estado del video
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    videoEnded();
  }
}

// Función que se llama cuando el video termina
function videoEnded() {
  TemporizadorMinTempPir = millis();
  MostrarImagenesVideos = false;
  if (player) {
    player.destroy();
    player = null;
  }
  if (videoContainer) {
    videoContainer.hide();
  }
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  mode = "blackScreen"; // Volver a pantalla negra

  setTimeout(() => {
    mode = "showImages"; // Iniciar ciclo de imágenes nuevamente
    startTransition(); // Mostrar la primera imagen después de la pantalla negra
  }, blackScreenDuration);
}

// Función llamada cuando la API de YouTube está lista
function onYouTubeIframeAPIReady() {
  ytApiReady = true;
}

function GameMenu() {
  if (Etapa == 0) {
    push();
    textAlign(CENTER, CENTER);
    textSize(100);
    textFont(Fuente4);
    stroke(50);
    fill(231, 76, 60);
    text(0, 60, 50);
    pop();

    OpcacidadTrans = OpcacidadTrans + 10;

    noStroke();

    fill(0, 0, 0, OpcacidadTrans);

    rect(0, 0, width, height);

    if (OpcacidadTrans >= 255) {
      Etapa = 1;

      VideoCalibracion.play();
    }
  } else if (Etapa == 1) {
    image(VideoCalibracion, 0, 0, width, height);

    image(CornersCal, 0, 0, width, height);

    push();

    tint(255, 200);

    image(Pantalla0, 0, 0, width, height);

    pop();

    OpcacidadTrans = OpcacidadTrans - 10;

    if (OpcacidadTrans >= 0) {
      noStroke();

      fill(0, 0, 0, OpcacidadTrans);

      rect(0, 0, width, height);
    }

    if (OpcacidadTrans <= -200) {
      Etapa = 2;

      OpcacidadTrans = 0;
    }
  } else if (Etapa == 2) {
    image(VideoCalibracion, 0, 0, width, height);

    image(CornersCal, 0, 0, width, height);

    push();

    tint(255, 200);

    image(Pantalla0, 0, 0, width, height);

    tint(255, OpcacidadTrans);

    image(Pantalla1, 430, 55, Pantalla1.width * 0.74, Pantalla1.height * 0.74);

    pop();

    OpcacidadTrans = OpcacidadTrans + 10;

    if (OpcacidadTrans >= 1000) {
      if (FloatIcon < HALF_PI) {
        FloatIcon = FloatIcon + 0.1;
      } else {
        FloatIcon = HALF_PI;
      }

      let AlturaRaton = mouseY;

      if (AlturaRaton >= height * 0.89) {
        AlturaRaton = height * 0.89;
      }

      if (AlturaRaton <= height * 0.04) {
        AlturaRaton = height * 0.04;
      }

      let smoothed = smoothVariable(AlturaRaton);

      image(
        AlturaIcon,
        0,
        map(
          sin(FloatIcon),
          -HALF_PI,
          HALF_PI,
          height * 1.5,
          smoothed * 1.1 - AlturaIcon.height * 1.12
        ),
        AlturaIcon.width * 0.6,
        AlturaIcon.height * 0.6
      );

      textSize(36);
      fill(171, 235, 198);
      textFont(Fuente3);
      strokeWeight(2);
      stroke(0, 0, 222);
      text(
        round(map(smoothed, height * 0.04, height * 0.89, 9, 0)),
        71,
        map(
          sin(FloatIcon),
          -HALF_PI,
          HALF_PI,
          height * 1.5,
          smoothed * 1.1 - AlturaIcon.height * 1.12
        ) + 71
      );

      Etapa = 3;

      OpcacidadTrans = 255;
    }
  } else if (Etapa == 3) {
    image(VideoCalibracion, 0, 0, width, height);

    image(CornersCal, 0, 0, width, height);

    push();

    tint(255, 200);

    image(Pantalla0, 0, 0, width, height);

    let OpacidadLocal;

    if (OpcacidadTrans < 0) {
      OpacidadLocal = 0;
    } else {
      OpacidadLocal = OpcacidadTrans;
    }

    tint(255, OpacidadLocal);

    image(Pantalla1, 430, 55, Pantalla1.width * 0.74, Pantalla1.height * 0.74);

    tint(255, 255 - OpacidadLocal);

    image(Pantalla2, 430, 55, Pantalla1.width * 0.74, Pantalla1.height * 0.74);

    pop();

    OpcacidadTrans = OpcacidadTrans - 10;

    if (OpcacidadTrans <= 0) {
      if (FloatIcon < HALF_PI) {
        FloatIcon = FloatIcon + 0.1;
      } else {
        FloatIcon = HALF_PI;
      }

      let AlturaRaton = mouseY;

      if (AlturaRaton >= height * 0.89) {
        AlturaRaton = height * 0.89;
      }

      if (AlturaRaton <= height * 0.04) {
        AlturaRaton = height * 0.04;
      }

      let smoothed = smoothVariable(AlturaRaton);

      image(
        AlturaIcon,
        0,
        map(
          sin(FloatIcon),
          -HALF_PI,
          HALF_PI,
          height * 1.5,
          smoothed * 1.1 - AlturaIcon.height * 1.12
        ),
        AlturaIcon.width * 0.6,
        AlturaIcon.height * 0.6
      );

      textSize(36);
      fill(171, 235, 198);
      textFont(Fuente3);
      strokeWeight(2);
      stroke(0, 0, 222);
      text(
        round(map(smoothed, height * 0.04, height * 0.89, 9, 0)),
        71,
        map(
          sin(FloatIcon),
          -HALF_PI,
          HALF_PI,
          height * 1.5,
          smoothed * 1.1 - AlturaIcon.height * 1.12
        ) + 71
      );

      if (TasaMustreo == 0) {
        MaxYmouse = mouseY;

        TasaMustreo = 5;

        Etapa = 4;

        OpcacidadTrans = 255;

        console.log();
      } else if (TasaMustreo == 5) {
        TasaMustreo = 4;

        millisMuestreo = millis();
      } else if (TasaMustreo == 1) {
        textSize(65);
        fill(0, 209, 84);
        textFont(Fuente3);
        strokeWeight(10);
        stroke(40);
        text("OK", width * 0.53, height * 0.32);

        if (millis() >= millisMuestreo + 2000) {
          TasaMustreo = TasaMustreo - 1;
          millisMuestreo = millis();
        }
      } else {
        if (millis() >= millisMuestreo + 2000) {
          TasaMustreo = TasaMustreo - 1;
          millisMuestreo = millis();
        }
      }
    }
  } else if (Etapa == 4) {
    image(VideoCalibracion, 0, 0, width, height);

    image(CornersCal, 0, 0, width, height);

    push();

    tint(255, 200);

    image(Pantalla0, 0, 0, width, height);

    let OpacidadLocal;

    if (OpcacidadTrans < 0) {
      OpacidadLocal = 0;
    } else {
      OpacidadLocal = OpcacidadTrans;
    }

    tint(255, OpacidadLocal);

    image(Pantalla2, 430, 55, Pantalla1.width * 0.74, Pantalla1.height * 0.74);

    tint(255, 255 - OpacidadLocal);

    image(Pantalla3, 430, 55, Pantalla1.width * 0.74, Pantalla1.height * 0.74);

    pop();

    OpcacidadTrans = OpcacidadTrans - 10;

    if (OpcacidadTrans <= 0) {
      if (FloatIcon < HALF_PI) {
        FloatIcon = FloatIcon + 0.1;
      } else {
        FloatIcon = HALF_PI;
      }

      let AlturaRaton = mouseY;

      if (AlturaRaton >= height * 0.89) {
        AlturaRaton = height * 0.89;
      }

      if (AlturaRaton <= height * 0.04) {
        AlturaRaton = height * 0.04;
      }

      let smoothed = smoothVariable(AlturaRaton);

      image(
        AlturaIcon,
        0,
        map(
          sin(FloatIcon),
          -HALF_PI,
          HALF_PI,
          height * 1.5,
          smoothed * 1.1 - AlturaIcon.height * 1.12
        ),
        AlturaIcon.width * 0.6,
        AlturaIcon.height * 0.6
      );

      textSize(36);
      fill(171, 235, 198);
      textFont(Fuente3);
      strokeWeight(2);
      stroke(0, 0, 222);
      text(
        round(map(smoothed, height * 0.04, height * 0.89, 9, 0)),
        71,
        map(
          sin(FloatIcon),
          -HALF_PI,
          HALF_PI,
          height * 1.5,
          smoothed * 1.1 - AlturaIcon.height * 1.12
        ) + 71
      );

      if (TasaMustreo == 0) {
        MinYmouse = mouseY;

        TasaMustreo = 5;

        Etapa = 5;

        OpcacidadTrans = 255;

        console.log();
      } else if (TasaMustreo == 5) {
        TasaMustreo = 4;

        millisMuestreo = millis();
      } else if (TasaMustreo == 1) {
        textSize(65);
        fill(0, 209, 84);
        textFont(Fuente3);
        strokeWeight(10);
        stroke(40);
        text("OK", width * 0.55, height * 0.33);

        if (millis() >= millisMuestreo + 2000) {
          TasaMustreo = TasaMustreo - 1;
          millisMuestreo = millis();
        }
      } else {
        if (millis() >= millisMuestreo + 2000) {
          TasaMustreo = TasaMustreo - 1;
          millisMuestreo = millis();
        }
      }
    }
  } else if (Etapa == 5) {
    image(VideoCalibracion, 0, 0, width, height);

    image(CornersCal, 0, 0, width, height);

    push();

    tint(255, 200);

    image(Pantalla0, 0, 0, width, height);

    let OpacidadLocal;

    if (OpcacidadTrans < 0) {
      OpacidadLocal = 0;
    } else {
      OpacidadLocal = OpcacidadTrans;
    }

    tint(255, OpacidadLocal);

    image(Pantalla3, 430, 55, Pantalla1.width * 0.74, Pantalla1.height * 0.74);

    tint(255, 255 - OpacidadLocal);

    image(Pantalla4, 430, 55, Pantalla1.width * 0.74, Pantalla1.height * 0.74);

    pop();

    OpcacidadTrans = OpcacidadTrans - 10;

    if (OpcacidadTrans <= -500) {
      Etapa = 6;

      OpcacidadTrans = 255;
    }

    if (FloatIcon < HALF_PI) {
      FloatIcon = FloatIcon + 0.1;
    } else {
      FloatIcon = HALF_PI;
    }

    let AlturaRaton = mouseY;

    if (AlturaRaton >= height * 0.89) {
      AlturaRaton = height * 0.89;
    }

    if (AlturaRaton <= height * 0.04) {
      AlturaRaton = height * 0.04;
    }

    let smoothed = smoothVariable(AlturaRaton);

    image(
      AlturaIcon,
      0,
      map(
        sin(FloatIcon),
        -HALF_PI,
        HALF_PI,
        height * 1.5,
        smoothed * 1.1 - AlturaIcon.height * 1.12
      ),
      AlturaIcon.width * 0.6,
      AlturaIcon.height * 0.6
    );

    textSize(36);
    fill(171, 235, 198);
    textFont(Fuente3);
    strokeWeight(2);
    stroke(0, 0, 222);
    text(
      round(map(smoothed, height * 0.04, height * 0.89, 9, 0)),
      71,
      map(
        sin(FloatIcon),
        -HALF_PI,
        HALF_PI,
        height * 1.5,
        smoothed * 1.1 - AlturaIcon.height * 1.12
      ) + 71
    );
  } else if (Etapa == 6) {
    image(VideoCalibracion, 0, 0, width, height);

    image(CornersCal, 0, 0, width, height);

    push();

    tint(255, 200);

    image(Pantalla0, 0, 0, width, height);

    pop();

    image(Pantalla4, 430, 55, Pantalla1.width * 0.74, Pantalla1.height * 0.74);

    if (OpcacidadTrans >= 0) {
      fill(0, 255 - OpcacidadTrans);
    } else {
      fill(0, 255);
    }

    rect(0, 0, width, height);

    OpcacidadTrans = OpcacidadTrans - 10;

    if (OpcacidadTrans <= 0) {
      
      ref = database.ref("Proyectores/Proyector" + ID_PROYECTOR + "JuegoSel");
      ref.set(-1);
      
      Etapa = 7;
      
      proyectorMillisANT = millis();

      OpcacidadTrans = 0;
    }
  } else if (Etapa == 7) {
    
    if (URLOpened == false) {
      noStroke();

      fill(0, 0, 0);

      rect(0, 0, width, height);

      push();

      if (posicionIMG == 0) {
        NUser = 2;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG3;
        Tamaño1 = posIMG4;
        Tamaño2 = posIMG5;
        Tamaño3 = posIMG6;
        Tamaño4 = posIMG6;
        Tamaño5 = posIMG6;
        Tamaño6 = posIMG6;
        Tamaño7 = posIMG6;
        Tamaño8 = posIMG0;
        Tamaño9 = posIMG0;
        Tamaño10 = posIMG0;
        Tamaño11 = posIMG0;
        Tamaño12 = posIMG0;
        Tamaño13 = posIMG0;
        Tamaño14 = posIMG1;
        Tamaño15 = posIMG2;

        posicion0 = MultiplicadoIMG1;
        posicion1 = MultiplicadoIMG2;
        posicion2 = MultiplicadoIMG3;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG3;
        posicion15 = MultiplicadoIMG2;
      } else if (posicionIMG == 1) {
        NUser = 4;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 1;
        SVOnlineIcon = 1;

        Tamaño0 = posIMG2;
        Tamaño1 = posIMG3;
        Tamaño2 = posIMG4;
        Tamaño3 = posIMG5;
        Tamaño4 = posIMG6;
        Tamaño5 = posIMG6;
        Tamaño6 = posIMG6;
        Tamaño7 = posIMG6;
        Tamaño8 = posIMG6;
        Tamaño9 = posIMG6;
        Tamaño10 = posIMG0;
        Tamaño11 = posIMG0;
        Tamaño12 = posIMG0;
        Tamaño13 = posIMG0;
        Tamaño14 = posIMG0;
        Tamaño15 = posIMG1;

        posicion0 = MultiplicadoIMG2;
        posicion1 = MultiplicadoIMG1;
        posicion2 = MultiplicadoIMG2;
        posicion3 = MultiplicadoIMG3;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG3;
      } else if (posicionIMG == 2) {
        NUser = 2;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 0;
        SVOnlineIcon = 1;

        Tamaño0 = posIMG1;
        Tamaño1 = posIMG2;
        Tamaño2 = posIMG3;
        Tamaño3 = posIMG4;
        Tamaño4 = posIMG5;
        Tamaño5 = posIMG6;
        Tamaño6 = posIMG6;
        Tamaño7 = posIMG6;
        Tamaño8 = posIMG6;
        Tamaño9 = posIMG6;
        Tamaño10 = posIMG0;
        Tamaño11 = posIMG0;
        Tamaño12 = posIMG0;
        Tamaño13 = posIMG0;
        Tamaño14 = posIMG0;
        Tamaño15 = posIMG0;

        posicion0 = MultiplicadoIMG3;
        posicion1 = MultiplicadoIMG2;
        posicion2 = MultiplicadoIMG1;
        posicion3 = MultiplicadoIMG2;
        posicion4 = MultiplicadoIMG3;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 3) {
        NUser = 2;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 1;
        SVOnlineIcon = 1;

        Tamaño0 = posIMG0;
        Tamaño1 = posIMG1;
        Tamaño2 = posIMG2;
        Tamaño3 = posIMG3;
        Tamaño4 = posIMG4;
        Tamaño5 = posIMG5;
        Tamaño6 = posIMG6;
        Tamaño7 = posIMG6;
        Tamaño8 = posIMG6;
        Tamaño9 = posIMG6;
        Tamaño10 = posIMG6;
        Tamaño11 = posIMG6;
        Tamaño12 = posIMG6;
        Tamaño13 = posIMG6;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG0;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG3;
        posicion2 = MultiplicadoIMG2;
        posicion3 = MultiplicadoIMG1;
        posicion4 = MultiplicadoIMG2;
        posicion5 = MultiplicadoIMG3;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 4) {
        NUser = 1;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG0;
        Tamaño1 = posIMG0;
        Tamaño2 = posIMG1;
        Tamaño3 = posIMG2;
        Tamaño4 = posIMG3;
        Tamaño5 = posIMG4;
        Tamaño6 = posIMG5;
        Tamaño7 = posIMG6;
        Tamaño8 = posIMG6;
        Tamaño9 = posIMG6;
        Tamaño10 = posIMG6;
        Tamaño11 = posIMG6;
        Tamaño12 = posIMG6;
        Tamaño13 = posIMG6;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG3;
        posicion3 = MultiplicadoIMG2;
        posicion4 = MultiplicadoIMG1;
        posicion5 = MultiplicadoIMG2;
        posicion6 = MultiplicadoIMG3;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 5) {
        NUser = 8;

        DataShareIcon = 0;
        JuegoSVIcon = 0;
        RecomendadoIcon = 1;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG0;
        Tamaño1 = posIMG0;
        Tamaño2 = posIMG0;
        Tamaño3 = posIMG1;
        Tamaño4 = posIMG2;
        Tamaño5 = posIMG3;
        Tamaño6 = posIMG4;
        Tamaño7 = posIMG5;
        Tamaño8 = posIMG6;
        Tamaño9 = posIMG6;
        Tamaño10 = posIMG6;
        Tamaño11 = posIMG6;
        Tamaño12 = posIMG6;
        Tamaño13 = posIMG6;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG3;
        posicion4 = MultiplicadoIMG2;
        posicion5 = MultiplicadoIMG1;
        posicion6 = MultiplicadoIMG2;
        posicion7 = MultiplicadoIMG3;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 6) {
        NUser = 1;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG0;
        Tamaño1 = posIMG0;
        Tamaño2 = posIMG0;
        Tamaño3 = posIMG0;
        Tamaño4 = posIMG1;
        Tamaño5 = posIMG2;
        Tamaño6 = posIMG3;
        Tamaño7 = posIMG4;
        Tamaño8 = posIMG5;
        Tamaño9 = posIMG6;
        Tamaño10 = posIMG6;
        Tamaño11 = posIMG6;
        Tamaño12 = posIMG6;
        Tamaño13 = posIMG6;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG3;
        posicion5 = MultiplicadoIMG2;
        posicion6 = MultiplicadoIMG1;
        posicion7 = MultiplicadoIMG2;
        posicion8 = MultiplicadoIMG3;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 7) {
        NUser = 1;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG0;
        Tamaño1 = posIMG0;
        Tamaño2 = posIMG0;
        Tamaño3 = posIMG0;
        Tamaño4 = posIMG0;
        Tamaño5 = posIMG1;
        Tamaño6 = posIMG2;
        Tamaño7 = posIMG3;
        Tamaño8 = posIMG4;
        Tamaño9 = posIMG5;
        Tamaño10 = posIMG6;
        Tamaño11 = posIMG6;
        Tamaño12 = posIMG6;
        Tamaño13 = posIMG6;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG3;
        posicion6 = MultiplicadoIMG2;
        posicion7 = MultiplicadoIMG1;
        posicion8 = MultiplicadoIMG2;
        posicion9 = MultiplicadoIMG3;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 8) {
        NUser = 1;

        DataShareIcon = 0;
        JuegoSVIcon = 0;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG6;
        Tamaño1 = posIMG0;
        Tamaño2 = posIMG0;
        Tamaño3 = posIMG0;
        Tamaño4 = posIMG0;
        Tamaño5 = posIMG0;
        Tamaño6 = posIMG1;
        Tamaño7 = posIMG2;
        Tamaño8 = posIMG3;
        Tamaño9 = posIMG4;
        Tamaño10 = posIMG5;
        Tamaño11 = posIMG6;
        Tamaño12 = posIMG6;
        Tamaño13 = posIMG6;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG3;
        posicion7 = MultiplicadoIMG2;
        posicion8 = MultiplicadoIMG1;
        posicion9 = MultiplicadoIMG2;
        posicion10 = MultiplicadoIMG3;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 9) {
        NUser = 1;

        DataShareIcon = 0;
        JuegoSVIcon = 0;
        RecomendadoIcon = 1;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG6;
        Tamaño1 = posIMG6;
        Tamaño2 = posIMG0;
        Tamaño3 = posIMG0;
        Tamaño4 = posIMG0;
        Tamaño5 = posIMG0;
        Tamaño6 = posIMG0;
        Tamaño7 = posIMG1;
        Tamaño8 = posIMG2;
        Tamaño9 = posIMG3;
        Tamaño10 = posIMG4;
        Tamaño11 = posIMG5;
        Tamaño12 = posIMG6;
        Tamaño13 = posIMG6;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG3;
        posicion8 = MultiplicadoIMG2;
        posicion9 = MultiplicadoIMG1;
        posicion10 = MultiplicadoIMG2;
        posicion11 = MultiplicadoIMG3;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 10) {
        NUser = 1;

        DataShareIcon = 0;
        JuegoSVIcon = 0;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG6;
        Tamaño1 = posIMG6;
        Tamaño2 = posIMG6;
        Tamaño3 = posIMG6;
        Tamaño4 = posIMG0;
        Tamaño5 = posIMG0;
        Tamaño6 = posIMG0;
        Tamaño7 = posIMG0;
        Tamaño8 = posIMG1;
        Tamaño9 = posIMG2;
        Tamaño10 = posIMG3;
        Tamaño11 = posIMG4;
        Tamaño12 = posIMG5;
        Tamaño13 = posIMG6;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG3;
        posicion9 = MultiplicadoIMG2;
        posicion10 = MultiplicadoIMG1;
        posicion11 = MultiplicadoIMG2;
        posicion12 = MultiplicadoIMG3;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 11) {
        NUser = 1;

        DataShareIcon = 0;
        JuegoSVIcon = 0;
        RecomendadoIcon = 1;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG6;
        Tamaño1 = posIMG6;
        Tamaño2 = posIMG6;
        Tamaño3 = posIMG6;
        Tamaño4 = posIMG6;
        Tamaño5 = posIMG0;
        Tamaño6 = posIMG0;
        Tamaño7 = posIMG0;
        Tamaño8 = posIMG0;
        Tamaño9 = posIMG1;
        Tamaño10 = posIMG2;
        Tamaño11 = posIMG3;
        Tamaño12 = posIMG4;
        Tamaño13 = posIMG5;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG3;
        posicion10 = MultiplicadoIMG2;
        posicion11 = MultiplicadoIMG1;
        posicion12 = MultiplicadoIMG2;
        posicion13 = MultiplicadoIMG3;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 12) {
        NUser = 1;

        DataShareIcon = 0;
        JuegoSVIcon = 0;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG6;
        Tamaño1 = posIMG6;
        Tamaño2 = posIMG6;
        Tamaño3 = posIMG6;
        Tamaño4 = posIMG6;
        Tamaño5 = posIMG6;
        Tamaño6 = posIMG0;
        Tamaño7 = posIMG0;
        Tamaño8 = posIMG0;
        Tamaño9 = posIMG0;
        Tamaño10 = posIMG1;
        Tamaño11 = posIMG2;
        Tamaño12 = posIMG3;
        Tamaño13 = posIMG4;
        Tamaño14 = posIMG5;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG3;
        posicion11 = MultiplicadoIMG2;
        posicion12 = MultiplicadoIMG1;
        posicion13 = MultiplicadoIMG2;
        posicion14 = MultiplicadoIMG3;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 13) {
        NUser = 0;

        DataShareIcon = 0;
        JuegoSVIcon = 1;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG6;
        Tamaño1 = posIMG6;
        Tamaño2 = posIMG6;
        Tamaño3 = posIMG6;
        Tamaño4 = posIMG6;
        Tamaño5 = posIMG6;
        Tamaño6 = posIMG0;
        Tamaño7 = posIMG0;
        Tamaño8 = posIMG0;
        Tamaño9 = posIMG0;
        Tamaño10 = posIMG0;
        Tamaño11 = posIMG1;
        Tamaño12 = posIMG2;
        Tamaño13 = posIMG3;
        Tamaño14 = posIMG4;
        Tamaño15 = posIMG5;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG3;
        posicion12 = MultiplicadoIMG2;
        posicion13 = MultiplicadoIMG1;
        posicion14 = MultiplicadoIMG2;
        posicion15 = MultiplicadoIMG3;
      } else if (posicionIMG == 14) {
        NUser = 8;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 0;
        SVOnlineIcon = 1;

        Tamaño0 = posIMG5;
        Tamaño1 = posIMG6;
        Tamaño2 = posIMG6;
        Tamaño3 = posIMG6;
        Tamaño4 = posIMG6;
        Tamaño5 = posIMG6;
        Tamaño6 = posIMG0;
        Tamaño7 = posIMG0;
        Tamaño8 = posIMG0;
        Tamaño9 = posIMG0;
        Tamaño10 = posIMG0;
        Tamaño11 = posIMG0;
        Tamaño12 = posIMG1;
        Tamaño13 = posIMG2;
        Tamaño14 = posIMG3;
        Tamaño15 = posIMG4;

        posicion0 = MultiplicadoIMG3;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG3;
        posicion13 = MultiplicadoIMG2;
        posicion14 = MultiplicadoIMG1;
        posicion15 = MultiplicadoIMG2;
      } else if (posicionIMG == 15) {
        NUser = 6;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG4;
        Tamaño1 = posIMG5;
        Tamaño2 = posIMG6;
        Tamaño3 = posIMG6;
        Tamaño4 = posIMG6;
        Tamaño5 = posIMG6;
        Tamaño6 = posIMG0;
        Tamaño7 = posIMG0;
        Tamaño8 = posIMG0;
        Tamaño9 = posIMG0;
        Tamaño10 = posIMG0;
        Tamaño11 = posIMG0;
        Tamaño12 = posIMG0;
        Tamaño13 = posIMG1;
        Tamaño14 = posIMG2;
        Tamaño15 = posIMG3;

        posicion0 = MultiplicadoIMG2;
        posicion1 = MultiplicadoIMG3;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG3;
        posicion14 = MultiplicadoIMG2;
        posicion15 = MultiplicadoIMG1;
      }

      imageMode(CENTER);

      image(
        IG0,
        BACTposicion0,
        height / 2,
        IG5.width * BACTTamaño0,
        IG5.height * BACTTamaño0
      );
      image(
        IG1,
        BACTposicion1,
        height / 2,
        IG5.width * BACTTamaño1,
        IG5.height * BACTTamaño1
      );
      image(
        IG2,
        BACTposicion2,
        height / 2,
        IG5.width * BACTTamaño2,
        IG5.height * BACTTamaño2
      );
      image(
        IG3,
        BACTposicion3,
        height / 2,
        IG5.width * BACTTamaño3,
        IG5.height * BACTTamaño3
      );
      image(
        IG4,
        BACTposicion4,
        height / 2,
        IG5.width * BACTTamaño4,
        IG5.height * BACTTamaño4
      );
      image(
        IG5,
        BACTposicion5,
        height / 2,
        IG5.width * BACTTamaño5,
        IG5.height * BACTTamaño5
      );
      image(
        IG6,
        BACTposicion6,
        height / 2,
        IG5.width * BACTTamaño6,
        IG5.height * BACTTamaño6
      );
      image(
        IG7,
        BACTposicion7,
        height / 2,
        IG5.width * BACTTamaño7,
        IG5.height * BACTTamaño7
      );
      image(
        IG8,
        BACTposicion8,
        height / 2,
        IG5.width * BACTTamaño8,
        IG5.height * BACTTamaño8
      );
      image(
        IG9,
        BACTposicion9,
        height / 2,
        IG5.width * BACTTamaño9,
        IG5.height * BACTTamaño9
      );
      image(
        IG10,
        BACTposicion10,
        height / 2,
        IG5.width * BACTTamaño10,
        IG5.height * BACTTamaño10
      );
      image(
        IG11,
        BACTposicion11,
        height / 2,
        IG5.width * BACTTamaño11,
        IG5.height * BACTTamaño11
      );
      image(
        IG12,
        BACTposicion12,
        height / 2,
        IG5.width * BACTTamaño12,
        IG5.height * BACTTamaño12
      );

      image(
        VIDEOCreditos,
        BACTposicion13,
        height / 2,
        IG5.width * BACTTamaño13,
        IG5.height * BACTTamaño13
      );

      image(
        IG13,
        BACTposicion13,
        height / 2,
        IG5.width * BACTTamaño13,
        IG5.height * BACTTamaño13
      );
      image(
        IG14,
        BACTposicion14,
        height / 2,
        IG5.width * BACTTamaño14,
        IG5.height * BACTTamaño14
      );
      image(
        IG15,
        BACTposicion15,
        height / 2,
        IG5.width * BACTTamaño15,
        IG5.height * BACTTamaño15
      );

      if (posicionIMG == 2 && posicionIMGini == 2) {
        if (OpacidadAllIcons == 795) {
          VIDEO4Raya.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEO4Raya.time() < VIDEO4Raya.duration()
        ) {
          image(
            VIDEO4Raya,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 3 && posicionIMGini == 3) {
        if (OpacidadAllIcons == 795) {
          VIDEOPongSV.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEOPongSV.time() < VIDEOPongSV.duration()
        ) {
          image(
            VIDEOPongSV,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 4 && posicionIMGini == 4) {
        if (OpacidadAllIcons == 795) {
          VIDEOFlappyDuck.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEOFlappyDuck.time() < VIDEOFlappyDuck.duration()
        ) {
          image(
            VIDEOFlappyDuck,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 5 && posicionIMGini == 5) {
        if (OpacidadAllIcons == 795) {
          VIDEOAirConsole.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEOAirConsole.time() < VIDEOAirConsole.duration()
        ) {
          image(
            VIDEOAirConsole,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 6 && posicionIMGini == 6) {
        if (OpacidadAllIcons == 795) {
          VIDEORompeBloques.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEORompeBloques.time() < VIDEORompeBloques.duration()
        ) {
          image(
            VIDEORompeBloques,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 7 && posicionIMGini == 7) {
        if (OpacidadAllIcons == 795) {
          VIDEODinoDuck.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEODinoDuck.time() < VIDEODinoDuck.duration()
        ) {
          image(
            VIDEODinoDuck,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 8 && posicionIMGini == 8) {
        if (OpacidadAllIcons == 795) {
          VIDEODoodleJump.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEODoodleJump.time() < VIDEODoodleJump.duration()
        ) {
          image(
            VIDEODoodleJump,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 9 && posicionIMGini == 9) {
        if (OpacidadAllIcons == 795) {
          VIDEODriveMad.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEODriveMad.time() < VIDEODriveMad.duration()
        ) {
          image(
            VIDEODriveMad,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 10 && posicionIMGini == 10) {
        if (OpacidadAllIcons == 795) {
          VIDEOTapTap.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEOTapTap.time() < VIDEOTapTap.duration()
        ) {
          image(
            VIDEOTapTap,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 11 && posicionIMGini == 11) {
        if (OpacidadAllIcons == 795) {
          VIDEORainbow.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEORainbow.time() < VIDEORainbow.duration()
        ) {
          image(
            VIDEORainbow,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 12 && posicionIMGini == 12) {
        if (OpacidadAllIcons == 795) {
          VIDEOBottleFlip.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEOBottleFlip.time() < VIDEOBottleFlip.duration()
        ) {
          image(
            VIDEOBottleFlip,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 13 && posicionIMGini == 13) {
        //Creditos

        if (OpacidadAllIcons == 400) {
          musicaCreditos.play();
        }

        SubidaTextCredits = SubidaTextCredits + 30 / frameRate();

        if (SubidaTextCredits > height * 2.75) {
          SubidaTextCredits = 0;
        }

        SubidaTextCredits2 = SubidaTextCredits2 + 30 / frameRate();

        if (SubidaTextCredits2 > height * 2.75) {
          SubidaTextCredits2 = 0;
        }

        if (OpacidadAllIcons >= 400) {
          if (OpacidadAllIcons < 800) {
            push();

            tint(255, map(OpacidadAllIcons, 400, 800, 0, 255));

            image(
              TEXTCreditos,
              posIMG3,
              height +
                (TEXTCreditos.height * MultiplicadoIMG1 * 0.9) / 2 -
                SubidaTextCredits,
              TEXTCreditos.width * MultiplicadoIMG1 * 0.9,
              TEXTCreditos.height * MultiplicadoIMG1 * 0.9
            );

            pop();
          } else {
            image(
              TEXTCreditos,
              posIMG3,
              height +
                (TEXTCreditos.height * MultiplicadoIMG1 * 0.9) / 2 -
                SubidaTextCredits,
              TEXTCreditos.width * MultiplicadoIMG1 * 0.9,
              TEXTCreditos.height * MultiplicadoIMG1 * 0.9
            );

            image(
              TEXTCreditos,
              posIMG3,
              height +
                (TEXTCreditos.height * MultiplicadoIMG1 * 0.9) / 2 -
                SubidaTextCredits2,
              TEXTCreditos.width * MultiplicadoIMG1 * 0.9,
              TEXTCreditos.height * MultiplicadoIMG1 * 0.9
            );
          }

          rect(width * 0.4, 0, width * 0.2, height * 0.1);

          rect(width * 0.4, height * 0.9, width * 0.2, height * 0.1);

          image(
            IG13,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 14 && posicionIMGini == 14) {
        //DuckBlings

        if (OpacidadAllIcons == 400) {
          MusicDuckBlings.play();
        }
      } else if (posicionIMG == 15 && posicionIMGini == 15) {
        //DuckBusters

        if (OpacidadAllIcons == 400) {
          MusicDuckBusters.play();
        }
      } else if (posicionIMG == 0 && posicionIMGini == 0) {
        //DuckTris

        if (OpacidadAllIcons == 400) {
          MusicDuckTris.play();
        }
      } else if (posicionIMG == 1 && posicionIMGini == 1) {
        //JustDance

        if (OpacidadAllIcons >= 800) {
          if (!audioCargando) {
            // Solo cargar un nuevo audio si no se está cargando uno
            let ref = database.ref("Proyectores/AudioJustDanceSV");

            ref.once("value", (snapshot) => {
              // Obtener el valor UNA SOLA VEZ
              let PistaAudio = snapshot.val(); // Guardar el número de pista

              // Reiniciar el contador si llega a 79
              if (PistaAudio === 79) {
                PistaAudio = 1; // Reiniciar el contador a 1
              } else {
                PistaAudio += 1; // Incrementar el valor de la pista
              }

              // Actualizar la base de datos con el nuevo valor de pista
              ref.set(PistaAudio);

              // Crear la URL del audio
              let urlAudio =
                "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Canciones30Seg/" +
                PistaAudio +
                ".mp3";

              console.log("Cargando audio desde: " + urlAudio); // Verificar URL en consola

              // Marcar como audio cargando
              audioCargando = true;

              // Cargar y reproducir el sonido solo cuando esté listo
              loadSound(
                urlAudio,
                (nuevoSonido) => {
                  // Asegurarse de no tener múltiples instancias de sonido
                  if (sonido) {
                    sonido.stop(); // Detener cualquier audio que estuviera sonando
                  }

                  sonido = nuevoSonido; // Asignar el nuevo sonido cargado
                  sonido.play();
                  VIDEOJustDanceSV.play();

                  // Aquí sabemos que el sonido ha comenzado a reproducirse
                  let audioInterval = setInterval(() => {
                    if (URLOpened == false) {
                      if (!sonido.isPlaying()) {
                        OpacidadAllIcons = 795; // Cambiar el valor cuando el audio termine
                        console.log("El audio ha terminado");

                        // Detener el intervalo después de que el audio termine
                        clearInterval(audioInterval);

                        // Marcar que el audio ha terminado y permitir cargar el siguiente
                        audioCargando = false;
                      }
                    }
                  }, 100); // Verifica cada 100ms si el sonido está en reproducción
                },
                (err) => {
                  console.error("Error al cargar el audio:", err);
                  audioCargando = false; // Si ocurre un error, liberamos el flag
                }
              );
            });
          }

          if (
            OpacidadAllIcons >= 800 &&
            VIDEOJustDanceSV.time() < VIDEOJustDanceSV.duration()
          ) {
            image(
              VIDEOJustDanceSV,
              posIMG3,
              height / 2,
              IG5.width * MultiplicadoIMG1 * 0.8,
              IG5.height * MultiplicadoIMG1 * 0.8
            );
            push();
            rectMode(CENTER);
            fill(0, 100);
            noStroke();
            rect(
              posIMG3,
              height / 2,
              IG5.width * MultiplicadoIMG1 * 0.8,
              IG5.height * MultiplicadoIMG1 * 0.8
            );
            pop();
            image(
              VIDEOJustDanceSV,
              posIMG3,
              height / 2,
              IG5.width * MultiplicadoIMG1 * 0.68,
              IG5.height * MultiplicadoIMG1 * 0.68
            );
            image(
              BorderVideo,
              posIMG3,
              height / 2,
              IG5.width * MultiplicadoIMG1,
              IG5.height * MultiplicadoIMG1
            );
          }
        }
      }

      image(
        Leyenda,
        map(sin(FloatLeyenda), 0, 1, -Leyenda.width * 0.8, width * 0.14),
        height * 0.78,
        Leyenda.width * 0.8,
        Leyenda.height * 0.8
      );

      push();

      if (OpacidadAllIcons <= 255) {
        tint(255, OpacidadAllIcons);
      }

      let Rows = 1;

      if (NUser == 6) {
        Rows = 2;
        NUser = 3;
      }

      if (NUser == 8) {
        Rows = 2;
        NUser = 4;
      }

      for (let BarRows = 1; BarRows <= Rows; BarRows++) {
        for (let ShowUser = 0; ShowUser < NUser; ShowUser++) {
          if (RecomendadoIcon == 1) {
            image(
              UserIcon,
              width * 0.89 -
                width * (0.015 * NUser * 1.5) +
                ShowUser * width * 0.05,
              height * 0.795 + height * 0.08 * BarRows,
              UserIcon.width * 0.22,
              UserIcon.height * 0.22
            );
          } else {
            image(
              UserIcon,
              width * 0.522 -
                width * (0.015 * NUser * 1.5) +
                ShowUser * width * 0.05,
              height * 0.795 + height * 0.08 * BarRows,
              UserIcon.width * 0.22,
              UserIcon.height * 0.22
            );
          }
        }
      }

      //fill(0, 255 - OpacidadAllIcons);
      //noStroke();
      //rectMode(CENTER, CENTER);
      //rect(width*0.93, height*0.09, DataShare.width*0.18, DataShare.height*0.18);
      //rect(width*0.5, height*0.12, GameSV.width*0.4, GameSV.height*0.4, 30);
      //rect(width*0.5, height*0.9, Recomendado.width*0.17, Recomendado.height*0.17, 30);
      //rect(width*0.16, height*0.16, SVOnline.width*0.3, SVOnline.height*0.3, 50);

      pop();

      image(
        GameSystem,
        width * 0.18,
        height * 0.04,
        GameSystem.width * 0.48,
        GameSystem.height * 0.48
      );

      if (OpacidadAllIcons >= 200) {
        if (DataShareIcon == 1) {
          image(
            DataShare,
            width * 0.93,
            height * 0.09,
            DataShare.width * 0.18,
            DataShare.height * 0.18
          );
        }

        if (JuegoSVIcon == 1) {
          image(
            GameSV,
            width * 0.5,
            height * 0.1,
            GameSV.width * 0.4,
            GameSV.height * 0.4
          );
        }

        if (RecomendadoIcon == 1) {
          image(
            Recomendado,
            width * 0.5,
            height * 0.91,
            Recomendado.width * 0.17 +
              map(
                sin(frameCount * 0.04),
                -1,
                1,
                -Recomendado.width * 0.006,
                Recomendado.width * 0.006
              ),
            Recomendado.height * 0.17 +
              map(
                sin(frameCount * 0.04),
                -1,
                1,
                -Recomendado.height * 0.006,
                Recomendado.height * 0.006
              )
          );
        }

        if (SVOnlineIcon == 1) {
          image(
            SVOnline,
            width * 0.16,
            height * 0.16,
            SVOnline.width * 0.3 +
              map(
                sin(frameCount * 0.06),
                -1,
                1,
                -SVOnline.width * 0.006,
                SVOnline.width * 0.006
              ),
            SVOnline.height * 0.3 +
              map(
                sin(frameCount * 0.06),
                -1,
                1,
                -SVOnline.height * 0.006,
                SVOnline.height * 0.006
              )
          );
        }
      }

      if (FloatLeyenda < HALF_PI) {
        FloatLeyenda = FloatLeyenda + 0.01;
      }

      if (OpacidadAllIcons < 1000) {
        OpacidadAllIcons = OpacidadAllIcons + 5;
      }
      
      ref = database.ref("Proyectores/PuntoMinimoProyector" + ID_PROYECTOR);

      ref.set(round(MinYmouse));
      
      ref = database.ref("Proyectores/PuntoMaximoProyector" + ID_PROYECTOR);

      ref.set(round(MaxYmouse));

      let RangeY = round(map(mouseY, MinYmouse, MaxYmouse, 0, 100));

      if (RangeY <= 0) {
        RangeY = 0;
      }

      if (RangeY >= 100) {
        RangeY = 100;
      }
      
      

      if (mouseY <= height*0.3 && OpacidadAllIcons >= 1000) {
        //Seleccionar urls de juego

        if (posicionIMG == 2 && posicionIMGini == 2) {
          abrirIframe(0);
        } else if (posicionIMG == 3 && posicionIMGini == 3) {
          abrirIframe(1);
        } else if (posicionIMG == 4 && posicionIMGini == 4) {
          abrirIframe(2);
        } else if (posicionIMG == 5 && posicionIMGini == 5) {
          abrirIframe(3);
        } else if (posicionIMG == 6 && posicionIMGini == 6) {
          abrirIframe(4);
        } else if (posicionIMG == 7 && posicionIMGini == 7) {
          abrirIframe(5); 
        } else if (posicionIMG == 8 && posicionIMGini == 8) {
          abrirIframe(6);
        } else if (posicionIMG == 9 && posicionIMGini == 9) {
          abrirIframe(7);
        } else if (posicionIMG == 10 && posicionIMGini == 10) {
          abrirIframe(8);
        } else if (posicionIMG == 11 && posicionIMGini == 11) {
          abrirIframe(9);
        } else if (posicionIMG == 12 && posicionIMGini == 12) {
          abrirIframe(10);
        }
      }

      if (mouseY >= height*0.7) {
        if (posicionIMGini == posicionIMG) {
          TransicionIMG = -HALF_PI;

          ACTTamaño0 = Tamaño0;
          ACTTamaño1 = Tamaño1;
          ACTTamaño2 = Tamaño2;
          ACTTamaño3 = Tamaño3;
          ACTTamaño4 = Tamaño4;
          ACTTamaño5 = Tamaño5;
          ACTTamaño6 = Tamaño6;
          ACTTamaño7 = Tamaño7;
          ACTTamaño8 = Tamaño8;
          ACTTamaño9 = Tamaño9;
          ACTTamaño10 = Tamaño10;
          ACTTamaño11 = Tamaño11;
          ACTTamaño12 = Tamaño12;
          ACTTamaño13 = Tamaño13;
          ACTTamaño14 = Tamaño14;
          ACTTamaño15 = Tamaño15;

          ACTposicion0 = posicion0;
          ACTposicion1 = posicion1;
          ACTposicion2 = posicion2;
          ACTposicion3 = posicion3;
          ACTposicion4 = posicion4;
          ACTposicion5 = posicion5;
          ACTposicion6 = posicion6;
          ACTposicion7 = posicion7;
          ACTposicion8 = posicion8;
          ACTposicion9 = posicion9;
          ACTposicion10 = posicion10;
          ACTposicion11 = posicion11;
          ACTposicion12 = posicion12;
          ACTposicion13 = posicion13;
          ACTposicion14 = posicion14;
          ACTposicion15 = posicion15;

          if (posicionIMG < 15) {
            posicionIMG = posicionIMG + 1;
          } else {
            posicionIMG = 0;
          }

          OpacidadAllIcons = -400;
        }
      }

      if (posicionIMGini != posicionIMG) {
        TransicionIMG = TransicionIMG + 0.02;

        if (TransicionIMG >= HALF_PI) {
          TransicionIMG = HALF_PI;

          posicionIMGini = posicionIMG;

          VIDEO4Raya.stop();
          VIDEOAirConsole.stop();
          VIDEOBottleFlip.stop();
          VIDEODinoDuck.stop();
          VIDEODoodleJump.stop();
          VIDEODriveMad.stop();
          VIDEOFlappyDuck.stop();
          VIDEOPongSV.stop();
          VIDEORainbow.stop();
          VIDEORompeBloques.stop();
          VIDEOTapTap.stop();
          VIDEOJustDanceSV.stop();

          if (sonido) {
            sonido.stop();
          }

          if (musicaCreditos) {
            musicaCreditos.stop();
          }

          if (MusicDuckBlings) {
            MusicDuckBlings.stop();
          }

          if (MusicDuckBusters) {
            MusicDuckBusters.stop();
          }

          if (MusicDuckTris) {
            MusicDuckTris.stop();
          }

          VIDEO4Raya.volume(VolumenAltavoz/100);
          VIDEOAirConsole.volume(VolumenAltavoz/100);
          VIDEOBottleFlip.volume(VolumenAltavoz/100);
          VIDEODinoDuck.volume(VolumenAltavoz/100);
          VIDEODoodleJump.volume(VolumenAltavoz/100);
          VIDEODriveMad.volume(VolumenAltavoz/100);
          VIDEOFlappyDuck.volume(VolumenAltavoz/100);
          VIDEOPongSV.volume(VolumenAltavoz/100);
          VIDEORainbow.volume(VolumenAltavoz/100);
          VIDEORompeBloques.volume(VolumenAltavoz/100);
          VIDEOTapTap.volume(VolumenAltavoz/100);
          VIDEOJustDanceSV.volume(VolumenAltavoz/100);

          if (sonido) {
            sonido.setVolume(VolumenAltavoz/100);
          }

          if (musicaCreditos) {
            musicaCreditos.setVolume(VolumenAltavoz/100);
          }

          if (MusicDuckBlings) {
            MusicDuckBlings.setVolume(VolumenAltavoz/100);
          }

          if (MusicDuckBusters) {
            MusicDuckBusters.setVolume(VolumenAltavoz/100);
          }

          if (MusicDuckTris) {
            MusicDuckTris.setVolume(VolumenAltavoz/100);
          }
        } else {
          VIDEO4Raya.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEOAirConsole.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEOBottleFlip.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEODinoDuck.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEODoodleJump.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEODriveMad.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEOFlappyDuck.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEOPongSV.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEORainbow.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEORompeBloques.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEOTapTap.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEOJustDanceSV.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));

          if (sonido) {
            sonido.setVolume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          }

          if (musicaCreditos) {
            musicaCreditos.setVolume(
              map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0)
            );
          }

          if (MusicDuckBlings) {
            MusicDuckBlings.setVolume(
              map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0)
            );
          }

          if (MusicDuckBusters) {
            MusicDuckBusters.setVolume(
              map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0)
            );
          }

          if (MusicDuckTris) {
            MusicDuckTris.setVolume(
              map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0)
            );
          }
        }

        BACTposicion0 = map(sin(TransicionIMG), -1, 1, ACTTamaño0, Tamaño0);
        BACTposicion1 = map(sin(TransicionIMG), -1, 1, ACTTamaño1, Tamaño1);
        BACTposicion2 = map(sin(TransicionIMG), -1, 1, ACTTamaño2, Tamaño2);
        BACTposicion3 = map(sin(TransicionIMG), -1, 1, ACTTamaño3, Tamaño3);
        BACTposicion4 = map(sin(TransicionIMG), -1, 1, ACTTamaño4, Tamaño4);
        BACTposicion5 = map(sin(TransicionIMG), -1, 1, ACTTamaño5, Tamaño5);
        BACTposicion6 = map(sin(TransicionIMG), -1, 1, ACTTamaño6, Tamaño6);
        BACTposicion7 = map(sin(TransicionIMG), -1, 1, ACTTamaño7, Tamaño7);
        BACTposicion8 = map(sin(TransicionIMG), -1, 1, ACTTamaño8, Tamaño8);
        BACTposicion9 = map(sin(TransicionIMG), -1, 1, ACTTamaño9, Tamaño9);
        BACTposicion10 = map(sin(TransicionIMG), -1, 1, ACTTamaño10, Tamaño10);
        BACTposicion11 = map(sin(TransicionIMG), -1, 1, ACTTamaño11, Tamaño11);
        BACTposicion12 = map(sin(TransicionIMG), -1, 1, ACTTamaño12, Tamaño12);
        BACTposicion13 = map(sin(TransicionIMG), -1, 1, ACTTamaño13, Tamaño13);
        BACTposicion14 = map(sin(TransicionIMG), -1, 1, ACTTamaño14, Tamaño14);
        BACTposicion15 = map(sin(TransicionIMG), -1, 1, ACTTamaño15, Tamaño15);

        BACTTamaño0 = map(sin(TransicionIMG), -1, 1, ACTposicion0, posicion0);
        BACTTamaño1 = map(sin(TransicionIMG), -1, 1, ACTposicion1, posicion1);
        BACTTamaño2 = map(sin(TransicionIMG), -1, 1, ACTposicion2, posicion2);
        BACTTamaño3 = map(sin(TransicionIMG), -1, 1, ACTposicion3, posicion3);
        BACTTamaño4 = map(sin(TransicionIMG), -1, 1, ACTposicion4, posicion4);
        BACTTamaño5 = map(sin(TransicionIMG), -1, 1, ACTposicion5, posicion5);
        BACTTamaño6 = map(sin(TransicionIMG), -1, 1, ACTposicion6, posicion6);
        BACTTamaño7 = map(sin(TransicionIMG), -1, 1, ACTposicion7, posicion7);
        BACTTamaño8 = map(sin(TransicionIMG), -1, 1, ACTposicion8, posicion8);
        BACTTamaño9 = map(sin(TransicionIMG), -1, 1, ACTposicion9, posicion9);
        BACTTamaño10 = map(
          sin(TransicionIMG),
          -1,
          1,
          ACTposicion10,
          posicion10
        );
        BACTTamaño11 = map(
          sin(TransicionIMG),
          -1,
          1,
          ACTposicion11,
          posicion11
        );
        BACTTamaño12 = map(
          sin(TransicionIMG),
          -1,
          1,
          ACTposicion12,
          posicion12
        );
        BACTTamaño13 = map(
          sin(TransicionIMG),
          -1,
          1,
          ACTposicion13,
          posicion13
        );
        BACTTamaño14 = map(
          sin(TransicionIMG),
          -1,
          1,
          ACTposicion14,
          posicion14
        );
        BACTTamaño15 = map(
          sin(TransicionIMG),
          -1,
          1,
          ACTposicion15,
          posicion15
        );
      }

      if (GameOpacity > 0) {
        GameOpacity = GameOpacity - 3;

        noStroke();

        fill(0, GameOpacity);

        rect(0, 0, width, height);
      }
    }
  } else {
    //Aqui lo que se quiere que ocurra mientras se ejecutan las web interactivas
    push();
    noStroke();
    fill(0);
    rectMode(CENTER)
    rect(0, 0, width*1.2, height*1.2);
    pop();
    
  }

  if (Etapa == 0) {
    noStroke();

    fill(0, OpcacidadTrans);

    rect(0, 0, width, height);

    if (OpcacidadTrans < 255) {
      OpcacidadTrans = OpcacidadTrans + 8;
    } else {
      OpcacidadTrans = 255;
    }
  }
  
      if (mouseY >= height - 10) {
      
      if (11 - round((millis() - proyectorMillisANT) / 1000) >= 0) {
        if (11 - round((millis() - proyectorMillisANT) / 1000) <= 9) {
          push();
          textAlign(CENTER, CENTER);
          textSize(100);
          textFont(Fuente4);
          stroke(50);
          strokeWeight(12);
          fill(231, 76, 60);
          text(11 - round((millis() - proyectorMillisANT) / 1000), 60, 50);
          pop();
        }
        } else {
          
          VIDEO4Raya.stop();
          VIDEOAirConsole.stop();
          VIDEOBottleFlip.stop();
          VIDEODinoDuck.stop();
          VIDEODoodleJump.stop();
          VIDEODriveMad.stop();
          VIDEOFlappyDuck.stop();
          VIDEOPongSV.stop();
          VIDEORainbow.stop();
          VIDEORompeBloques.stop();
          VIDEOTapTap.stop();
          VIDEOJustDanceSV.stop();

          if (sonido) {
            sonido.stop();
          }

          if (musicaCreditos) {
            musicaCreditos.stop();
          }

          if (MusicDuckBlings) {
            MusicDuckBlings.stop();
          }

          if (MusicDuckBusters) {
            MusicDuckBusters.stop();
          }

          if (MusicDuckTris) {
            MusicDuckTris.stop();
          }

          VIDEO4Raya.volume(VolumenAltavoz/100);
          VIDEOAirConsole.volume(VolumenAltavoz/100);
          VIDEOBottleFlip.volume(VolumenAltavoz/100);
          VIDEODinoDuck.volume(VolumenAltavoz/100);
          VIDEODoodleJump.volume(VolumenAltavoz/100);
          VIDEODriveMad.volume(VolumenAltavoz/100);
          VIDEOFlappyDuck.volume(VolumenAltavoz/100);
          VIDEOPongSV.volume(VolumenAltavoz/100);
          VIDEORainbow.volume(VolumenAltavoz/100);
          VIDEORompeBloques.volume(VolumenAltavoz/100);
          VIDEOTapTap.volume(VolumenAltavoz/100);
          VIDEOJustDanceSV.volume(VolumenAltavoz/100);

          if (sonido) {
            sonido.setVolume(VolumenAltavoz/100);
          }

          if (musicaCreditos) {
            musicaCreditos.setVolume(VolumenAltavoz/100);
          }

          if (MusicDuckBlings) {
            MusicDuckBlings.setVolume(VolumenAltavoz/100);
          }

          if (MusicDuckBusters) {
            MusicDuckBusters.setVolume(VolumenAltavoz/100);
          }

          if (MusicDuckTris) {
            MusicDuckTris.setVolume(VolumenAltavoz/100);
          }
          
          push();
          textAlign(CENTER, CENTER);
          textSize(100);
          textFont(Fuente4);
          stroke(50);
          fill(231, 76, 60);
          text(0, 60, 50);
          pop();
          
          Etapa = -1;
      
          posicionIMG = 1;

          FloatLeyenda = 0;

          OpacidadAllIcons = 0;

          GameOpacity = 255;

          posicionIMG = 1;
          posicionIMGini = 0;
          
          TransicionIMG = HALF_PI;

          cerrarIframe();
          
        }
      
    } else {
     
      proyectorMillisANT = millis();
      
    }
  
}

let smoothValue = 0; // Variable suavizada
let smoothFactor = 0.1; // Factor de suavizado (0.0 - 1.0)

function smoothVariable(targetValue) {
  smoothValue += (targetValue - smoothValue) * smoothFactor;
  return smoothValue;
}

// Función para abrir el iframe con la URL actual
function abrirIframe(indice) {
  
  push();
  noStroke();
  fill(0);
  rectMode(CENTER)
  rect(width/2, height/2, width, height);
  pop();
  
  if (URLOpened == false) {
    
    ref = database.ref("Proyectores/Proyector" + ID_PROYECTOR + "JuegoSel");
    ref.set(indice);
    
    JuegoSeleccionadoData = indice;
    
    let url = urls[indice]; // Selecciona la URL actual
    iframe = createElement("iframe");
    iframe.attribute("src", url);
    iframe.attribute("width", "1280");
    iframe.attribute("height", "720");
    iframe.position(0, -1);
    URLOpened = true;
    
  }

  VIDEO4Raya.stop();
  VIDEOAirConsole.stop();
  VIDEOBottleFlip.stop();
  VIDEODinoDuck.stop();
  VIDEODoodleJump.stop();
  VIDEODriveMad.stop();
  VIDEOFlappyDuck.stop();
  VIDEOPongSV.stop();
  VIDEORainbow.stop();
  VIDEORompeBloques.stop();
  VIDEOTapTap.stop();
  VIDEOJustDanceSV.stop();

  if (sonido) {
    sonido.stop();
  }

  if (musicaCreditos) {
    musicaCreditos.stop();
  }

  if (MusicDuckBlings) {
    MusicDuckBlings.stop();
  }

  if (MusicDuckBusters) {
    MusicDuckBusters.stop();
  }

  if (MusicDuckTris) {
    MusicDuckTris.stop();
  }

  VIDEO4Raya.volume(VolumenAltavoz/100);
  VIDEOAirConsole.volume(VolumenAltavoz/100);
  VIDEOBottleFlip.volume(VolumenAltavoz/100);
  VIDEODinoDuck.volume(VolumenAltavoz/100);
  VIDEODoodleJump.volume(VolumenAltavoz/100);
  VIDEODriveMad.volume(VolumenAltavoz/100);
  VIDEOFlappyDuck.volume(VolumenAltavoz/100);
  VIDEOPongSV.volume(VolumenAltavoz/100);
  VIDEORainbow.volume(VolumenAltavoz/100);
  VIDEORompeBloques.volume(VolumenAltavoz/100);
  VIDEOTapTap.volume(VolumenAltavoz/100);
  VIDEOJustDanceSV.volume(VolumenAltavoz/100);

  if (sonido) {
    sonido.setVolume(VolumenAltavoz/100);
  }

  if (musicaCreditos) {
    musicaCreditos.setVolume(VolumenAltavoz/100);
  }

  if (MusicDuckBlings) {
    MusicDuckBlings.setVolume(VolumenAltavoz/100);
  }

  if (MusicDuckBusters) {
    MusicDuckBusters.setVolume(VolumenAltavoz/100);
  }

  if (MusicDuckTris) {
    MusicDuckTris.setVolume(VolumenAltavoz/100);
  }
}

// Función para cerrar el iframe
function cerrarIframe() {
  if (iframe) {
    iframe.remove(); // Elimina el iframe del DOM
    URLOpened = false; // Permitir abrirlo nuevamente
    VolverActualizarDatos = true;
    ref = database.ref("Proyectores/Proyector" + ID_PROYECTOR + "JuegoSel");
    ref.set(-2);
  }
}

// Detectar el primer clic
function mouseReleased() {
    if (started == false) {
      
      video.loop();
      VIDEOCreditos.loop();
      VIDEOInicioProyector.play();
      
      if (VolumenAltavoz >= 0 && VolumenAltavoz <= 1) {
      
      VIDEOInicioProyector.volume(VolumenAltavoz/100);
        
      }

      started = true;
        
      }
}
