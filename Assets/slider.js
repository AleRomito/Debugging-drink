// Función para activar la clase que inicia el autoplay del slider
function iniciarAutoplaySlider(entries, sliderObserver) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const slider = document.getElementById("mi-slider");
        slider.classList.add("slider-nav-autoplay"); // Agregar la clase autoplay
      }
    });
  }
  
  // Renombrar la variable observer a sliderObserver para evitar conflictos con otros scripts
  const sliderObserver = new IntersectionObserver(iniciarAutoplaySlider, {
    root: null, // Usa el viewport actual
    threshold: 0.5 // Activar cuando el 50% del slider sea visible
  });
  
  // Observar el slider
  sliderObserver.observe(document.getElementById("mi-slider"));