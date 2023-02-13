const cv = document.getElementById("cv");
const portfolio = document.getElementById("portfolio");
const homeControler = document.getElementById("controler");
const homeSection = cv.parentElement;

let showCv = false;

function toggelHome() {
  if (showCv) {
    homeSection.style.backgroundImage = "url('./img/img_bg_1.jpg')";
    cv.style.display = "flex";
    portfolio.style.display = "none";
  } else {
    homeSection.style.backgroundImage = "url('./img/img_bg_2.jpg')";
    cv.style.display = "none";
    portfolio.style.display = "flex";
  }
  homeControler.children[0].classList.toggle("active");
  homeControler.children[1].classList.toggle("active");
  showCv = !showCv;
}

// setInterval(toggelHome, 3000);
