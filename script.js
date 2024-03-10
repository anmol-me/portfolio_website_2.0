const iconButton = document.querySelector(".icon");

iconButton.addEventListener("click", toggleMode);

function toggleMode() {
  // Toggles theme mode
  document.body.classList.toggle("dark-mode");

  // Toggles icon
  if (document.body.classList.contains("dark-mode")) {
    iconButton.src = "assets/icons/light_mode.svg";
  } else {
    iconButton.src = "assets/icons/dark_mode.svg";
  }
}

function updateCopyrightYear() {
  const year = new Date().getFullYear();
  const yearElement = document.getElementById("year");
  yearElement.textContent = `© ${year}`;
}

updateCopyrightYear();
