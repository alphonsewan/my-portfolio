//Light/Dark Mode Switch Button//
//Light/Dark Mode Switch Button//
//Light/Dark Mode Switch Button//
const toggle = document.querySelector('button.theme')

const switchTheme = () => {
  const isDark = toggle.matches("[aria-pressed=true]") ? false : true;
  toggle.setAttribute("aria-pressed", isDark);
  document.documentElement.className = isDark ? 'light' : 'dark'
}

const handleToggle = () => {
  if (!document.startViewTransition) {
    console.info('Hey! Try this out in Chrome 111+')
    switchTheme()
  }
  document.startViewTransition(switchTheme)
};

toggle.addEventListener('click', handleToggle)


//Typing Effect//
//Typing Effect//
//Typing Effect//
/*
,"A UI/UX designer with experience and a passion for exploring designs and motion effects"
 * typingEffect()
 * It types an array of texts in a random order. I like random stuff🙃
 */
function typingEffect() {
  const contactTexts = shuffleArray(["设计不嗨，不如钓🐟","我虽皮，但正事上绝对不皮🐒"]);
  const herop = document.getElementsByClassName("hero-p")[0];
  let removing = false;
  let idx = char = 0;

  setInterval(() => { // We define the interval of the typing speed

      // If we do not reach the limit, we insert characters in the html
      if (char < contactTexts[idx].length) herop.innerHTML += contactTexts[idx][char];

      // 15*150ms = time before starting to remove characters
      if (char == contactTexts[idx].length + 50) removing = true;

      // Removing characters, the last one always
      if (removing) herop.innerHTML = herop.innerHTML.substring(0, herop.innerHTML.length - 1);

      char++; // Next character

      // When there is nothing else to remove
      if (herop.innerHTML.length === 0) {

          // If we get to the end of the texts we start over
          if (idx === contactTexts.length - 1) idx = 0
          else idx++;

          char = 0; // Start the next text by the first character
          removing = false; // No more removing characters
      }

  }, 80); // Typing speed, 150 ms

}
typingEffect();
function shuffleArray(array) {
  let currentIndex = array.length,
      temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}





const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let index = 0;
let itemsPerView = 3; // 默认每次显示三个项目

function updateCarousel() {
    const itemWidth = 100 / itemsPerView;
    carouselWrapper.style.transform = `translateX(-${index * itemWidth}%)`;
}

function updateButtons() {
    prevButton.disabled = index === 0;
    nextButton.disabled = index >= totalItems - itemsPerView;
}

nextButton.addEventListener('click', () => {
    if (index < totalItems - itemsPerView) {
        index++;
        updateCarousel();
        updateButtons();
    }
});

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
        updateButtons();
    }
});

// Handle resize to adjust itemsPerView
window.addEventListener('resize', () => {
    itemsPerView = window.innerWidth <= 768 ? 1 : 3; // 在手机上每次显示一个项目
    updateCarousel();
    updateButtons();
});
