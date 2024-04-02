const iconButton = document.querySelector(".icon");
const body = document.body;
let isDarkMode = localStorage.getItem("isDarkMode") === "true";

iconButton.addEventListener("click", toggleMode);

function toggleMode() {
  // Add & remove transition effect to background
  // Avoids theme animation on page refresh
  body.style.transition = "background-color 0.5s ease";
  setTimeout(function () {
    body.style.transition = "";
  }, 600);

  // Toggle theme mode
  body.classList.toggle("dark-mode");
  isDarkMode = !isDarkMode;

  // Toggle icon
  if (isDarkMode) {
    iconButton.src = "assets/icons/light_mode.svg";
  } else {
    iconButton.src = "assets/icons/dark_mode.svg";
  }

  localStorage.setItem("isDarkMode", isDarkMode);
}

// Load theme settings on page refresh
if (isDarkMode) {
  body.classList.add("dark-mode");
  iconButton.src = "assets/icons/light_mode.svg";
}

function updateCopyrightYear() {
  const year = new Date().getFullYear();
  const yearElement = document.getElementById("year");
  yearElement.textContent = `© ${year}`;
}

const setArticleDate = () => {
  const headerDate = document.querySelector(".header-date");
  const dateString = headerDate.dataset.date;
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  headerDate.textContent = formattedDate;
};

updateCopyrightYear();
setArticleDate();
