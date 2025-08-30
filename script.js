// ========================
// Enhanced Kasane Teto JavaScript with Advanced Effects
// ========================

// Global state management
let quantumMode = false;
let musicNotesActive = true;
let neuralNetworkActive = true;
const themes = ["gradient", "solid", "glass", "neon"];
let currentTheme = 0;

// Quantum loading animation
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('quantumLoader');
    loader.classList.add('hidden');
    setTimeout(() => loader.remove(), 1000);
    
    // Initialize all effects after loading
    initializeAllEffects();
  }, 2000);
});

// Initialize all cyberpunk effects
function initializeAllEffects() {
  createQuantumParticles();
  createNeuralNetwork();
  initSmoothScroll();
  initParallaxEffect();
  initRippleEffects();
  initHolographicEffects();
  createDataStreams();
  
  // Start periodic animations
  setInterval(createMusicNote, 1200);
  setInterval(updateNeuralNetwork, 2000);
  setInterval(quantumParticleShift, 4000);
  
  // Random glitch effects
  setInterval(() => {
    if (Math.random() < 0.08) {
      createDimensionalRift();
    }
  }, 8000);
}

// Enhanced quantum particle system
function createQuantumParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 100;
  const colors = ['pink', 'purple', 'cyan'];
  const sizes = [2, 3, 4, 5, 6, 8];
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    const colorClass = colors[Math.floor(Math.random() * colors.length)];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    
    particle.classList.add('particle', colorClass);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${8 + Math.random() * 8}s`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    
    // Add quantum properties
    if (Math.random() < 0.3) {
      particle.style.opacity = '0.6';
      particle.style.transform = `scale(${0.5 + Math.random() * 0.8})`;
    }
    
    if (Math.random() < 0.2) {
      particle.style.filter = `blur(${1 + Math.random() * 2}px) hue-rotate(${Math.random() * 360}deg)`;
    }
    
    particlesContainer.appendChild(particle);
  }
}

// Neural network connection system
function createNeuralNetwork() {
  if (!neuralNetworkActive) return;
  
  const networkContainer = document.getElementById('neuralNetwork');
  const lineCount = 25;
  
  for (let i = 0; i < lineCount; i++) {
    const line = document.createElement('div');
    line.classList.add('neural-line');
    line.style.width = `${100 + Math.random() * 300}px`;
    line.style.top = `${Math.random() * 100}%`;
    line.style.left = `${Math.random() * 100}%`;
    line.style.transform = `rotate(${Math.random() * 360}deg)`;
    line.style.animationDelay = `${Math.random() * 8}s`;
    line.style.animationDuration = `${6 + Math.random() * 6}s`;
    
    networkContainer.appendChild(line);
  }
}

// Update neural network dynamically
function updateNeuralNetwork() {
  if (!neuralNetworkActive) return;
  
  const lines = document.querySelectorAll('.neural-line');
  lines.forEach(line => {
    if (Math.random() < 0.3) {
      const newRotation = Math.random() * 360;
      line.style.transform = `rotate(${newRotation}deg) scale(${0.8 + Math.random() * 0.4})`;
      
      // Random color shift
      if (Math.random() < 0.5) {
        line.style.background = `linear-gradient(90deg, transparent, hsl(${300 + Math.random() * 60}, 70%, 60%), hsl(${240 + Math.random() * 60}, 70%, 60%), transparent)`;
      }
    }
  });
}

// Advanced 3D holographic music notes
function createMusicNote() {
  if (!musicNotesActive) return;
  
  const musicNotes = ['♪', '♫', '♩', '♬', '🎵', '🎶', '▲', '●', '■', '♦', '◆', '★', '✦', '✧'];
  const note = document.createElement('div');
  note.classList.add('music-note');
  note.textContent = musicNotes[Math.floor(Math.random() * musicNotes.length)];
  note.style.left = Math.random() * 100 + '%';
  note.style.animationDuration = (Math.random() * 8 + 10) + 's';
  note.style.fontSize = (Math.random() * 16 + 20) + 'px';
  
  // Advanced holographic colors with HSL
  const hue = Math.random() * 60 + 300; // Pink to purple range
  const saturation = 70 + Math.random() * 30;
  const lightness = 50 + Math.random() * 30;
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  
  note.style.color = color;
  note.style.textShadow = `
    0 0 10px ${color},
    0 0 20px ${color},
    0 0 30px ${color}
  `;
  
  // Add 3D transform variations
  const initialRotateX = Math.random() * 360;
  const initialRotateY = Math.random() * 360;
  note.style.transform = `rotateX(${initialRotateX}deg) rotateY(${initialRotateY}deg)`;
  
  document.getElementById('musicNotes').appendChild(note);
  
  setTimeout(() => {
    if (note.parentNode) {
      note.remove();
    }
  }, 12000);
}

// Quantum particle color shifting
function quantumParticleShift() {
  const particles = document.querySelectorAll('.particle');
  particles.forEach(particle => {
    if (Math.random() < 0.25) {
      const colors = ['pink', 'purple', 'cyan'];
      const currentColors = Array.from(particle.classList).filter(c => colors.includes(c));
      particle.classList.remove(...currentColors);
      particle.classList.add(colors[Math.floor(Math.random() * colors.length)]);
      
      // Add quantum tunneling effect
      particle.style.animation = 'none';
      particle.offsetHeight; // Trigger reflow
      particle.style.animation = null;
      
      // Temporary quantum distortion
      particle.style.filter = `blur(${2 + Math.random() * 3}px) hue-rotate(${Math.random() * 180}deg) saturate(${1.5 + Math.random()}`;
      setTimeout(() => {
        particle.style.filter = 'blur(0.5px) saturate(1.5)';
      }, 300);
    }
  });
}

// Dimensional rift effect
function createDimensionalRift() {
  const rift = document.createElement('div');
  rift.style.cssText = `
    position: fixed;
    top: ${20 + Math.random() * 60}%;
    left: ${10 + Math.random() * 80}%;
    width: 200px;
    height: 4px;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 105, 180, 0.9), 
      rgba(255, 255, 255, 1), 
      rgba(153, 102, 204, 0.9), 
      transparent
    );
    z-index: 1000;
    pointer-events: none;
    transform-origin: center;
    animation: dimensionalRift 2s ease-out forwards;
    box-shadow: 0 0 20px rgba(255, 105, 180, 0.8);
    filter: blur(1px);
  `;
  
  document.body.appendChild(rift);
  
  // Create rift particles
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: fixed;
        top: ${rift.style.top};
        left: ${parseFloat(rift.style.left) + Math.random() * 20 - 10}%;
        width: 3px;
        height: 3px;
        background: rgba(255, 105, 180, 0.8);
        border-radius: 50%;
        z-index: 1001;
        pointer-events: none;
        animation: riftParticle 1.5s ease-out forwards;
      `;
      document.body.appendChild(particle);
      
      setTimeout(() => particle.remove(), 1500);
    }, i * 50);
  }
  
  setTimeout(() => rift.remove(), 2000);
}

