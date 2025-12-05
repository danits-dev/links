function ToggleMode() {
  const html = document.documentElement
  const isDark = html.classList.contains("light")

  if (isDark) {
    html.classList.remove("light")
    localStorage.setItem("theme", "dark")
  } else {
    html.classList.add("light")
    localStorage.setItem("theme", "light")
  }
}

function initializeTheme() {
  const html = document.documentElement
  const savedTheme = localStorage.getItem("theme")
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  if (savedTheme === "light") {
    html.classList.add("light")
  } else if (savedTheme === "dark") {
    html.classList.remove("light")
  } else if (prefersDark) {
    html.classList.remove("light")
  } else {
    html.classList.remove("light")
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeTheme)
} else {
  initializeTheme()
}
