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


//Scroller////Scroller////Scroller//
function updateScrollerRotation() {
  const scroller = document.querySelector('.scroller');
  const rotation = window.scrollY % 360;
  scroller.style.transform = `rotate(${rotation}deg)`;
}

document.addEventListener('scroll', updateScrollerRotation);
document.addEventListener('touchmove', updateScrollerRotation);


//指定跳转到合适的位置//
  // 获取按钮元素
  document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault(); // 防止默认行为
    
    // 获取 portfolio 区域
    const portfolioSection = document.getElementById('portfolio');
    
    // 获取视口宽度
    const viewportWidth = window.innerWidth;

    // 计算滚动到目标位置
    let scrollTo;

    if (viewportWidth <= 768) { // 根据屏幕宽度判断（这里假设 768px 以下为手机屏幕）
      scrollTo = portfolioSection.offsetTop; // 滚动到顶部
    } else {
      const sectionTop = portfolioSection.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = portfolioSection.offsetHeight;
      const viewportHeight = window.innerHeight;
      scrollTo = sectionTop + (sectionHeight - viewportHeight) / 2; // 居中
    }
    
    // 平滑滚动到目标位置
    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });
  });


//About me Section////About me Section////About me Section//
  document.addEventListener('DOMContentLoaded', function() {
    const aboutMeSection = document.querySelector('.about-me-section');
    const triggerOffset = 200; // Adjust this value to control when the effect triggers

    function checkVisibility() {
      const sectionTop = aboutMeSection.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (sectionTop < viewportHeight - triggerOffset && sectionTop + aboutMeSection.offsetHeight > 0) {
        aboutMeSection.classList.add('active');
      } else {
        aboutMeSection.classList.remove('active');
      }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
  });