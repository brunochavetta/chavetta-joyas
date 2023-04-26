document.addEventListener('DOMContentLoaded', function()) {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});

function muestra_oculta(clase) {
  var elemento = document.querySelector('.' + clase);
  if (elemento.classList.contains('d-none')) {
    elemento.classList.remove('d-none');
  } else {
    elemento.classList.add('d-none');
  }
}

$(document).ready(function(){
  $(".navbar-toggler").click(function(){
    $(".overlay").toggle();
    $(".navbar-collapse").removeClass("show"); 
  });
});

function mostrarVentanaModal(idModal) {
  var modal = document.getElementById(idModal);
  modal.style.display = "block";
}

function ocultarVentanaModal(idModal) {
  var modal = document.getElementById(idModal);
  modal.style.display = "none";
}



