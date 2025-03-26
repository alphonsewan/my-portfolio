const root = document.documentElement;
const dur = 0.4;
const bkgColors = ["#4FED10", "#ED10DB", "#EAED10", "#1183EE"];
let timer = parseFloat(dur) * 1000 * 2;

function changeColors() {
  let col = 1;
  setInterval(() => {
    root.style.setProperty("--bkg-color", bkgColors[col]);
    col++;
    if (col === bkgColors.length) {
      col = 0;
    }
  }, timer);
}

changeColors();

/*
Monkey Head
-------------------------------------*/
gsap.set("#main", {
  y: -50,
  x: -20,
  rotate: -15,
  scaleY: 1,
  transformOrigin: "50% 100%"
});

const main_tl = gsap.timeline({
  repeat: -1,
  yoyo: true
});

main_tl
  .to("#main", dur, {
    x: 0,
    y: 30,
    rotate: 0,
    ease: "sine.in",
    scaleY: 0.9
  })
  .to("#main", dur, {
    x: 20,
    y: -50,
    rotate: 15,
    ease: "sine.out",
    scale: 1
  });

/*
Headphones
-------------------------------------*/
gsap.set("#headphones", {
  transformOrigin: "50% 50%"
});

gsap.to("#headphones", dur, {
  y: 30,
  scale: 0.95,
  ease: "sine.in",
  repeat: -1,
  yoyo: true
});

/*
Headphone Speakers
-------------------------------------*/
gsap.to(".speaker", dur / 2, {
  scaleY: 1.1,
  transformOrigin: "50% 50%",
  repeat: -1,
  yoyo: true
});

/*
Headphone Sparks
-------------------------------------*/
gsap.set("#sparks", { x: 50, y: 260, transformOrigin: "50% 50%" });

gsap.set("#sparks-left", { x: 30, scaleY: 1, opacity: 1 });
gsap.to("#sparks-left", (dur*2), { x: -20, scaleY: 1.3, opacity: 0.2, repeat: -1 });

gsap.set("#sparks-right", { x: -30, scaleY: 1, opacity: 1 });
gsap.to("#sparks-right", (dur*2), { x: 20, scaleY: 1.3, opacity: 0.2, repeat: -1 });

/*
Monkey Face
-------------------------------------*/
gsap.set("#monkey_face", {
  y: -10,
  scale: 1
});

gsap.to("#monkey_face", dur, {
  y: 20,
  ease: "sine.in",
  scale: 0.93,
  repeat: -1,
  yoyo: true,
  delay: 0.05
});

/*
Monkey Hair
-------------------------------------*/
gsap.set("#monkey_head-hair", {
  transformOrigin: "50% 100%",
  rotate: -20,
  scaleY: 1
});

gsap.to("#monkey_head-hair", dur, {
  rotate: 20,
  scaleY: 0.3,
  ease: "sine.in",
  repeat: -1,
  yoyo: true
});

/*
Spotlight
-------------------------------------*/
gsap.to(".spotlight", dur, {
  scale: 2,
  ease: "sine.in",
  repeat: -1,
  yoyo: true
});
