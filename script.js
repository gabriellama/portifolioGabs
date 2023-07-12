const btn = document.getElementById('btn')

btn.addEventListener('change', (e) => {
    localStorage.setItem("dark", e.target.checked);
    document.body.classList.toggle("dark", e.target.checked);
})

// const darkmode = localStorage.getItem("dark");
// btn.checked = darkmode
    // document.body.classList.toggle("dark", darkmode);
