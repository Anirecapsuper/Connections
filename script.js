// ========================
// Futuristic Kasane Teto JavaScript
// ========================

// Enhanced cyberpunk particles system
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 80;
  const colors = ['pink', 'purple', 'cyan'];
  const sizes = [2, 3, 4, 6];
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle', colors[Math.floor(Math.random() * colors.length)]);
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.width = sizes[Math.floor(Math.random() * sizes.length)] + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (Math.random() * 6 + 4) + 's';
    
    // Add random holographic effects
    if (Math.random() < 0.3) {
      particle.style.opacity = '0.3';
      particle.style.filter = 'blur(1px)';
    }
    
    particlesContainer.appendChild(particle);
  }
}

// Holographic music notes system
let musicNotesActive = true;

function createMusicNote() {
  if (!musicNotesActive) return;
  
  const musicNotes = ['♪', '♫', '♩', '♬', '🎵', '🎶', '▲', '●', '■', '♦'];
  const note = document.createElement('div');
  note.classList.add('music-note');
  note.textContent = musicNotes[Math.floor(Math.random() * musicNotes.length)];
  note.style.left = Math.random() * 100 + '%';
  note.style.animationDuration = (Math.random() * 6 + 8) + 's';
  note.style.fontSize = (Math.random() * 12 + 16) + 'px';
  
  // Random holographic colors
  const colors = ['#00ffff', '#ff0080', '#8000ff', '#00ff41'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  note.style.color = color;
  note.style.textShadow = `0 0 10px ${color}`;
  
  document.getElementById('musicNotes').appendChild(note);
  
  setTimeout(() => {
    note.remove();
  }, 10000);
}

function toggleMusic() {
  musicNotesActive = !musicNotesActive;
  const btn = document.querySelector('.music-toggle');
  btn.textContent = musicNotesActive ? '🎵 Audio' : '🔇 Audio';
  
  if (!musicNotesActive) {
    document.getElementById('musicNotes').innerHTML = '';
  }
}

// Cyberpunk theme management
const themes = ["gradient", "solid", "glass", "neon"];
let currentTheme = 0;

function toggleTheme() {
  const header = document.getElementById("tetoHeader");
  header.classList.remove(...themes);
  currentTheme = (currentTheme + 1) % themes.length;
  header.classList.add(themes[currentTheme]);
  
  // Special cyberpunk effects for neon theme
  if (themes[currentTheme] === 'neon') {
    document.body.style.background = '#050508';
    createHologramScanlines();
  } else {
    document.body.style.background = '#0a0a0f';
    removeHologramScanlines();
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const toggleBtn = document.querySelector('.theme-toggle');
  const isDark = document.body.classList.contains('dark');
  toggleBtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
}

// Hologram scanline effects
function createHologramScanlines() {
  removeHologramScanlines(); // Remove existing ones first
  
  const scanlines = document.createElement('div');
  scanlines.id = 'hologramScanlines';
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
      rgba(0, 255, 255, 0.03) 2px,
      rgba(0, 255, 255, 0.03) 4px
    );
    animation: scanlineFlicker 0.15s linear infinite;
  `;
  document.body.appendChild(scanlines);
}

function removeHologramScanlines() {
  const existing = document.getElementById('hologramScanlines');
  if (existing) {
    existing.remove();
  }
}

// Add scanline animation
const style = document.createElement('style');
style.textContent = `
  @keyframes scanlineFlicker {
    0% { opacity: 1; }
    98% { opacity: 1; }
    99% { opacity: 0.8; }
    100% { opacity: 1; }
  }
`;
document.head.appendChild(style);

// Enhanced smooth scroll with cyberpunk effects
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Add cyberpunk scroll effect
        createScrollGlitch();
      }
    });
  });
}

// Data stream parallax effect
function initParallaxEffect() {
  let ticking = false;
  
  function updateParallax() {
    const header = document.querySelector('.teto-header');
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    
    header.style.transform = `translate3d(0, ${rate}px, 0)`;
    
    // Cyberpunk particle effects
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
      const speed = (index % 4 + 1) * 0.1;
      const rotation = scrolled * 0.5;
      particle.style.transform = `translate3d(0, ${scrolled * speed}px, 0) rotate(${rotation}deg)`;
    });
    
    // Data stream effect
    updateDataStreams(scrolled);
    
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

// Data streams background effect
function updateDataStreams(scrollPosition) {
  const streams = document.querySelectorAll('.data-stream');
  streams.forEach((stream, index) => {
    const speed = (index + 1) * 0.02;
    stream.style.transform = `translateY(${scrollPosition * speed}px)`;
  });
}

// Create floating data streams
function createDataStreams() {
  const streamCount = 8;
  const characters = ['0', '1', '▲', '●', '■', '♦', '|', '-', '+', '*'];
  
  for (let i = 0; i < streamCount; i++) {
    const stream = document.createElement('div');
    stream.classList.add('data-stream');
    stream.style.cssText = `
      position: fixed;
      left: ${Math.random() * 100}%;
      top: 0;
      width: 2px;
      height: 100vh;
      font-family: monospace;
      font-size: 12px;
      color: rgba(0, 255, 255, 0.3);
      z-index: 1;
      pointer-events: none;
    `;
    
    // Fill with random characters
    let streamContent = '';
    for (let j = 0; j < 50; j++) {
      streamContent += characters[Math.floor(Math.random() * characters.length)] + '<br>';
    }
    stream.innerHTML = streamContent;
    
    document.body.appendChild(stream);
  }
}

// Cyberpunk color shifts for particles
function randomizeParticleColors() {
  const particles = document.querySelectorAll('.particle');
  particles.forEach(particle => {
    if (Math.random() < 0.15) {
      const colors = ['pink', 'purple', 'cyan'];
      const currentColors = Array.from(particle.classList).filter(c => colors.includes(c));
      particle.classList.remove(...currentColors);
      particle.classList.add(colors[Math.floor(Math.random() * colors.length)]);
      
      // Add temporary glitch effect
      particle.style.filter = 'blur(2px) hue-rotate(45deg)';
      setTimeout(() => {
        particle.style.filter = 'blur(0.5px)';
      }, 200);
    }
  });
}

// Cyberpunk ripple effects for links
function initRippleEffects() {
  document.querySelectorAll('.site-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(0,255,255,0.8), transparent);
        border-radius: 50%;
        transform: scale(0);
        animation: cyberRipple 0.8s ease-out;
        pointer-events: none;
        box-shadow: 0 0 20px rgba(0,255,255,0.5);
      `;
      
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 800);
      
      // Add screen glitch effect
      createScreenGlitch();
    });
  });
}

