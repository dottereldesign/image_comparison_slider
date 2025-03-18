const sliderBefore = document.querySelector(".slider-before");
const sliderAfter = document.querySelector(".slider-after");
const sliderHandle = document.querySelector(".slider-handle");
const sliderContainer = document.querySelector(".slider-container");

let isDragging = false;

const updateSlider = (e) => {
  let rect = sliderContainer.getBoundingClientRect();
  let offsetX = e.clientX - rect.left;
  let percentage = (offsetX / rect.width) * 100;

  if (percentage < 0) percentage = 0;
  if (percentage > 100) percentage = 100;

  sliderBefore.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  sliderAfter.style.clipPath = `inset(0 0 0 ${percentage}%)`;
  sliderHandle.style.left = percentage + "%";
};

sliderHandle.addEventListener("mousedown", () => {
  isDragging = true;
  document.body.style.cursor = "ew-resize";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  document.body.style.cursor = "default";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) updateSlider(e);
});

sliderContainer.addEventListener("touchstart", () => {
  isDragging = true;
});

document.addEventListener("touchend", () => {
  isDragging = false;
});

document.addEventListener("touchmove", (e) => {
  if (isDragging) updateSlider(e.touches[0]);
});
