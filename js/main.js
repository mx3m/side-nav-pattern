$(document).ready(function() {

  $("#main-nav").headroom({
    "tolerance": 10,
    "offset": 205,
    "classes": {
      "initial": "animated",
      "pinned": "slideInDown",
      "unpinned": "slideInUp",
      "top": "headroom--top",
      "notTop": "headroom--not-top"
    }
  });

  // to destroy
  $("#header").headroom("destroy");

  $("#overlay-trigger").click(function(){
    $(".overlay-slidedown").addClass("open");
  });

  $("#overlay-close").click(function(){
    $(".overlay-slidedown").removeClass("open");
  });

});