// Enhanced control functions
function toggleMusic() {
  musicNotesActive = !musicNotesActive;
  const btn = document.querySelector('.music-toggle');
  btn.textContent = musicNotesActive ? '🎵 Audio' : '🔇 Audio';
  
  if (!musicNotesActive) {
    document.getElementById('musicNotes').innerHTML = '';
  }
}

function toggleQuantumMode() {
  quantumMode = !quantumMode;
  const btn = document.querySelector('.quantum-btn');
  const body = document.body;
  
  if (quantumMode) {
    btn.textContent = '⚛️ Normal';
    body.style.filter = 'hue-rotate(30deg) saturate(1.3) contrast(1.1)';
    body.style.animation = 'quantumFlicker 0.1s infinite';
    
    // Increase particle chaos
    document.querySelectorAll('.particle').forEach(particle => {
      particle.style.animationDuration = '3s';
      particle.style.filter = 'blur(2px) hue-rotate(45deg) saturate(2)';
    });
  } else {
    btn.textContent = '⚛️ Quantum';
    body.style.filter = 'none';
    body.style.animation = 'none';
    
    // Reset particles
    document.querySelectorAll('.particle').forEach(particle => {
      particle.style.animationDuration = '';
      particle.style.filter = 'blur(0.5px) saturate(1.5)';
    });
  }
}

function toggleTheme() {
  const header = document.getElementById("tetoHeader");
  header.classList.remove(...themes);
  currentTheme = (currentTheme + 1) % themes.length;
  header.classList.add(themes[currentTheme]);
  
  // Special effects for different themes
  switch(themes[currentTheme]) {
    case 'neon':
      document.body.style.background = '#050508';
      createHologramScanlines();
      break;
    case 'glass':
      document.body.style.background = '#0a0a0f';
      createGlassEffect();
      break;
    case 'solid':
      document.body.style.background = '#080508';
      createSolidEffect();
      break;
    default:
      document.body.style.background = '#080508';
      removeSpecialEffects();
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const toggleBtn = document.querySelector('.theme-toggle');
  const isDark = document.body.classList.contains('dark');
  toggleBtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
  
  if (isDark) {
    createDarkModeParticles();
  }
}

// Special theme effects
function createHologramScanlines() {
  removeSpecialEffects();
  const scanlines = document.createElement('div');
  scanlines.id = 'specialEffect';
  scanlines.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1000;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 255, 0.04) 2px,
      rgba(0, 255, 255, 0.04) 4px
    );
    animation: scanlineFlicker 0.12s linear infinite;
    mix-blend-mode: screen;
  `;
  document.body.appendChild(scanlines);
}

function createGlassEffect() {
  removeSpecialEffects();
  const glass = document.createElement('div');
  glass.id = 'specialEffect';
  glass.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1000;
    background: radial-gradient(circle at 30% 70%, rgba(255, 105, 180, 0.1), transparent),
                radial-gradient(circle at 70% 30%, rgba(153, 102, 204, 0.08), transparent);
    backdrop-filter: blur(1px);
    mix-blend-mode: overlay;
  `;
  document.body.appendChild(glass);
}

