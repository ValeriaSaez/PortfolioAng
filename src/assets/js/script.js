/*window.onscroll = function () {
  var posicion = window.pageYOffset || document.documentElement.scrollTop;
  var elemento1 = document.
};*/

/*Conocimientos*/

function showModal() {
  $("#modal_mod_formacion").modal("show");
}

$(document).ready(function () {
  var altura = $(".container_menu ").offset().top;
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > altura) {
      $(".container_menu ").addClass("shrink");
    } else {
      $(".container_menu ").removeClass("shrink");
      $(".container_menu ").addClass("top");
    }
  });

  $("#selected").on("click", function () {
    var position = 0;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
    $("#selected").addClass("bottom");
  });

  $("#valeriasaez").on("click", function () {
    var position = 500;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
  });

  $("#educacion").on("click", function () {
    var position = 930;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
  });

  $("#formacion").on("click", function () {
    var position = 930;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
  });

  $("#conocimientos").on("click", function () {
    var position = 1400;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
  });

  $("#portfolio").on("click", function () {
    var position = 2000;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
  });

  $("#contacto").on("click", function () {
    var position = 2750;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
  });
});
