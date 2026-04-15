//* ----------- IDIOMAS (ES / EN) ----------- *//
const langBtn = document.getElementById("langToggle"); 
let currentLang = localStorage.getItem("lang") || "es"; 

const translations = { 
  es: { 
    menuAbout: "Sobre mí", 
    menuProjects: "Proyectos",
    menuSkills: "Mis habilidades",
    menuContact: "Contacto", 
    contactMessage: "Escribe tu mensaje...",
    sendMessage: "Enviar mensaje",
    placeholderName: "Tu nombre", 
    placeholderEmail: "Tu email", 
    placeholderMessage: "Escribe tu mensaje...",
    
    headerName: "¡Hola! Soy Cristian Alhambra", 
    headerRole: "Desarrollador Fullstack",
    
    aboutTitle: "Sobre mí",
    aboutText: `Soy técnico superior en desarrollo de aplicaciones web, actualmente me desempeño como desarrollador fullstack con experiencia práctica en Java, Spring Boot, Angular y base de datos.<br><br>
    Me enfoco en crear aplicaciones completas, funcionales y bien estructuradas. <br><br>
    Cada proyecto supone un reto que impulsa mi crecimiento personal y profesional. <br><br>
    Destaco por mi capacidad de aprendizaje rápido, constancia, trabajo en equipo y enfoque profesional en resolución de problemas.`, 
    
    projectsTitle: "Proyectos", 
    ecommerceTitle: "Ecommerce Fullstack",
    ecommerceDesc: `Plataforma ecommerce completa con autenticación segura, gestión de usuarios, catálogo dinámico, carrito persistente y checkout funcional.<br><br> 
    Incluye un panel de administración con CRUD de productos, categorías y pedidos.<br><br> 
    El proyecto está desarrollado con Angular (arquitectura modular, servicios, guards, interceptores) y Spring Boot (REST API, validación, seguridad con JWT, persistencia con JPA y PostgreSQL).`,
    taskflowTitle: "TaskFlow - Gestor de Tareas Fullstack",
    taskflowDesc: `Aplicación completa para gestionar tareas con autenticación, subtareas, estados, filtros y panel Kanban.<br><br> 
    Proyecto fullstack realista diseñado para demostrar arquitectura profesional y buenas prácticas.<br><br>
    Diseñé y documenté la API REST usando Postman y aseguré los endpoints con JWT.`,
    erpTitle: "Gestión inteligente de ERP y TPV",
    erpDesc: `Solución integral de gestión comercial optimizada para el sector servicios.<br><br> 
    Este sistema permite un control total del inventario y ventas, integrando un módulo de comunicación directa con los sistemas de la Agencia Tributaria.`,

    skillsTitle: "Mis habilidades",
    
    closeModal: "✖",
    contactTitle: "Contacto" 
  }, 
  
  en: { 
    menuAbout: "About me",
    menuProjects: "Projects",
    menuSkills: "My Skills",
    menuContact: "Contact",
    contactMessage: "Write your message...",
    sendMessage: "Send message",
    placeholderName: "Your name", 
    placeholderEmail: "Your email", 
    placeholderMessage: "Write your message...",
       
    headerName: "Cristian Alhambra",
    headerRole: "Fullstack Developer", 
       
    aboutTitle: "About me",
    aboutText: `I am a certified web application developer and currently work as a full-stack developer with hands-on experience in Java, Spring Boot, Angular, and databases.<br><br>
    I focus on creating complete, functional, and well-structured applications.<br><br>
    Each project presents a challenge that fosters my personal and professional growth.<br><br>
    I excel at rapid learning, perseverance, teamwork, and a professional approach to problem-solving.`, 
       
    projectsTitle: "Projects",
    ecommerceTitle: "Fullstack Ecommerce",
    ecommerceDesc: `A complete e-commerce platform with secure authentication, user management, a dynamic catalog, a persistent shopping cart, and a functional checkout.<br><br>
    It includes an administration panel with CRUD operations for products, categories, and orders.<br><br>
    The project is developed using Angular (modular architecture, services, guards, interceptors) and Spring Boot (REST API, validation, security with JWT, persistence with JPA, and PostgreSQL).`,
    taskflowTitle: "TaskFlow - Fullstack Task Manager",
    taskflowDesc: `A complete application for managing tasks with authentication, subtasks, statuses, filters, and a Kanban board. <br><br>
    A realistic full-stack project designed to demonstrate professional architecture and best practices.<br><br>
    I designed and documented the REST API using Postman and secured the endpoints with JWT.`,
    erpTitle: "ERP & TPV Smart Management",
    erpDesc: `A comprehensive business management solution optimized for the service sector.<br><br> 
    This system allows for complete control of inventory and sales, integrating a module for direct communication with the Tax Agency's systems.</strong>.`,

    skillsTitle: "My Skills",
    
    closeModal: "✖", 
    contactTitle: "Contact" 
  } 
}; 

