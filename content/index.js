const nav = document.querySelector("nav");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closesidebar");
const openBtn = document.getElementById("hamburger");

nav.style.paddingLeft = !window.scrollY ? "3rem" : "1.5rem";
nav.style.paddingRight = !window.scrollY ? "3rem" : "1.5rem";
nav.style.paddingTop = !window.scrollY ? "1.5rem" : "1rem";
nav.style.paddingBottom = !window.scrollY ? "1.5rem" : "1rem";

const openSidebar = () => {
  sidebar.classList.remove("-right-1/2");
  sidebar.classList.add("right-0");
  sidebar.style.minWidth =
    window.innerWidth > 80 ? "80px" : window.innerWidth + "px";
};

const closeSidebar = () => {
  sidebar.classList.remove("right-0");
  sidebar.classList.add("-right-1/2");
  sidebar.style.minWidth = 0;
};

closeBtn.onclick = (e) => {
  closeSidebar();
};

openBtn.onclick = (e) => {
  openSidebar();
};

window.onscroll = () => {
  nav.style.paddingLeft = !window.scrollY ? "3rem" : "1.5rem";
  nav.style.paddingRight = !window.scrollY ? "3rem" : "1.5rem";
  nav.style.paddingTop = !window.scrollY ? "1.5rem" : "1rem";
  nav.style.paddingBottom = !window.scrollY ? "1.5rem" : "1rem";
};
