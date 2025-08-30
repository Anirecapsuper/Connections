// ========================
// Enhanced Kasane Teto JavaScript
// ========================

// Enhanced particles system
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 60;
  const colors = ['pink', 'purple', 'cyan'];
  const sizes = [4, 6, 8, 10];
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle', colors[Math.floor(Math.random() * colors.length)]);
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.width = sizes[Math.floor(Math.random() * sizes.length)] + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 3) + 's';
    particlesContainer.appendChild(particle);
  }
}

// Music notes animation system
let musicNotesActive = true;

function createMusicNote() {
  if (!musicNotesActive) return;
  
  const musicNotes = ['♪', '♫', '♩', '♬', '🎵', '🎶'];
  const note = document.createElement('div');
  note.classList.add('music-note');
  note.textContent = musicNotes[Math.floor(Math.random() * musicNotes.length)];
  note.style.left = Math.random() * 100 + '%';
  note.style.animationDuration = (Math.random() * 4 + 6) + 's';
  note.style.fontSize = (Math.random() * 10 + 15) + 'px';
  
  document.getElementById('musicNotes').appendChild(note);
  
  setTimeout(() => {
    note.remove();
  }, 8000);
}

function toggleMusic() {
  musicNotesActive = !musicNotesActive;
  const btn = document.querySelector('.music-toggle');
  btn.textContent = musicNotesActive ? '🎵 Notes' : '🔇 Notes';
  
  if (!musicNotesActive) {
    document.getElementById('musicNotes').innerHTML = '';
  }
}

// Enhanced theme management
const themes = ["gradient", "solid", "glass", "neon"];
let currentTheme = 0;

function toggleTheme() {
  const header = document.getElementById("tetoHeader");
  header.classList.remove(...themes);
  currentTheme = (currentTheme + 1) % themes.length;
  header.classList.add(themes[currentTheme]);
  
  // Add special effects for neon theme
  if (themes[currentTheme] === 'neon') {
    document.body.style.background = 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 100%)';
  } else if (!document.body.classList.contains('dark')) {
    document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const toggleBtn = document.querySelector('.theme-toggle');
  const isDark = document.body.classList.contains('dark');
  toggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// Smooth scroll enhancement
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

// Enhanced parallax effect
function initParallaxEffect() {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.teto-header');
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    header.style.transform = `translateY(${rate}px)`;
    
    // Parallax for particles
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
      const speed = (index % 3 + 1) * 0.1;
      particle.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// Mouse interaction effects
function initMouseEffects() {
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const avatar = document.querySelector('.teto-avatar');
    const moveX = (mouseX - 0.5) * 10;
    const moveY = (mouseY - 0.5) * 10;
    
    avatar.style.transform += ` translate(${moveX}px, ${moveY}px)`;
  });
}

// Random color shifts for particles
function randomizeParticleColors() {
  const particles = document.querySelectorAll('.particle');
  particles.forEach(particle => {
    if (Math.random() < 0.1) { // 10% chance
      const colors = ['pink', 'purple', 'cyan'];
      const currentColors = Array.from(particle.classList).filter(c => colors.includes(c));
      particle.classList.remove(...currentColors);
      particle.classList.add(colors[Math.floor(Math.random() * colors.length)]);
    }
  });
}

// Click ripple effects for links
function initRippleEffects() {
  // Add ripple animation keyframe
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Add click effects to links
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
        background: radial-gradient(circle, rgba(255,255,255,0.5), transparent);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;
      
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// Loading animation
function initLoadingAnimation() {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.8s ease';
    document.body.style.opacity = '1';
  }, 100);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Core functionality
  createParticles();
  initSmoothScroll();
  initParallaxEffect();
  initMouseEffects();
  initRippleEffects();
  initLoadingAnimation();
  
  // Periodic animations
  setInterval(createMusicNote, 2000);
  setInterval(randomizeParticleColors, 5000);
});