const texto = "Debugging_Drink_\nBy_AMR_";
    let index = 0;
    let isWriting = false;

    function escribirTexto() {
      if (index < texto.length) {
        document.getElementById("texto-deb").innerHTML += texto.charAt(index);
        index++;
        setTimeout(escribirTexto, 200); // Ajusta el tiempo para cambiar la velocidad
      }
    }

    // Función para iniciar el efecto de escritura solo cuando el div se vea en pantalla
    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isWriting) {
          isWriting = true; // Evitar que se ejecute más de una vez
          escribirTexto(); // Iniciar la animación de escritura
        }
      });
    }

    // Crear un observador para detectar cuándo el div entra en la vista
    const observer = new IntersectionObserver(handleIntersect, {
      root: null, // Usa el viewport actual
      threshold: 0.5 // Al menos el 50% del div debe estar visible
    });

    // Observar el div con id "debugging-drink"
    observer.observe(document.getElementById("debugging-drink"));