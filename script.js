// observer start
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));
// observer end
const bodyColor = document.body;

const theme = document.querySelector(".theme");
theme.addEventListener("click", function () {
  if (bodyColor.classList.contains("dark-theme")) {
    bodyColor.classList.remove("dark-theme");
  } else {
    bodyColor.classList.add("dark-theme");
  }
});

//cards selection and color change

// const colorArr = ["#e39600", "#8f4b25", "#8e8681", "#3e4174"];
// const cards = document.querySelectorAll(".card").forEach((element, index) => {
//   element.style.backgroundColor = colorArr[index];
// });

const firstCard = document.querySelector(".card");
firstCard.classList.add("bouncy");

// scroll button
const scrollBtn = document.querySelector(".scrollButton");
window.onscroll = () => {
  scrollToTop();
};
function scrollToTop() {
  document.body.scrollTop > 150 || document.documentElement.scrollTop > 150
    ? (scrollBtn.style.display = "block")
    : (scrollBtn.style.display = "none");
}

// second page card hover changes

const cards = document.querySelectorAll(".card");
const secondPageClass = document.querySelector(".second");
const links = [
  "https://mustafadede.github.io/udemy-js-course-guess-my-number/",
  "https://mustafadede.github.io/Increment-Game/",
  "https://mustafadede.github.io/interactive-rating-component/",
  "https://mustafadede.github.io/pig-game/",
];
document.querySelectorAll(".card").forEach((card, index) => {
  card.style.backgroundImage = `url("./images/${index + 1}.gif")`;
  card.setAttribute("href", links[index]);
  card.addEventListener("mouseover", function () {
    if (secondPageClass.classList.contains("second-page-bg")) {
      secondPageClass.classList.remove("second-page-bg");
    } else {
      secondPageClass.style.backgroundImage = `url("./images/${
        index + 1
      }.gif")`;
      secondPageClass.classList.add("second-page-bg");
    }
  });

  card.addEventListener("mouseout", function () {
    if (secondPageClass.classList.contains("second-page-bg")) {
      secondPageClass.classList.remove("second-page-bg");
    }
  });
});
