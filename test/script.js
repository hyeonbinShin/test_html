function showSection(id, btn) {
    document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
    document.querySelectorAll("nav button").forEach(b => b.classList.remove("active"));

    document.getElementById(id).classList.add("active");
    btn.classList.add("active");
}

document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
