const texto="Debugging_Drink_\nBy_AMR_";let index=0,isWriting=!1;function escribirTexto(){index<texto.length&&(document.getElementById("texto-deb").innerHTML+=texto.charAt(index),index++,setTimeout(escribirTexto,200))}function handleIntersect(e,t){e.forEach((e=>{e.isIntersecting&&!isWriting&&(isWriting=!0,escribirTexto())}))}const observer=new IntersectionObserver(handleIntersect,{root:null,threshold:.5});observer.observe(document.getElementById("debugging-drink"));