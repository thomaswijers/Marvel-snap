$(document).ready(function () {
  function makePath(name) {
    const basePath = "/styles/images/Characters/";
    const path = basePath + name;

    return path;
  }

  function nextImage() {
    if (window.index == maxLength) {
      window.index = 0;
    }

    let nextImageSrc = avengerImages[window.index];
    $("#character").attr("src", nextImageSrc);

    window.index++;
  }

  const avengerImages = [
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

  nextImage();

  $(".dust-btn").click(function () {
    $(".dust-btn").addClass("clicked");
    $("#character").addClass("snap-img");

    setTimeout(function () {
      $(".dust-btn").removeClass("clicked");
      $("#character").removeClass("snap-img");
      $("#character").attr("src", "");

      nextImage();
    }, 1900);
  });
});