function createSolidEffect() {
  removeSpecialEffects();
  // Add subtle solid theme enhancement
  document.body.style.filter = 'saturate(1.2) contrast(1.1)';
}

function removeSpecialEffects() {
  const existing = document.getElementById('specialEffect');
  if (existing) existing.remove();
  document.body.style.filter = quantumMode ? 'hue-rotate(30deg) saturate(1.3) contrast(1.1)' : 'none';
}

function createDarkModeParticles() {
  // Add more particles for dark mode
  const particlesContainer = document.getElementById('particles');
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle', 'purple');
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${10 + Math.random() * 10}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particle.style.opacity = '0.4';
    
    particlesContainer.appendChild(particle);
  }
}

// Enhanced ripple effects
function initRippleEffects() {
  document.querySelectorAll('.site-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.5;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, 
          rgba(255, 105, 180, 0.8), 
          rgba(255, 20, 147, 0.4), 
          transparent
        );
        border-radius: 50%;
        transform: scale(0);
        animation: quantumRipple 1.2s ease-out;
        pointer-events: none;
        z-index: 10;
        mix-blend-mode: screen;
      `;
      
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1200);
      
      // Quantum screen distortion
      createQuantumDistortion();
      
      // Delayed navigation
      setTimeout(() => {
        window.open(this.href, '_blank');
      }, 200);
    });
  });
}

// Quantum distortion effect
function createQuantumDistortion() {
  const distortion = document.createElement('div');
  distortion.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg, 
      transparent 48%, 
      rgba(255, 105, 180, 0.15) 49%, 
      rgba(153, 102, 204, 0.1) 50%, 
      rgba(255, 105, 180, 0.15) 51%, 
      transparent 52%
    );
    z-index: 9998;
    pointer-events: none;
    animation: quantumDistort 0.15s ease-out;
    mix-blend-mode: difference;
  `;
  document.body.appendChild(distortion);
  
  setTimeout(() => distortion.remove(), 150);
}

// Data streams for background effect
function createDataStreams() {
  const streamCount = 12;
  const characters = ['0', '1', '▲', '●', '■', '♦', '|', '-', '+', '*', '※', '◆'];
  
  for (let i = 0; i < streamCount; i++) {
    const stream = document.createElement('div');
    stream.classList.add('data-stream');
    stream.style.cssText = `
      position: fixed;
      left: ${5 + (i * 8)}%;
      top: 0;
      width: 1px;
      height: 100vh;
      font-family: 'Orbitron', monospace;
      font-size: 10px;
      color: rgba(255, 105, 180, 0.2);
      z-index: 0;
      pointer-events: none;
      line-height: 1.5;
      animation: dataFlow 20s linear infinite;
      animation-delay: ${i * -2}s;
      overflow: hidden;
    `;
    
    let streamContent = '';
    for (let j = 0; j < 100; j++) {
      streamContent += characters[Math.floor(Math.random() * characters.length)] + '<br>';
    }
    stream.innerHTML = streamContent;
    
    document.body.appendChild(stream);
  }
}

// Enhanced smooth scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        createScrollQuantumEffect();
      }
    });
  });
}

function createScrollQuantumEffect() {
  document.body.style.filter = 'hue-rotate(180deg) contrast(1.3) saturate(1.2)';
  setTimeout(() => {
    document.body.style.filter = quantumMode ? 'hue-rotate(30deg) saturate(1.3) contrast(1.1)' : 'none';
  }, 100);
}

