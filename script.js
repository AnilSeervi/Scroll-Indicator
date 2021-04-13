window.addEventListener("scroll", function () {
  let wintop = window.scrollY;
  let docheight = document.documentElement.scrollHeight;
  let winheight = window.innerHeight;
  let scrolled = (wintop / (docheight - winheight)) * 100;
  document.querySelector(".scroll-line").style.width = `${scrolled}%`;
});
