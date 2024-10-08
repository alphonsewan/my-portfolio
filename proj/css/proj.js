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



//Navbar//
const navbar = document.getElementById('centernav');
const navOffsetTop = navbar.offsetTop;

const navLinks = document.querySelectorAll('.nav-menu ul li a');
const sections = document.querySelectorAll('section');

function initNavbar() {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= navOffsetTop) {
        navbar.classList.add('expanding');
        navbar.classList.remove('shrinking');
    } else {
        navbar.classList.remove('expanding');
        navbar.classList.add('shrinking');
    }
}

// 使用 Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        const link = document.querySelector(`a[href="#${entry.target.id}"]`);
        if (entry.isIntersecting) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// 页面加载时初始化
window.addEventListener('load', initNavbar);

// 滚动事件节流
let isThrottled = false;

window.addEventListener('scroll', () => {
    if (!isThrottled) {
        initNavbar();
        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;
        }, 200);
    }
});

//***End Navbar//