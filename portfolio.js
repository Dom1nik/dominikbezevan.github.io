var img = document.getElementById("ninja");
var init = true;

makeNinjaDissapear = async function () {
  if (this.style.opacity == "") {
    this.style.opacity = 1;
  }

  this.removeEventListener("mouseenter", makeNinjaDissapear);
  this.removeEventListener("touchstart", makeNinjaDissapear);

  if (!init) {
    while (this.style.opacity > 0) {
      this.style.opacity = this.style.opacity - 0.1;
      await sleep(300);
    }
    await sleep(500);
  } else {
    this.style.opacity = 0;
    await sleep(1000);
  }

  init = init != true;

  while (this.style.opacity < 1) {
    this.style.opacity = Number(this.style.opacity) + 0.1;
    await sleep(150);
  }

  img.addEventListener("mouseenter", makeNinjaDissapear, false);
  img.addEventListener("touchstart", makeNinjaDissapear, false);
};

img.addEventListener("load", makeNinjaDissapear, false);

img.addEventListener("mouseenter", makeNinjaDissapear, false);
img.addEventListener("touchstart", makeNinjaDissapear, false);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
