// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Animación de barras de habilidades al hacer scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target;
            const width = skillProgress.getAttribute('data-width');
            skillProgress.style.width = width + '%';
            observer.unobserve(skillProgress);
        }
    });
}, observerOptions);

// Observar todas las barras de habilidades
document.querySelectorAll('.skill-progress').forEach(progress => {
    observer.observe(progress);
});

// Efecto de aparición al hacer scroll
const fadeElements = document.querySelectorAll('.project-card, .skill-item, .stat');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

// Cambiar color de la navbar al hacer scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.7)';
        navbar.style.borderBottomColor = 'rgba(0, 212, 255, 0.3)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
        navbar.style.borderBottomColor = 'rgba(0, 212, 255, 0.2)';
    }
    
    lastScroll = currentScroll;
});

// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Obtener valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Deshabilitar botón y mostrar loading
    const originalText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    
    // Simular envío (reemplazar con tu lógica real)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mostrar mensaje de éxito
    submitButton.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
    submitButton.style.background = 'linear-gradient(135deg, #00ff88, #00cc6a)';
    
    // Crear notificación visual
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.9), rgba(64, 224, 208, 0.9));
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0, 212, 255, 0.4);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        backdrop-filter: blur(10px);
        max-width: 400px;
    `;
    notification.innerHTML = `
        <h3 style="margin-bottom: 0.5rem; font-size: 1.2rem;">
            <i class="fas fa-check-circle"></i> ¡Mensaje Enviado!
        </h3>
        <p>Gracias ${name}, te contactaré pronto en ${email}</p>
    `;
    document.body.appendChild(notification);
    
    // Limpiar formulario después de un momento
    setTimeout(() => {
        contactForm.reset();
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
        submitButton.style.background = '';
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
    
    // Nota: Para un proyecto real, deberías integrar un servicio de email
    // como EmailJS (https://www.emailjs.com/) o Formspree (https://formspree.io/)
});

// Efecto parallax suave en el scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 600;
    }
});

// Agregar animación de entrada a los elementos al cargar
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.section-title, .section-subtitle');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = 'fadeInUp 0.8s ease forwards';
        }, index * 100);
    });
});

// Animación de partículas en el fondo (opcional - simple)
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'rgba(99, 102, 241, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100%';
    particle.style.zIndex = '1';
    document.body.appendChild(particle);
    
    const duration = Math.random() * 3 + 2;
    particle.style.transition = `transform ${duration}s linear, opacity ${duration}s linear`;
    
    setTimeout(() => {
        particle.style.transform = `translateY(-100vh) translateX(${Math.random() * 200 - 100}px)`;
        particle.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Crear partículas cada 2 segundos (opcional)
// setInterval(createParticle, 2000);

// Actualizar año en el footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer p');
if (footerYear) {
    footerYear.textContent = footerYear.textContent.replace('2024', currentYear);
}

