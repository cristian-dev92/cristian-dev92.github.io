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
    downloadCV: "Descargar CV",
    
    headerName: "¡Hola! Soy Cristian Alhambra", 
    headerRole: "Desarrollador Fullstack",
    
    aboutTitle: "Sobre mí",
    aboutText: `Tras más de diez años trabajando y ganando experiencia en el mundo laboral donde la tecnología siempre ha sido mi entorno, decidí actualizar mi carrera para centrarme en el desarrollo web.<br><br> 
    Actualmente estoy finalizando el Grado de Desarrollo de Aplicaciones Web (DAW) y formándome como desarrollador Fullstack.<br><br> 
    Me gusta crear aplicaciones que funcionen bien, que tengan una lógica sólida y que resuelvan problemas reales.<br><br>
    Mi experiencia previa me ha enseñado el valor del trabajo en equipo, la constancia y a saber mantener la calma y buscar soluciones cuando las cosas se complican.<br><br>
    Estoy listo para seguir aprendiendo, afrontar nuevos retos y aportar todo lo que he cosechado estos años en nuevos proyectos.`, 
    
    projectsTitle: "Proyectos", 
    ecommerceStatus: "Listo para Producción",
    ecommerceTitle: "Ecommerce Fullstack",
    ecommerceDesc: `Plataforma e-commerce robusta que simula un entorno real de producción. Implementa autenticación segura y persistencia de datos de alta disponibilidad.<br><br>
    Cuenta con un panel de administración avanzado para la gestión integral del modelo de negocio (CRUD de productos, categorías y control de pedidos en tiempo real).<br><br>
    Arquitectura Técnica: Desarrollada bajo un diseño desacoplado. El frontend exprime el potencial de Angular mediante arquitectura modular, guards de ruta, interceptores HTTP y gestión eficiente del estado.<br><br> 
    El backend está construido sobre una API REST sólida en Spring Boot, securizada con JWT y con persistencia optimizada en PostgreSQL a través de Spring Data JPA`,
    taskflowStatus: "Listo para Producción",
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
    downloadCV: "Download CV",
       
    headerName: "Cristian Alhambra",
    headerRole: "Fullstack Developer", 
       
    aboutTitle: "About me",
    aboutText: `After more than ten years working and gaining experience in a field where technology has always been my environment, I decided to update my career to focus on web development.<br><br> 
    I am currently finishing my Bachelor's Degree in Web Application Development (DAW) and training to become a Fullstack Developer.<br><br> 
    I enjoy creating applications that work well, have solid logic, and solve real-world problems.<br><br> 
    My previous experience has taught me the value of teamwork, perseverance, and knowing how to stay calm and find solutions when things get complicated.<br><br> 
    I am ready to continue learning, take on new challenges, and contribute everything I have learned over the years to new projects.`, 
       
    projectsTitle: "Projects",
    ecommerceStatus: "Production Ready",
    ecommerceTitle: "Fullstack Ecommerce",
    ecommerceDesc: `Robust e-commerce platform that simulates a real production environment. Implements secure authentication and high-availability data persistence.<br><br>
    Features an advanced administration panel for comprehensive business model management (CRUD operations for products and categories, and real-time order tracking).<br><br>
    Technical Architecture: Developed using a decoupled design. The frontend leverages the potential of Angular through modular architecture, route guards, HTTP interceptors, and efficient state management.<br><br>
    The backend is built on a solid REST API in Spring Boot, secured with JWT, and with optimized persistence in PostgreSQL via Spring Data JPA.`,
    taskflowStatus: "Production Ready",
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
