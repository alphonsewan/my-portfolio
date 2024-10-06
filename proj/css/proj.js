//Light/Dark Mode Switch Button 明暗模式切换//
const toggle = document.querySelector("button.theme");

const switchTheme = () => {
  const isDark = toggle.matches("[aria-pressed=true]") ? false : true;
  toggle.setAttribute("aria-pressed", isDark);
  document.documentElement.className = isDark ? "light" : "dark";
};

const handleToggle = () => {
  if (!document.startViewTransition) {
    console.info("Hey! Try this out in Chrome 111+");
    switchTheme();
  }
  document.startViewTransition(switchTheme);
};

toggle.addEventListener("click", handleToggle);
// ***End Light/Dark Mode Switch Button 明暗模式切换//


//明暗模式按钮的渐入渐出//
let lastScrollTop = 0;
const themeButton = document.querySelector(".theme");

// 将按钮设置为可见
themeButton.classList.remove("hidden");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // 向下滚动，隐藏按钮
    themeButton.classList.add("hidden"); // 添加隐藏类
  } else {
    // 向上滚动，显示按钮
    themeButton.classList.remove("hidden"); // 移除隐藏类
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 对于移动设备或负滚动
});
// ***End 明暗模式按钮的渐入渐出//


//Scroller 滚轮//
let lastScrollY = 0; // 记录上一次的滚动位置

function updateScrollerRotation() {
  const scroller = document.querySelector(".scroller");
  const currentScrollY = window.scrollY;

  // 计算旋转角度
  const rotation = currentScrollY - lastScrollY; // 计算与上次的差值

  // 更新旋转
  if (rotation !== 0) {
    scroller.style.transform = `rotate(${
      (parseFloat(
        scroller.style.transform.replace("rotate(", "").replace("deg)", "")
      ) || 0) + rotation
    }deg)`;
  }

  lastScrollY = currentScrollY; // 更新上一次的滚动位置
}

// 监听滚动和触摸移动事件
document.addEventListener("scroll", updateScrollerRotation);
document.addEventListener("touchmove", updateScrollerRotation);
// ***End Scroller 滚轮//




document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('nav li');

  // 在这里添加滚动或其他事件监听器
  window.addEventListener('scroll', () => {
    let expandedValue = 0;

    // 根据滚动位置或其他条件更新 expandedValue
    if (window.scrollY > 100) { // 例如：当滚动超过100px时
      expandedValue = 1; // 或其他你想设置的值
    }

    // 更新 CSS 变量
    document.documentElement.style.setProperty('--expanded', expandedValue);
  });
});