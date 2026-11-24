// *** ACCORDEON ***

const accordeon = document.querySelector(".accordeon");
const summaries = accordeon.querySelectorAll("summary");

summaries.forEach((summary) => {
  summary.addEventListener("click", () => {
    accordeon.querySelectorAll("details").forEach((det) => (det.open = false));
  });
});