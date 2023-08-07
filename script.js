const btn = document.getElementById("btn");
const darkmode = localStorage.getItem("dark");
if (darkmode !== 'true') {
    btn.checked = false;
    document.body.classList.remove("dark");
} else {
    btn.checked = true;
    document.body.classList.add("dark");
}

btn.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
  localStorage.setItem("dark", e.target.checked);
});
