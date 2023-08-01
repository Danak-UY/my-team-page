const PERSON_ANIMATION = "animate-in fade-in slide-in-from-bottom";

document.addEventListener("DOMContentLoaded", () => {
  const staggerDelay = 80;
  setTimeout(() => {
    document.querySelectorAll(".person").forEach((person, index) => {
      setTimeout(() => {
        person.classList.remove("opacity-0");
        person.classList.add("animate-in");
        person.classList.add("fade-in");
        person.classList.add("slide-in-from-bottom");
        person.classList.add("duration-500");

        setTimeout(() => {
          person.classList.remove("duration-500");
        }, 500);
      }, staggerDelay * index);
    });
  }, 500);
});
