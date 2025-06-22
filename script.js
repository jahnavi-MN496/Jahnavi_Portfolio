// Loading Screen
window.addEventListener('load', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  const typingText = document.querySelector('.typing-text');
  
  // Simulate typing effect
  const text = "Loading portfolio...";
  let index = 0;
  
  const typeText = () => {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 100);
    } else {
      // Hide loading screen after typing
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.classList.add('loaded');
      }, 500);
    }
  };
  
  typeText();
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Back to top button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Download Resume Button
const downloadResumeBtn = document.getElementById('downloadResume');

downloadResumeBtn.addEventListener('click', () => {
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = 'MJN_final_resume.pdf';
  link.download = 'Jaanu_Resume.pdf';
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Add click effect
  downloadResumeBtn.style.transform = 'scale(0.9)';
  setTimeout(() => {
    downloadResumeBtn.style.transform = '';
  }, 150);
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.6s ease';
  observer.observe(section);
});

// Animated counter for stats
const stats = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const finalValue = parseInt(target.getAttribute('data-target'));
      const duration = 2000;
      const increment = finalValue / (duration / 16);
      let currentValue = 0;
      
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(timer);
        }
        target.textContent = Math.floor(currentValue);
      }, 16);
      
      statsObserver.unobserve(target);
    }
  });
}, { threshold: 0.5 });

stats.forEach(stat => {
  statsObserver.observe(stat);
});

// Skill bars animation
const skillItems = document.querySelectorAll('.skill-item');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillItem = entry.target;
      const progressBar = skillItem.querySelector('.skill-progress');
      
      // Animate skill item
      skillItem.classList.add('animate');
      
      // Animate progress bar
      setTimeout(() => {
        progressBar.classList.add('animate');
      }, 300);
      
      skillObserver.unobserve(skillItem);
    }
  });
}, { threshold: 0.5 });

skillItems.forEach(item => {
  skillObserver.observe(item);
});

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
  body {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  body.loaded {
    opacity: 1;
  }
`;
document.head.appendChild(loadingStyle);

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Add typing effect to code editor
const codeLines = document.querySelectorAll('.code-lines .code-line');
let currentLine = 0;

const typeCodeLine = () => {
  if (currentLine < codeLines.length) {
    const line = codeLines[currentLine];
    const text = line.innerHTML;
    line.innerHTML = '';
    line.style.opacity = '1';
    
    let charIndex = 0;
    const typeChar = () => {
      if (charIndex < text.length) {
        line.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, 50);
      } else {
        currentLine++;
        setTimeout(typeCodeLine, 200);
      }
    };
    typeChar();
  }
};

// Start typing effect when code editor is visible
const codeEditorObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(typeCodeLine, 1000);
      codeEditorObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const codeEditor = document.querySelector('.code-editor');
if (codeEditor) {
  codeEditorObserver.observe(codeEditor);
}

// Add particle effect to hero section
const createParticle = () => {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.cssText = `
    position: absolute;
    width: 2px;
    height: 2px;
    background: var(--accent-primary);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0.6;
    animation: particle-float 6s linear infinite;
  `;
  
  particle.style.left = Math.random() * 100 + '%';
  particle.style.top = Math.random() * 100 + '%';
  particle.style.animationDelay = Math.random() * 6 + 's';
  
  document.querySelector('.about').appendChild(particle);
  
  setTimeout(() => {
    particle.remove();
  }, 6000);
};

// Create particles periodically
setInterval(createParticle, 2000);

// Add CSS for particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
  @keyframes particle-float {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.6;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      transform: translateY(-100px) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(particleStyle);

// Add scroll-triggered animations for sections
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const section = entry.target;
      const elements = section.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animated');
        }, index * 200);
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('section').forEach(section => {
  sectionObserver.observe(section);
});

// Add CSS for scroll animations
const scrollAnimationStyle = document.createElement('style');
scrollAnimationStyle.textContent = `
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }
  
  .animate-on-scroll.animated {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(scrollAnimationStyle);

// Add smooth reveal animation for project cards
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0) scale(1)';
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.project-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(50px) scale(0.9)';
  card.style.transition = 'all 0.6s ease';
  projectObserver.observe(card);
});

// Add hover effect for skill categories
document.querySelectorAll('.skill-category').forEach(category => {
  category.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
    this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
  });
  
  category.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  });
});

