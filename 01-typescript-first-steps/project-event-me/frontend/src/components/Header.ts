import { Theme as ThemeIcon } from "./Icons.js";

type ThemeOption = "dark" | "light";

const themeToggleId = "theme";

const Header = `
<header>
    <hgroup>
        <h1 class=".parkinsans">event me</h1>
        <p>All the events you never knew you needed to attend!</p>
    </hgroup>
    <a href="#" role="toggle" id="${themeToggleId}"  title="Toggle color scheme" >
        ${ThemeIcon} 
    </a>
</header>
`;

const toggleDarkMode = () => {
  const doc = document.documentElement;
  const currentTheme = doc.getAttribute("data-theme");
  let newTheme: ThemeOption;
  if (currentTheme === "dark") {
    newTheme = "light";
    doc.setAttribute("data-theme", newTheme);
  }
  if (currentTheme === "light") {
    newTheme = "dark";
    doc.setAttribute("data-theme", newTheme);
  }
};
export function setupThemeToggle() {
  const themeToggle = document.getElementById(themeToggleId);
  if (!themeToggle) return;
  themeToggle.addEventListener("click", toggleDarkMode);
}

export default Header;
