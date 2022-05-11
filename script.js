$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $("#header").css("background", "rgb(24, 42, 78)");
      $("#header h3 a").css("color", "rgba(255, 255, 255, 0.95)");
      $(" #header nav ul li a").css("color", "rgba(255, 255, 255, 0.95)");
    } else {
      $("#header").css("background", "rgba(255, 255, 255, 0.95)");
      $("#header h3 a").css("color", "rgb(24, 42, 78)");
      $(" #header nav ul li a").css("color", "rgb(24, 42, 78)");
    }
  });
});
