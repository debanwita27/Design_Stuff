const html = document.documentElement;
const canvas = document.getElementById("scrollAnimation");
const ctx = canvas.getContext("2d");
const text = document.getElementById("text");
text.style.marginLeft = Math.ceil(html.clientWidth / 2 - 50) + "px";
console.log(Math.ceil(html.clientWidth / 2));
canvas.width = 1158;
canvas.height = 770;

const frameCount = 147;
const currentFrame = (index) => {
  return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    .toString()
    .padStart(4, "0")}.jpg`;
};

const img = new Image();
img.src = currentFrame(1); //initial frame
img.onload = () => {
  ctx.drawImage(img, 0, 0);
};

const updateImage = (index) => {
  img.src = currentFrame(index);
  ctx.drawImage(img, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;

  //max that user can scroll inside current window
  const maxScrollPossible = html.scrollHeight - window.innerHeight;

  const scrollFraction = scrollTop / maxScrollPossible;
  console.log(scrollTop, maxScrollPossible, scrollFraction);
  // when hits half way then opacity is 1 otherwise opacity moves towards 0
  text.style.opacity =
    scrollFraction > 0.5 ? 1 - scrollFraction : scrollFraction * 2;

  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

preloadImages();
