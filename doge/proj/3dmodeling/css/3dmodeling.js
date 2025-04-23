/** ============================================================================================================= */
/** NOTE 明暗模式切换
/** ============================================================================================================= */

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

/** ============================================================================================================= */
/** NOTE 明暗模式切换
/** ============================================================================================================= */







/** ============================================================================================================= */
/** NOTE 明暗模式 & 语言切换 FadeIN & OUT
/** ============================================================================================================= */

let lastScrollTop = 0;
const backspaceButton = document.querySelector(".backspace");
const themeButton = document.querySelector(".theme");

// 将按钮设置为可见
backspaceButton.classList.remove("hidden");
themeButton.classList.remove("hidden");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // 向下滚动，隐藏按钮
    backspaceButton.classList.add("hidden"); 
    themeButton.classList.add("hidden"); // 添加隐藏类
  } else {
    // 向上滚动，显示按钮
    backspaceButton.classList.remove("hidden")
    themeButton.classList.remove("hidden"); // 移除隐藏类
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 对于移动设备或负滚动
});

/** ============================================================================================================= */
/** NOTE 明暗模式 & 语言切换 FadeIN & OUT
/** ============================================================================================================= */








/** ============================================================================================================= */
/** NOTE Scroller 滚轮
/** ============================================================================================================= */
/*
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
*/
/** ============================================================================================================= */
/** NOTE Scroller 滚轮
/** ============================================================================================================= */









/** ============================================================================================================= */
/** NOTE Navbar
/** ============================================================================================================= */

const navbar = document.getElementById('centernav');
const navOffsetTop = document.getElementById('designproj').offsetTop - 250; // 提前50px
const navLinks = document.querySelectorAll('.nav-menu ul li a');
const subsections = document.querySelectorAll('.subsection');


// 判断是否为 iPad Mini 横屏
function isIpadMiniLandscape() {
  return window.innerWidth === 1024 && window.innerHeight === 768;
}

// 初始化导航栏状态
function initNavbar() {
    const scrollPosition = window.scrollY;

     // 如果是 iPad Mini 横屏，动态调整触发点
    let adjustedOffsetTop = navOffsetTop;
    if (isIpadMiniLandscape()) {
        adjustedOffsetTop = document.getElementById('designproj').offsetTop - 20; // 提前150px
    }

    // 判断是否滚动到设计过程的部分
    if (scrollPosition >= navOffsetTop) {
        navbar.classList.add('expanding');
        navbar.classList.remove('shrinking');
    } else {
        navbar.classList.remove('expanding');
        navbar.classList.add('shrinking');
    }
}

// 观察每个子部分，确保滚动时高亮相应的导航链接
const observerOptions = {
    root: null,
    rootMargin: '-50px',
    threshold: 0.1 // 调整阈值，减少需要滚动的比例
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

// 创建 Intersection Observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

subsections.forEach(subsection => {
    observer.observe(subsection);
});

// 页面加载时初始化
window.addEventListener('load', initNavbar);

// 滚动事件节流，减少性能开销
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

// 平滑滚动到目标位置
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault(); // 防止默认行为
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      // 计算目标位置，并向上偏移100px
      const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 100;

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth' // 平滑滚动
      });
  });
});

/** ============================================================================================================= */
/** NOTE Navbar
/** ============================================================================================================= */

