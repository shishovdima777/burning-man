$(document).ready(function () {
  const menuBtn = $(".menu-btn");
  const overlay = $(".burger-overlay");
  const menuNav = $(".menu");
  const body = $("body");

  let menuOpen = false;
  menuBtn.click(() => {
    if (!menuOpen) {
      menuBtn.addClass("open");
      overlay.addClass("overlay-active");
      menuNav.addClass("menu-active");
      body.css("overflow", "hidden");
      menuOpen = true;
    } else {
      menuBtn.removeClass("open");
      overlay.removeClass("overlay-active");
      menuNav.removeClass("menu-active");
      body.css("overflow", "auto");
      menuOpen = false;
    }
  });

  overlay.click(() => {
    overlay.removeClass("overlay-active");
    menuBtn.removeClass("open");
    menuNav.removeClass("menu-active");
  });

  $(window)
    .bind("resize", () => {
      if ($(this).width() > 768) {
        menuBtn.removeClass("open");
        overlay.removeClass("overlay-active");
        menuNav.removeClass("menu-active");
        body.css("overflow", "auto");
      } else {
        console.log("error");
      }
    })
    .trigger("resize");
});
