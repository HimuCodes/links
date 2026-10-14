// The directory works without JavaScript. These are its two small enhancements.
const clock = document.querySelector("#local-time");
const indiaTime = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});
let clockTimer;

function updateClock() {
  const now = new Date();
  clock.textContent = indiaTime.format(now);
  clock.dateTime = now.toISOString();
  clock.hidden = false;
  clockTimer = window.setTimeout(updateClock, 60000 - (Date.now() % 60000));
}

updateClock();
document.addEventListener("visibilitychange", () => {
  window.clearTimeout(clockTimer);
  if (!document.hidden) updateClock();
});

const brand = document.querySelector(".brand");
const dot = brand.querySelector(".brand-dot");
const pointerMotion = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
let settled = false;

function settleDot() {
  dot.style.removeProperty("--dot-x");
  dot.style.removeProperty("--dot-y");
}

brand.addEventListener("pointermove", (event) => {
  if (!pointerMotion.matches || settled || event.pointerType === "touch") return;
  const bounds = dot.getBoundingClientRect();
  const currentX = parseFloat(dot.style.getPropertyValue("--dot-x")) || 0;
  const currentY = parseFloat(dot.style.getPropertyValue("--dot-y")) || 0;
  const dx = bounds.left + bounds.width / 2 - currentX - event.clientX;
  const dy = bounds.top + bounds.height / 2 - currentY - event.clientY;
  const distance = Math.hypot(dx, dy);
  const drift = Math.max(0, 1 - distance / 40) * 3.5;
  const denominator = distance || 1;
  dot.style.setProperty("--dot-x", `${(dx / denominator * drift).toFixed(2)}px`);
  dot.style.setProperty("--dot-y", `${(dy / denominator * drift).toFixed(2)}px`);
});

function resetDot() {
  settled = false;
  brand.removeAttribute("data-settled");
  settleDot();
}

brand.addEventListener("pointerleave", resetDot);
brand.addEventListener("click", () => {
  settled = true;
  brand.setAttribute("data-settled", "");
  settleDot();
});
brand.addEventListener("blur", resetDot);
pointerMotion.addEventListener("change", resetDot);
