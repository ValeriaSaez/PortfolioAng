/*window.onscroll = function () {
  var posicion = window.pageYOffset || document.documentElement.scrollTop;
  var elemento1 = document.
};*/

/*Conocimientos*/

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
});
