/*window.onscroll = function () {
  var posicion = window.pageYOffset || document.documentElement.scrollTop;
  var elemento1 = document.
};*/
/*
const { Script } = require("vm");

Conocimientos */

function showModal() {
  $("#modal_mod_formacion").modal("show");
}

function showModalLogin() {
  $("#modal_login").modal("show");
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

/*Modal_login

const open = document.getElementById("open");
const modal_login = document.getElementById("modal_login");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_login.classList.add("show");
});

close.addEventListener("click", () => {
  modal_login.classList.remove("show");
}); */

function vermas(id) {
  if (id == "mas") {
    document.getElementById("desplegar").style.display = "block";
    document.getElementById("mas").style.display = "none";
  } else {
    document.getElementById("desplegar").style.display = "none";
    document.getElementById("mas").style.display = "inline";
  }
}
/*
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal_c")[0];
let modalc = document.querySelectorAll(".modal_c_v")[0];


 $(document).on("click", "#open", function () {
    $("#modal_login").modal("show");
  });
*/
