const PERSON_ANIMATION = [
  "animate-in",
  "fade-in",
  "slide-in-from-bottom",
  "duration-500",
];

document.addEventListener("DOMContentLoaded", () => {
  const staggerDelay = 80;
  setTimeout(() => {
    document.querySelectorAll(".person").forEach((person, index) => {
      setTimeout(() => {
        person.classList.remove("opacity-0");
        person.classList.add(...PERSON_ANIMATION);

        setTimeout(() => {
          person.classList.remove("duration-500");
        }, 500);
      }, staggerDelay * index);
    });
  }, 500);
});
