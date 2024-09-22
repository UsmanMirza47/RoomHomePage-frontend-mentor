// --------------
// All varaible
// --------------
let imgSlider = document.querySelector(".image-slider");
let blogs = document.querySelectorAll(".blog");
let mobNav = document.querySelector(".navbar ul")

// -------------------------------
// all array and constant
// -------------------------------
clickCount = 0;
let x = window.matchMedia("(max-width: 376px)");
let img = [
  "./images/desktop-image-hero-1.jpg",
  "./images/desktop-image-hero-2.jpg",
  "./images/desktop-image-hero-3.jpg",
];
let imgMob = [
  "./images/mobile-image-hero-1.jpg",
  "./images/mobile-image-hero-2.jpg",
  "./images/mobile-image-hero-3.jpg",
];

// ------------------------------
// All function
// ------------------------------
function changeImg(value) {
  blogs.forEach((blog) => {
    blog.style.display = "none";
  });
  clickCount += value;
  //   imgSlider.style.backgroungImage = "url('')"
  if (clickCount == img.length) {
    clickCount = 0;
  } else if (clickCount < 0) {
    clickCount = img.length - 1;
  }
  blogs[clickCount].style.display = "flex";

  if (x.matches) {
    imgSlider.style.backgroundImage = `url(${imgMob[clickCount]})`;
  } else {
    imgSlider.style.backgroundImage = `url(${img[clickCount]})`;
  }
}

function slideShow() {
  mobNav.style.display = "flex"
}

function slideShowOff() {
  mobNav.style.display = "none";
}
