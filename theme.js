(function () {
  var storageKey = "python-materials-theme";
  var root = document.documentElement;
  var choices = document.querySelectorAll("[data-theme-choice]");
  var status = document.getElementById("theme-status");
  var savedTheme = "system";

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
    choices.forEach(function (choice) {
      choice.setAttribute("aria-pressed", String(choice.dataset.themeChoice === theme));
    });
  }

  try {
    savedTheme = localStorage.getItem(storageKey) || "system";
  } catch (error) {
    if (status) {
      status.textContent = "Nastavenie sa nedá načítať z úložiska tohto prehliadača.";
    }
  }
  applyTheme(savedTheme);

  choices.forEach(function (choice) {
    choice.addEventListener("click", function () {
      var theme = choice.dataset.themeChoice;
      applyTheme(theme);
      try {
        localStorage.setItem(storageKey, theme);
        if (status) {
          status.textContent = theme === "system"
            ? "Vzhľad sa prispôsobuje nastaveniu zariadenia."
            : "Nastavenie vzhľadu bolo uložené.";
        }
      } catch (error) {
        if (status) {
          status.textContent = "Vzhľad je zmenený, ale prehliadač ho nedokáže uložiť.";
        }
      }
    });
  });

  window.addEventListener("storage", function (event) {
    if (event.key === storageKey) {
      applyTheme(event.newValue || "system");
    }
  });
})();
