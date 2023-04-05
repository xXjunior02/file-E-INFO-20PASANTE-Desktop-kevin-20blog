window.addEventListener("load", function() {
    var elementos = document.querySelectorAll(".texto");
    for (var i = 0; i < elementos.length; i++) {
      elementos[i].classList.add("aparecer");
    }
  });