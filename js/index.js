$(document).ready(function () {
  var falcon = false;
  function makePath(name) {
    const basePath = "/styles/images/Characters/";
    const path = basePath + name;

    return path;
  }

  function nextImage(isSnapped) {
    if (window.index == maxLength) {
      window.index = 0;
    }
    if (isSnapped) {
      let currImgSrc = $("#character")[0].attributes[0].value;
      console.log(currImgSrc);
    }

    let nextImageSrc = avengerImages[window.index];
    $("#character").attr("src", nextImageSrc);

    window.index++;
  }

  const avengerImages = [
    makePath("iron-man.png"),
    makePath("spiderman.png"),
    makePath("black-widow.png"),
    makePath("captain-america.png"),
    makePath("hawkeye.png"),
    makePath("scarlet-witch.png"),
    makePath("smart-hulk.png"),
    makePath("thor.png"),
  ];

  const maxLength = avengerImages.length;
  window.index = 0;

  nextImage(false);

  $(".dust-btn").click(function () {
    $(".dust-btn").addClass("clicked");
    $("#character").addClass("snap-img");

    setTimeout(function () {
      $(".dust-btn").removeClass("clicked");
      $("#character").removeClass("snap-img");
      $("#character").attr("src", "");

      nextImage(true);
    }, 1900);
  });
  $(".stay-btn").click(function () {
    $("#character").addClass("keep-img");

    setTimeout(function () {
      $("#character").removeClass("keep-img");
      $("#character").attr("src", "");
      nextImage(false);
    }, 1000);
  });
});
