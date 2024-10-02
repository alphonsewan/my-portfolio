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



//语言切换toggle button//
document.querySelector('.language').addEventListener('click', function () {
  const currentLanguage = document.documentElement.lang;

  // 根据当前语言重定向到相应的页面
  if (currentLanguage === 'en') {
    window.location.href = 'index.html'; // 重定向到中文版
  } else {
    window.location.href = 'index-en.html'; // 重定向到英文版
  }
});

//TEST//
let lastScrollTop = 0;
const languageButton = document.querySelector('.language');
const themeButton = document.querySelector('.theme');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // 向下滚动，隐藏按钮
        languageButton.style.transform = 'translateY(100%)'; // 向下移出视口
        themeButton.style.transform = 'translateY(100%)'; // 向下移出视口
    } else {
        // 向上滚动，显示按钮
        languageButton.style.transform = 'translateY(0)'; // 回到原位置
        themeButton.style.transform = 'translateY(0)'; // 回到原位置
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 对于移动设备或负滚动
});




















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
let lastScrollY = 0; // 记录上一次的滚动位置

function updateScrollerRotation() {
    const scroller = document.querySelector('.scroller');
    const currentScrollY = window.scrollY;

    // 计算旋转角度
    const rotation = currentScrollY - lastScrollY; // 计算与上次的差值

    // 更新旋转
    if (rotation !== 0) {
        scroller.style.transform = `rotate(${(parseFloat(scroller.style.transform.replace('rotate(', '').replace('deg)', '')) || 0) + rotation}deg)`;
    }

    lastScrollY = currentScrollY; // 更新上一次的滚动位置
}

// 监听滚动和触摸移动事件
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

    if (viewportWidth <= 768) { // 手机屏幕
      scrollTo = portfolioSection.offsetTop; // 滚动到顶部
    } else { // 桌面屏幕
      scrollTo = portfolioSection.offsetTop; // 同样滚动到顶部
    }
    
    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });

    /*用于滚动到居中的位置
    if (viewportWidth <= 768) { // 根据屏幕宽度判断（这里假设 768px 以下为手机屏幕）
      scrollTo = portfolioSection.offsetTop; // 滚动到顶部
    } else {
      const sectionTop = portfolioSection.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = portfolioSection.offsetHeight;
      const viewportHeight = window.innerHeight;
      scrollTo = sectionTop + (sectionHeight - viewportHeight) / 2; // 居中
    }*/
    
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

//About Me Section - Intro part// //About Me Section - Intro part// //About Me Section - Intro part//
document.addEventListener("DOMContentLoaded", function() {
  // 获取所有的链接
  const links = document.querySelectorAll('#sidebar .progress-bar li a');

  // 遍历每个链接并添加点击事件监听器
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      if (this.getAttribute('href').startsWith('http')) {
        return;
      }
      event.preventDefault(); // 阻止默认的锚点跳转行为

      // 获取目标 section 的 id
      const targetId = this.getAttribute('href').substring(1); // 去掉 # 符号
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        let scrollPosition = 0;


        // 根据目标 section 的 id 确定滚动的位置
        if (targetId === 'hero') {
          // 对于 hero section，滚动到页面顶部
          scrollPosition = targetElement.offsetTop - (document.documentElement.scrollTop || document.body.scrollTop);
        } else if (targetId === 'portfolio') {
          scrollPosition = targetElement.offsetTop;
        }  

        /* 对于 portfolio section，滚动到视口中心
          scrollPosition = targetElement.offsetTop - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);
        }*/

        
        // 滚动到目标位置
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});


 //暂时停用 这个是用在以后如果有机会intro section越写越多时候定位锚点用///
 /*document.addEventListener('DOMContentLoaded', function() {
  // 获取所有的链接
  const links = document.querySelectorAll('#sidebar .progress-bar a');

  // 为每个链接添加点击事件
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // 防止默认行为

      // 获取目标元素
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // 计算目标位置，确保标题对齐到 Sidebar 的顶部
      const sidebar = document.querySelector('#sidebar');
      const introSection = document.querySelector('.intro');
      const introOffset = introSection.offsetTop;
      const targetOffset = targetElement.offsetTop;
      const sidebarHeight = sidebar.offsetHeight;

      // 滚动到目标位置
      window.scrollTo({
        top: introOffset + targetOffset - sidebarHeight, // 计算滚动位置
        behavior: 'smooth' // 平滑滚动
      });
    });
  });
});                           */


//Skill Bar//
$(window).scroll(function() {
  var hT = $('#skill-bar-wrapper').offset().top,
      hH = $('#skill-bar-wrapper').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-1.4*wH)){
      jQuery(document).ready(function(){
          jQuery('.skillbar-container').each(function(){
              jQuery(this).find('.skills').animate({
                  width:jQuery(this).attr('data-percent')
              }, 5000); // 5 seconds
          });
      });
  }
});




//TEST//