//Light/Dark Mode Switch Button////Light/Dark Mode Switch Button////Light/Dark Mode Switch Button//
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


//Typing Effect////Typing Effect////Typing Effect//
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



// 项目数据（保留项目 1、2、3、4、5）
const cards = [
  { image: '/img/GBCS Group.png', title: 'GBCS Group', description: 'GBCS Group 官方网站' },
  { image: '/img/GBCS Group.png', title: 'GBCS Group', description: 'GBCS Group 官方网站' },
  { image: '/img/GBCS Group.png', title: 'GBCS Group', description: 'GBCS Group 官方网站' },
  { image: '/img/GBCS Group.png', title: 'GBCS Group', description: 'GBCS Group 官方网站' },
  { image: '/img/GBCS Group.png', title: 'GBCS Group', description: 'GBCS Group 官方网站' }
];

const carouselWrapper = document.querySelector('.carousel-wrapper');
const dots = document.querySelectorAll('.pagination .dot');

// 动态添加所有项目卡片
function createCardElement(card) {
  const cardElement = document.createElement('div');
  cardElement.className = 'carousel-card';
  cardElement.innerHTML = `
      <div class="card-content">
          <div class="card-text">
              <h2>${card.title}</h2>
              <p>${card.description}</p>
              <a href="#" class="view-more">View More</a>
          </div>
          <div class="card-image">
              <img src="${card.image}" alt="Project Image">
          </div>
      </div>
  `;
  return cardElement;
}

// 清空现有卡片并添加新卡片
carouselWrapper.innerHTML = '';
cards.forEach(card => {
  carouselWrapper.appendChild(createCardElement(card));
});

let currentIndex = 0;
const cardCount = carouselWrapper.children.length;

// 更新轮播图
function updateCarousel() {
  carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  
  // 更新分页点
  dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
  });
}

// 切换到下一个项目
document.querySelector('.next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cardCount;
  updateCarousel();
});

// 切换到上一个项目
document.querySelector('.prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cardCount) % cardCount;
  updateCarousel();
});

// 自动切换项目
function autoSlide() {
  currentIndex = (currentIndex + 1) % cardCount;
  updateCarousel();
}

// 初始化
updateCarousel();
setInterval(autoSlide, 100000); // Adjusted to 20 seconds






document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');

  // 创建 Intersection Observer 实例
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // 如果需要可以移除，允许再次触发动画
      }
    });
  }, {
    threshold: 0.1 // 元素至少有10%进入视口时触发
  });

  // 观察 .carousel 元素
  observer.observe(carousel);
});