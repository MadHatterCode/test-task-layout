const heroSliderBtn = document.querySelector(".hero-btn-next");
const sliderImages = document.querySelectorAll(".hero-image");
const progressItems = document.querySelectorAll(".progress-item");
//Dropdown selectors
const dropdownList = document.querySelector(".dropdown-list");
const dropdownLink = document.querySelector(".link");

let currentSlide = 1;

heroSliderBtn.addEventListener("click", () => {
  showNextSlideAndProgress(currentSlide);
});

setInterval(() => {
  showNextSlideAndProgress(currentSlide);
}, 7000);

function removeActiveClasses(arr, activeClass) {
  arr.forEach((item) => {
    if (item.classList.contains(activeClass)) {
      item.classList.remove(activeClass);
    }
  });
}

function showNextSlideAndProgress(n) {
  removeActiveClasses(sliderImages, "show");
  removeActiveClasses(progressItems, "active");

  if (n > sliderImages.length) {
    currentSlide = 1;
  }
  sliderImages[currentSlide - 1].classList.add("show");
  progressItems[currentSlide - 1].classList.add("active");
  currentSlide++;
}

//Dropdown
dropdownLink.addEventListener("click", (e) => {
  showList();
  e.preventDefault();
});

function showList() {
  if (dropdownList.classList.contains("dropdown-hide")) {
    dropdownList.classList.remove("dropdown-hide");
    dropdownList.classList.add("dropdown-show");
  } else {
    dropdownList.classList.add("dropdown-hide");
  }
}
