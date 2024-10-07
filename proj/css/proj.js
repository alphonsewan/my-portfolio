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



//Navbar 缩放效果//
const navbar = document.getElementById('centernav');
const navOffsetTop = navbar.offsetTop; // 获取导航栏的初始位置

// 初始化函数
function initNavbar() {
    const scrollPosition = window.scrollY;
    // 判断是否已经滚动到导航栏位置
    if (scrollPosition >= navOffsetTop) {
        navbar.classList.add('expanding'); // 如果已经触顶，则展开
        navbar.classList.remove('shrinking');
    } else {
        navbar.classList.remove('expanding'); // 否则保持收缩状态
        navbar.classList.add('shrinking');
    }
}

// 页面加载时初始化
window.addEventListener('load', initNavbar);

// 监听滚动事件
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // 当滚动到导航栏位置时触发
    if (scrollPosition >= navOffsetTop) {
        navbar.classList.add('expanding'); // 触发展开动画
        navbar.classList.remove('shrinking');
    } else {
        navbar.classList.remove('expanding'); // 未滚动到位置时收缩
        navbar.classList.add('shrinking');
    }
});
//***End Navbar 缩放效果//






// 获取所有的导航链接和相应的 section
const navLinks = document.querySelectorAll('.nav-menu ul li a');
const sections = document.querySelectorAll('section');

// 监听滚动事件
window.addEventListener('scroll', highlightSectionOnScroll);

// 页面加载时初始化
window.addEventListener('load', highlightSectionOnScroll);

function highlightSectionOnScroll() {
    let currentSection = '';

    // 遍历每个 section，找到当前视口中可见的 section
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        // 如果 section 的顶部距离视口小于一定值（比如100px），且大于负的section高度，视为当前 section
        if (sectionTop <= 100 && sectionTop >= -section.offsetHeight / 2) {
            currentSection = section.getAttribute('id');
        }
    });

    // 更新导航链接的样式，移除所有链接的高亮状态
    navLinks.forEach(link => {
        link.classList.remove('active'); // 先移除所有链接的高亮状态

        // 如果 currentSection 存在，并且该链接指向当前 section，则高亮
        if (currentSection && link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active'); // 给当前 section 对应的链接添加高亮
        }
    });
}




