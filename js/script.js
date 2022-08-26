const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);
function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 70 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 70 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    console.innerText = "0";

    const updateCounter = () => {
      // Get Count Target
      const target = +counter.getAttribute("data-target");

      // Get current counter avlue
      const c = +counter.innerText;

      // Create an increment

      const increment = target / 100;

      // If counter is < target then, add increment

      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = "0"));
}
