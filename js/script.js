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

/* ----------- CARRUSEL ----------- */
function initCarousel(id) { 
  const carousel = document.getElementById(id); 
  const images = carousel.querySelectorAll("img");
  let index = 0; 
  
  setInterval(() => {
    images[index].classList.remove("active"); 
    index = (index + 1) % images.length; 
    images[index].classList.add("active");
  }, 2500); 
  
  images.forEach(img => {
    img.addEventListener("click", () => {
      document.getElementById("modalImg").src = img.src; 
      document.getElementById("modal").style.display = "flex"; 
    });
  });

} initCarousel("carousel1"); 

/* ----------- MODAL ----------- */ 
document.getElementById("modal").addEventListener("click", () => { 
  ocument.getElementById("modal").style.display = "none"; 
}); 

/* ----------- BOTÓN ARRIBA ----------- */ 
const topBtn = document.getElementById("topBtn"); 

window.addEventListener("scroll", () => { 
  topBtn.style.display = window.scrollY > 300 ? "block" : "none"; 
});

topBtn.addEventListener("click", () => { 
  window.scrollTo({ top: 0, behavior: "smooth" }); 
});
