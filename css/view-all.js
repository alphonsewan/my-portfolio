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



//语言切换toggle button////语言切换toggle button////语言切换toggle button//
document.querySelector('.language').addEventListener('click', function () {
  const currentLanguage = document.documentElement.lang;

  // 根据当前语言重定向到相应的页面
  if (currentLanguage === 'en') {
    window.location.href = 'index.html'; // 重定向到中文版
  } else {
    window.location.href = 'index-en.html'; // 重定向到英文版
  }
});


//明暗模式以及语言切换按钮的渐入渐出////明暗模式以及语言切换按钮的渐入渐出////明暗模式以及语言切换按钮的渐入渐出//
let lastScrollTop = 0;
const languageButton = document.querySelector('.language');
const themeButton = document.querySelector('.theme');

// 将按钮设置为可见
languageButton.classList.remove('hidden');
themeButton.classList.remove('hidden');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // 向下滚动，隐藏按钮
        languageButton.classList.add('hidden'); // 添加隐藏类
        themeButton.classList.add('hidden'); // 添加隐藏类
    } else {
        // 向上滚动，显示按钮
        languageButton.classList.remove('hidden'); // 移除隐藏类
        themeButton.classList.remove('hidden'); // 移除隐藏类
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 对于移动设备或负滚动
});