function applyTranslations() { 
  document.querySelectorAll("[data-key]").forEach(el => { 
    const key = el.getAttribute("data-key"); 
    const translation = translations[currentLang][key];

    if (!translation) return; // evita undefined 

    // Si el elemento tiene placeholder, traducir placeholder
    if (el.placeholder !== undefined) { 
      el.placeholder = translation; 
    } 
    else { 
      el.innerHTML = translation;
    }
  }); 
} 

langBtn.addEventListener("click", () => { 
  currentLang = currentLang === "es" ? "en" : "es"; 
  langBtn.textContent = currentLang === "es" ? "EN" : "ES"; 
  localStorage.setItem("lang", currentLang);
  applyTranslations(); 
}); 

// Cargar idioma guardado 
applyTranslations();

/* ----------- MODO OSCURO / CLARO ----------- */ 
const themeBtn = document.getElementById("themeToggle"); 

// Cargar modo guardado 
if (localStorage.getItem("theme") === "light") { 
  document.body.classList.add("light-mode"); 
  themeBtn.textContent = "☀️";
} 

themeBtn.addEventListener("click", () => { 
  document.body.classList.toggle("light-mode"); 
  
  if (document.body.classList.contains("light-mode")) { 
    themeBtn.textContent = "☀️"; 
    localStorage.setItem("theme", "light"); } 
  else { 
    themeBtn.textContent = "🌙"; 
    localStorage.setItem("theme", "dark"); 
  } 
});

/* ----------- CARRUSEL CON FLECHAS ----------- */
function initCarousel(id) { 
  const carousel = document.getElementById(id); 
  const images = carousel.querySelectorAll("img");
  const left = carousel.querySelector(".left"); 
  const right = carousel.querySelector(".right");
  
  let index = 0; 

  function showImage(i) { 
    images.forEach(img => img.classList.remove("active")); 
    images[i].classList.add("active"); 
  }
  
  right.addEventListener("click", () => { 
    index = (index + 1) % images.length; 
    showImage(index); 
  });
  
  left.addEventListener("click", () => { 
    index = (index - 1 + images.length) % images.length; 
    showImage(index); 
  });
  
  // Auto-slide
  setInterval(() => {
    index = (index + 1) % images.length; 
    showImage(index);
  }, 3000); 

   // Abrir modal al hacer clic 
  images.forEach((img, i) => { 
    img.addEventListener("click", () => { 
      openModal(images, i); 
    }); 
  }); 
}

initCarousel("carousel1"); 
initCarousel("carousel2"); 

/* MODAL CON ZOOM + FLECHAS */ 

let modalIndex = 0; 
let modalImages = [];

function openModal(images, index) { 
  modalImages = images; 
  modalIndex = index; 
  
  document.getElementById("modalImg").src = modalImages[modalIndex].src; 
  document.getElementById("modal").style.display = "flex"; 
} 

document.querySelector(".closeModal").addEventListener("click", () => { 
  document.getElementById("modal").style.display = "none";
}); 

document.querySelector(".leftModal").addEventListener("click", () => { 
  modalIndex = (modalIndex - 1 + modalImages.length) % modalImages.length; 
  document.getElementById("modalImg").src = modalImages[modalIndex].src; 
});

document.querySelector(".rightModal").addEventListener("click", () => {
  modalIndex = (modalIndex + 1) % modalImages.length;
  document.getElementById("modalImg").src = modalImages[modalIndex].src;
}); 

// Cerrar modal haciendo clic fuera
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.classList.contains("closeModal") || e.target.id === "modal") {
    document.getElementById("modal").style.display = "none"; 
  } 
});

/* ----------- BOTÓN ARRIBA ----------- */ 
const topBtn = document.getElementById("topBtn"); 

window.addEventListener("scroll", () => { 
  topBtn.style.display = window.scrollY > 300 ? "block" : "none"; 
});

topBtn.addEventListener("click", () => { 
  window.scrollTo({ top: 0, behavior: "smooth" }); 
});

/* ----------- SCROLL SUAVE (Fix para el menú) ----------- */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // Solo si el enlace es a una sección interna
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navHeight = document.querySelector("nav").offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    }
  });
});
