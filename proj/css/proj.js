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




// Navbar
const navbar = document.getElementById('centernav');
const navOffsetTop = document.getElementById('designproc').offsetTop - 380; // 提前展开导航栏
const navLinks = document.querySelectorAll('.nav-menu ul li a');
const subsections = document.querySelectorAll('.subsection');

// 初始化导航栏状态
function initNavbar() {
    const scrollPosition = window.scrollY;

    // 判断是否滚动到设计过程的部分
    if (scrollPosition >= navOffsetTop) {
        navbar.classList.add('expanding');
        navbar.classList.remove('shrinking');
    } else {
        navbar.classList.remove('expanding');
        navbar.classList.add('shrinking');
    }
}

// 修改观察选项，确保提前触发高亮
const observerOptions = {
    root: null,
    rootMargin: '-150px 0px -150px 0px',  // 提前高亮，避免多个部分一起高亮
    threshold: 0.01  // 减小阈值，尽早触发高亮
};

// 高亮当前可见的部分
const observerCallback = (entries) => {
    entries.forEach(entry => {
        const link = document.querySelector(`a[href="#${entry.target.id}"]`);
        if (entry.isIntersecting) {
            // 清除其他部分的高亮状态
            navLinks.forEach(link => link.classList.remove('active'));
            // 高亮当前部分
            link.classList.add('active');
        }
    });
};

// 创建 Intersection Observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// 观察每个子部分
subsections.forEach(subsection => {
    observer.observe(subsection);
});

// 页面加载时初始化导航栏状态
window.addEventListener('load', initNavbar);

// 节流滚动事件，减少性能开销
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

// 平滑滚动到目标位置，点击导航栏时偏移一定距离
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault(); // 防止默认行为
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // 获取导航栏高度以便调整目标位置
      const navbarHeight = navbar.offsetHeight;

      // 计算目标位置并偏移导航栏高度
      const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 50;

      // 平滑滚动到目标位置
      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth' // 平滑滚动效果
      });
  });
});


