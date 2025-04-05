/** ============================================================================================================= */
/** NOTE 明暗模式切换
/** ============================================================================================================= */

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

/** ============================================================================================================= */
/** NOTE 明暗模式切换
/** ============================================================================================================= */






/** ============================================================================================================= */
/** NOTE 明暗模式 & 语言切换 & 滚轮 FadeIN & OUT
/** ============================================================================================================= */

let lastScrollTop = 0;
const backspaceButton = document.querySelector(".backspace");
const themeButton = document.querySelector(".theme");
const scroller = document.querySelector(".scroller");

// 将按钮设置为可见
backspaceButton.classList.remove("hidden");
themeButton.classList.remove("hidden");
scroller.classList.remove("scroller--fade");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // 向下滚动，隐藏按钮
    backspaceButton.classList.add("hidden"); 
    themeButton.classList.add("hidden"); // 添加隐藏类
    scroller.classList.add("scroller--fade");
  } else {
    // 向上滚动，显示按钮
    backspaceButton.classList.remove("hidden")
    themeButton.classList.remove("hidden"); // 移除隐藏类
    scroller.classList.remove("scroller--fade");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 对于移动设备或负滚动
});

/** ============================================================================================================= */
/** NOTE 明暗模式 & 语言切换 滚轮 FadeIN & OUT
/** ============================================================================================================= */








/** ============================================================================================================= */
/** NOTE 滚轮
/** ============================================================================================================= */

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


/** ============================================================================================================= */
/** NOTE 滚轮
/** ============================================================================================================= */









/** ============================================================================================================= */
/** NOTE 语言切换
/** ============================================================================================================= */

/*!!!!!!!暂时停止使用
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
*/

/*Language Switch Button 语言切换
document.querySelector(".language").addEventListener("click", function () {
  const currentLanguage = document.documentElement.lang;

  // 输出当前语言进行调试
  console.log("Current Language:", currentLanguage);

  // 根据当前语言重定向到相应的页面
  if (currentLanguage === "cn") {
    window.location.href = "projecten.html"; // 重定向到英文版
  } else if (currentLanguage === "en") {
    window.location.href = "projectcn.html"; // 重定向到中文版
  } else {
    console.error("Language not recognized or missing.");
  }
});
*/

/** ============================================================================================================= */
/** NOTE 语言切换
/** ============================================================================================================= */