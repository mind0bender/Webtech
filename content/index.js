const nav = document.querySelector("nav");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closesidebar");
const openBtn = document.getElementById("hamburger");
const goToTop = document.getElementById("gototop");
const sideCover = document.getElementById("sidecover");

const openSidebar = () => {
  sidebar.classList.remove("-right-1/2");
  sidebar.classList.add("right-0");
  sidebar.style.minWidth =
    window.innerWidth > 80 ? "80px" : window.innerWidth + "px";
  sideCover.classList.remove("hidden");
  sideCover.classList.add("block");
};

const closeSidebar = () => {
  sidebar.classList.remove("right-0");
  sidebar.classList.add("-right-1/2");
  sidebar.style.minWidth = 0;
  sideCover.classList.add("hidden");
  sideCover.classList.remove("block");
};

closeBtn.onclick = (e) => {
  closeSidebar();
};

openBtn.onclick = (e) => {
  openSidebar();
};

goToTop.onclick = (e) => {
  scrollTo(0, 0);
};

sideCover.onclick = (e) => {
  closeSidebar();
};

window.onscroll = () => {
  nav.style.paddingLeft = !window.scrollY ? "3rem" : "1.5rem";
  nav.style.paddingRight = !window.scrollY ? "3rem" : "1.5rem";
  nav.style.paddingTop = !window.scrollY ? "1.5rem" : "1rem";
  nav.style.paddingBottom = !window.scrollY ? "1.5rem" : "1rem";
  if (window.scrollY > window.innerHeight - 40) {
    goToTop.classList.remove("-bottom-40");
    goToTop.classList.add("bottom-10");
  } else {
    goToTop.classList.add("-bottom-40");
    goToTop.classList.remove("bottom-10");
  }
};
