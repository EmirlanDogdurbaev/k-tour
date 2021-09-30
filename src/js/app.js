import "bootstrap";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "../node_modules/swiper/swiper-bundle";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../node_modules/swiper/swiper-bundle";

// swiper
const swiper = new Swiper(".swiper", {
  // centeredSlides: true,
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 3.5,
      spaceBetween: 50,
    },
    // when window width is >= 640px
    1850: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
    // when window width is >= 640px
    2350: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
  },
});


let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos <= 1000) {
    document.getElementById("navbar").style.transform = "translateY(0px)"

    if (currentScrollPos <= 50) {
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("nav-link-1").style.color = "#fff"
      document.getElementById("nav-link-2").style.color = "#fff"
      document.getElementById("nav-link-3").style.color = "#fff"
      document.getElementById("togg-id").style.backgroundColor = "#fff"
      document.getElementById("togg-id-1").style.backgroundColor = "#fff"
      document.getElementById("logo").src = "http://kyrgyz-tours.info/sites/default/files/yurtv2_0.png"
    }
    else {
      document.getElementById("navbar").style.backgroundColor = "#fff";
      document.getElementById("nav-link-1").style.color = "#000"
      document.getElementById("nav-link-2").style.color = "#000"
      document.getElementById("nav-link-3").style.color = "#000"
      document.getElementById("togg-id").style.backgroundColor = "#000"
      document.getElementById("togg-id-1").style.backgroundColor = "#000"
      document.getElementById("logo").src = "http://kyrgyz-tours.info/sites/default/files/yurtv2_0.png"
    }
  }
  else if(currentScrollPos < prevScrollpos) {
    document.getElementById("navbar").style.transform = "translateY(0px)"
  }
  else{
    document.getElementById("navbar").style.transform = "translateY(-500px)"

  }
  prevScrollpos = currentScrollPos;
}

var linkMore = document.querySelector(".link-more"),
  text = document.querySelector(".text");

linkMore.onclick = function (e) {
  e.preventDefault();
  text.classList.toggle("text-open");
};