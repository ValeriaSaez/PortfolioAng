/*window.onscroll = function () {
  var posicion = window.pageYOffset || document.documentElement.scrollTop;
  var elemento1 = document.
};*/

/*Conocimientos*/

function showModal() {
  $("#modal_mod_formacion").modal("show");
}

$(document).ready(function () {
  var altura = $("nav").offset().top;
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("shrink");
    } else {
      $("nav").removeClass("shrink");
      $("nav").addClass("top");
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
    var position = 450;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
    $("#selected").addClass("bottom");
  });

  $("#educacion").on("click", function () {
    var position = 750;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
    $("#selected").addClass("bottom");
  });

  $("#formacion").on("click", function () {
    var position = 750;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
    $("#selected").addClass("bottom");
  });

  $("#conocimientos").on("click", function () {
    var position = 1050;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
    $("#selected").addClass("bottom");
  });

  $("#portfolio").on("click", function () {
    var position = 1350;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
    $("#selected").addClass("bottom");
  });

  $("#contacto").on("click", function () {
    var position = 1650;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
    $("#selected").addClass("bottom");
  });
});
