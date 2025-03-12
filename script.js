
// ---------------------------------------------------------------------------
// Configuración del Canvas y Variables Globales
// ---------------------------------------------------------------------------

// Obtiene el elemento canvas y su contexto 2D
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

// Configura el tamaño del canvas para que ocupe toda la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array para almacenar las partículas y cantidad de partículas
let particlesArray = [];
const numParticles = 300;

// Objeto para almacenar la posición del mouse y su radio de interacción
const mouse = {
  x: null,
  y: null,
  radius: 50
};

// Actualiza la posición del mouse al moverlo
window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

// Ajusta el tamaño del canvas y reinicia las partículas al cambiar el tamaño de la ventana
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

// ---------------------------------------------------------------------------
// Clase Particle: Representa una partícula en el canvas
// ---------------------------------------------------------------------------

class Particle {
  /**
   * Crea una nueva partícula.
   * @param {number} x - Posición x inicial.
   * @param {number} y - Posición y inicial.
   * @param {number} size - Tamaño de la partícula.
   * @param {number} speedX - Velocidad en el eje x.
   * @param {number} speedY - Velocidad en el eje y.
   */
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.baseSize = size;
    this.speedX = speedX;
    this.speedY = speedY;
    // Asigna un color blanco con opacidad aleatoria
    this.color = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`;
  }

  /**
   * Actualiza la posición y el tamaño de la partícula.
   * Invierte la dirección al tocar los bordes y aumenta el tamaño
   * si el mouse se acerca.
   */
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Invierte la dirección al tocar los bordes del canvas
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.speedY = -this.speedY;
    }

    // Calcula la distancia entre el mouse y la partícula
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Si el mouse está cerca, duplica el tamaño y la partícula se aleja un poco
    if (distance < mouse.radius) {
      this.size = this.baseSize * 2;
      this.x -= dx * 0.02;
      this.y -= dy * 0.02;
    } else {
      this.size = this.baseSize;
    }
  }

  /**
   * Dibuja la partícula en el canvas.
   */
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// ---------------------------------------------------------------------------
// Funciones de Inicialización y Animación de Partículas
// ---------------------------------------------------------------------------

/**
 * Inicializa las partículas creando un número definido de ellas.
 */
function initParticles() {
  particlesArray = [];
  for (let i = 0; i < numParticles; i++) {
    const size = Math.random() * 3 + 1;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speedX = (Math.random() - 0.5) * 0.1;
    const speedY = (Math.random() - 0.5) * 0.1;
    particlesArray.push(new Particle(x, y, size, speedX, speedY));
  }
}

/**
 * Función de animación que actualiza y dibuja las partículas en cada frame.
 */
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(particle => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animateParticles);
}

/**
 * Abre una nueva ventana con la URL especificada.
 */
function openpag() {
  window.open("https://drive.google.com/drive/home", "_blank", "width=800,height=600");
}

// ---------------------------------------------------------------------------
// Configuración de la Sección "Sobre Mí" y Visualización de Habilidades
// ---------------------------------------------------------------------------

// Animación de entrada para la sección "Sobre Mí"
const aboutSection = document.querySelector('.about-section');
setTimeout(() => {
  aboutSection.classList.add('visible');
}, 200);

// Datos de habilidades con niveles definidos (estáticos)
const skills = [
  { name: 'Frontend', level: 77 },
  { name: 'Backend', level: 75 },
  { name: 'Desarrollo de Aplicaciones IoT', level: 70 },
  { name: 'Diseño UX/UI', level: 75 }
];

// Genera y muestra las barras de habilidades con el ancho correspondiente al nivel
const skillsContainer = document.getElementById('skills-container');
skills.forEach(skill => {
  const skillWrapper = document.createElement('div');
  skillWrapper.innerHTML = `
    <p class="mb-2">${skill.name}</p>
    <div class="skill-progress">
      <div class="skill-progress-bar" style="width: ${skill.level}%;" data-progress="${skill.level}"></div>
    </div>
  `;
  skillsContainer.appendChild(skillWrapper);
});

// ---------------------------------------------------------------------------
// Inicialización de Partículas
// ---------------------------------------------------------------------------

initParticles();
animateParticles();