// Screen glitch effect
function createScreenGlitch() {
  const glitch = document.createElement('div');
  glitch.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,0,128,0.1), transparent);
    z-index: 9999;
    pointer-events: none;
    animation: screenGlitch 0.1s ease-out;
  `;
  document.body.appendChild(glitch);
  
  setTimeout(() => glitch.remove(), 100);
}

// Scroll glitch effect
function createScrollGlitch() {
  document.body.style.filter = 'hue-rotate(180deg) contrast(1.2)';
  setTimeout(() => {
    document.body.style.filter = 'none';
  }, 50);
}

// Cyberpunk loading animation
function initLoadingAnimation() {
  document.body.style.opacity = '0';
  document.body.style.filter = 'blur(5px)';
  
  setTimeout(() => {
    document.body.style.transition = 'opacity 1s ease, filter 1s ease';
    document.body.style.opacity = '1';
    document.body.style.filter = 'none';
  }, 200);
}

// Terminal-style typing effect for header text
function initTypingEffect() {
  const heroText = document.querySelector('.teto-hero-text p');
  if (heroText) {
    const originalText = heroText.textContent;
    heroText.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        heroText.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      } else {
        // Add blinking cursor
        heroText.innerHTML += '<span style="animation: blink 1s infinite;">|</span>';
      }
    };
    
    setTimeout(typeWriter, 1000);
  }
}

// Add blinking cursor animation
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
  @keyframes cyberRipple {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
  @keyframes screenGlitch {
    0% { left: -100%; opacity: 0; }
    50% { opacity: 1; }
    100% { left: 100%; opacity: 0; }
  }
`;
document.head.appendChild(cursorStyle);

// Matrix-style background effect
function createMatrixEffect() {
  const canvas = document.createElement('canvas');
  canvas.id = 'matrixCanvas';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.1;
    pointer-events: none;
  `;
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ♪♫♩♬▲●■♦';
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);
  
  function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 10, 15, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ffff';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const text = characters[Math.floor(Math.random() * characters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  setInterval(drawMatrix, 35);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Core functionality
  createParticles();
  createDataStreams();
  createMatrixEffect();
  initSmoothScroll();
  initParallaxEffect();
  initRippleEffects();
  initLoadingAnimation();
  initTypingEffect();
  
  // Periodic animations
  setInterval(createMusicNote, 1500);
  setInterval(randomizeParticleColors, 3000);
  
  // Random glitch effects
  setInterval(() => {
    if (Math.random() < 0.1) {
      createScreenGlitch();
    }
  }, 10000);
});