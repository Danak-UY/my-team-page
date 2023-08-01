const $switchButton = document.querySelector("#switch-button");
const $switchToggle = document.querySelector("#switch-toggle");

const THEME_KEY = "theme";

const localTheme = localStorage.getItem(THEME_KEY);
const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const CLASSES = {
  DARK: ["bg-gray-dark", "text-white", "-translate-x-2", "rotate-180"],
  LIGHT: ["bg-white", "text-gray-dark", "translate-x-full"],
};

let isDarkMode =
  localTheme === THEME.DARK || (!localTheme !== THEME.LIGHT && prefersDarkMode);

const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`;

const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`;

function toggleTheme() {
  isDarkMode = !isDarkMode;
  switchTheme();
}

function changeIcon(svg) {
  setTimeout(() => {
    $switchToggle.innerHTML = svg;
  }, 250);
}

function switchTheme() {
  if (isDarkMode) {
    // Dark Mode
    localStorage.setItem(THEME_KEY, THEME.DARK);
    document.documentElement.classList.add(THEME.DARK);
    changeIcon(darkIcon);

    $switchToggle.classList.remove(...CLASSES.DARK);
    $switchToggle.classList.add(...CLASSES.LIGHT);
    $switchButton.classList.add("bg-neutral-600");
    $switchButton.setAttribute("aria-checked", "true");
  } else {
    // Light Mode
    localStorage.setItem(THEME_KEY, THEME.LIGHT);
    document.documentElement.classList.remove(THEME.DARK);
    changeIcon(lightIcon);

    $switchToggle.classList.add(...CLASSES.DARK);
    $switchToggle.classList.remove(...CLASSES.LIGHT);
    $switchButton.classList.remove("bg-neutral-600");
    $switchButton.setAttribute("aria-checked", "false");
  }
}

switchTheme();

document.addEventListener("DOMContentLoaded", () => {
  $switchButton.addEventListener("click", toggleTheme);
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 300);
});