// Add click effect for social links
document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Create click effect
    const effect = document.createElement('div');
    effect.style.cssText = `
      position: absolute;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
      border-radius: 50%;
      transform: scale(0);
      animation: click-effect 0.6s ease-out;
      pointer-events: none;
    `;
    
    this.style.position = 'relative';
    this.appendChild(effect);
    
    setTimeout(() => {
      effect.remove();
    }, 600);
  });
});

// Add CSS for click effect
const clickEffectStyle = document.createElement('style');
clickEffectStyle.textContent = `
  @keyframes click-effect {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`;
document.head.appendChild(clickEffectStyle);

// Add smooth color transition for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.style.color = 'var(--accent-primary)';
  });
  
  link.addEventListener('mouseleave', function() {
    this.style.color = 'var(--text-secondary)';
  });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close mobile menu
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
  
  if (e.key === 'Home') {
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});

// Add smooth reveal for contact items
const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateX(0)';
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.contact-item').forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-30px)';
  item.style.transition = 'all 0.6s ease';
  contactObserver.observe(item);
});

// Add loading animation for images (if any)
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('load', function() {
    this.style.opacity = '1';
    this.style.transform = 'scale(1)';
  });
  
  img.style.opacity = '0';
  img.style.transform = 'scale(0.9)';
  img.style.transition = 'all 0.5s ease';
});

// Add smooth scroll behavior for all internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Add active state for navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Add CSS for active navigation state
const activeNavStyle = document.createElement('style');
activeNavStyle.textContent = `
  .nav-link.active {
    color: var(--accent-primary) !important;
  }
  
  .nav-link.active::after {
    width: 100% !important;
  }
`;
document.head.appendChild(activeNavStyle);

// Skills Section Interactions
document.addEventListener('DOMContentLoaded', () => {
  const skillCards = document.querySelectorAll('.skill-card');
  
  // Animate skill cards on scroll
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        card.classList.add('animate');
        skillObserver.unobserve(card);
      }
    });
  }, { threshold: 0.3 });
  
  skillCards.forEach(card => {
    skillObserver.observe(card);
  });
  
  // Add click effects to skill cards
  skillCards.forEach(card => {
    card.addEventListener('click', function() {
      // Create ripple effect
      createRippleEffect(this);
      
      // Add temporary glow effect
      this.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.4)';
      setTimeout(() => {
        this.style.boxShadow = '';
      }, 500);
    });
  });
  
  // Create ripple effect for skill cards
  function createRippleEffect(card) {
    const ripple = document.createElement('div');
    ripple.className = 'skill-ripple';
    ripple.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      background: rgba(0, 212, 255, 0.3);
      border-radius: 50%;
      animation: skill-ripple 0.6s ease-out;
      pointer-events: none;
      z-index: 1;
    `;
    
    card.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
  
  // Add hover sound effect simulation
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // Add subtle scale effect
      this.style.transform = 'translateY(-8px) scale(1.02)';
      
      // Add glow effect
      this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 212, 255, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      // Reset effects
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
});

// Add CSS for skill animations
const skillAnimationsStyle = document.createElement('style');
skillAnimationsStyle.textContent = `
  @keyframes skill-ripple {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      width: 200px;
      height: 200px;
      opacity: 0;
    }
  }
  
  .skill-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .skill-card:hover {
    transform: translateY(-8px) scale(1.02);
  }
  
  .skill-fill {
    transition: transform 2s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
document.head.appendChild(skillAnimationsStyle);

// Handle skill image loading errors
document.addEventListener('DOMContentLoaded', () => {
  const skillImages = document.querySelectorAll('.skill-icon img');
  
  skillImages.forEach(img => {
    img.addEventListener('error', function() {
      // Hide the failed image
      this.style.display = 'none';
      
      // Show the fallback emoji
      const fallback = this.nextElementSibling;
      if (fallback && fallback.tagName === 'SPAN') {
        fallback.style.display = 'flex';
      }
    });
    
    // Check if image loaded successfully
    img.addEventListener('load', function() {
      this.style.display = 'block';
      this.style.opacity = '1';
      
      // Hide fallback if image loads successfully
      const fallback = this.nextElementSibling;
      if (fallback && fallback.tagName === 'SPAN') {
        fallback.style.display = 'none';
      }
    });
  });
}); 