// Parallax effect enhancement
function initParallaxEffect() {
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.teto-header');
    const rate = scrolled * -0.4;
    
    header.style.transform = `translate3d(0, ${rate}px, 0)`;
    
    // Enhanced particle parallax
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
      const speed = ((index % 5) + 1) * 0.15;
      const rotation = scrolled * 0.3;
      const scale = 1 + (scrolled * 0.001);
      particle.style.transform = `
        translate3d(0, ${scrolled * speed}px, 0) 
        rotate(${rotation}deg) 
        scale(${Math.min(scale, 1.5)})
      `;
    });
    
    // Data stream parallax
    const streams = document.querySelectorAll('.data-stream');
    streams.forEach((stream, index) => {
      const speed = (index + 1) * 0.03;
      stream.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', requestTick, { passive: true });
}

// Initialize holographic effects
function initHolographicEffects() {
  // Add holographic shimmer to avatar
  const avatar = document.querySelector('.teto-avatar img');
  if (avatar) {
    avatar.addEventListener('mouseover', () => {
      avatar.style.filter = 'contrast(1.4) brightness(1.3) saturate(1.5) hue-rotate(30deg)';
    });
    
    avatar.addEventListener('mouseout', () => {
      avatar.style.filter = 'contrast(1.2) brightness(1.1) saturate(1.1)';
    });
  }
  
  // Add hover effects to text
  const heroText = document.querySelector('.teto-hero-text h1');
  if (heroText) {
    heroText.addEventListener('mouseover', () => {
      heroText.style.transform = 'scale(1.05) rotateX(5deg)';
      heroText.style.filter = 'hue-rotate(30deg) saturate(1.5)';
    });
    
    heroText.addEventListener('mouseout', () => {
      heroText.style.transform = 'scale(1) rotateX(0deg)';
      heroText.style.filter = 'none';
    });
  }
}

// Screen shake effect for extreme interactions
function createScreenShake() {
  const intensity = 5;
  const duration = 300;
  const startTime = Date.now();
  
  function shake() {
    const elapsed = Date.now() - startTime;
    if (elapsed < duration) {
      const x = (Math.random() - 0.5) * intensity;
      const y = (Math.random() - 0.5) * intensity;
      document.body.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(shake);
    } else {
      document.body.style.transform = 'translate(0, 0)';
    }
  }
  
  shake();
}

// Matrix rain effect for special occasions
function createMatrixRain() {
  const canvas = document.createElement('canvas');
  canvas.id = 'matrixCanvas';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.15;
    pointer-events: none;
  `;
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ♪♫♩♬▲●■♦◆★✦✧';
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);
  
  function drawMatrix() {
    ctx.fillStyle = 'rgba(8, 5, 8, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#ff69b4';
    ctx.font = fontSize + 'px Orbitron, monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const text = characters[Math.floor(Math.random() * characters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  const matrixInterval = setInterval(drawMatrix, 50);
  
  // Clean up after 10 seconds
  setTimeout(() => {
    clearInterval(matrixInterval);
    canvas.remove();
  }, 10000);
}

// Konami code easter egg
let konamiCode = [];
const konamiSequence = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.code);
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }
  
  if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
    // Activate super cyberpunk mode
    activateSuperCyberpunkMode();
    konamiCode = []; // Reset
  }
});

function activateSuperCyberpunkMode() {
  // Extreme visual overload
  document.body.style.filter = 'hue-rotate(0deg) saturate(2) contrast(1.5) brightness(1.2)';
  document.body.style.animation = 'quantumFlicker 0.05s infinite';
  
  // Create matrix rain
  createMatrixRain();
  
  // Screen shake
  createScreenShake();
  
  // Spawn extra particles
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      createDimensionalRift();
    }, i * 100);
  }
  
  // Reset after 5 seconds
  setTimeout(() => {
    document.body.style.filter = quantumMode ? 'hue-rotate(30deg) saturate(1.3) contrast(1.1)' : 'none';
    document.body.style.animation = quantumMode ? 'quantumFlicker 0.1s infinite' : 'none';
  }, 5000);
}

// Window resize handler
window.addEventListener('resize', () => {
  // Recreate data streams on resize
  const existingStreams = document.querySelectorAll('.data-stream');
  existingStreams.forEach(stream => stream.remove());
  createDataStreams();
});

// Performance monitoring
let frameCount = 0;
let lastTime = performance.now();

function monitorPerformance() {
  frameCount++;
  const currentTime = performance.now();
  
  if (currentTime - lastTime >= 1000) {
    const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
    
    // Reduce effects if performance is poor
    if (fps < 30) {
      const particles = document.querySelectorAll('.particle');
      if (particles.length > 50) {
        for (let i = 50; i < particles.length; i++) {
          particles[i].remove();
        }
      }
    }
    
    frameCount = 0;
    lastTime = currentTime;
  }
  
  requestAnimationFrame(monitorPerformance);
}

// Start performance monitoring
requestAnimationFrame(monitorPerformance);

// Cleanup function for page unload
window.addEventListener('beforeunload', () => {
  // Clear all intervals and timeouts
  const intervals = [];
  const timeouts = [];
  
  // Note: In real implementation, you'd track interval/timeout IDs
  // This is a simplified cleanup
  document.querySelectorAll('.particle, .neural-line, .music-note, .data-stream').forEach(el => {
    el.remove();
  });
});