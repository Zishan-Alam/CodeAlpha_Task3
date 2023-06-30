const data = document.querySelector("textarea");
const nameInput = document.getElementById("fileName");
const type = document.getElementById("saveAs");
const btn = document.getElementById("btn");

// Apply dark theme to the dropdown
type.classList.add("dark-theme");

btn.addEventListener("click", () => {
    const blob = new Blob([data.value], { type: type.value });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = nameInput.value;
    link.href = url;
    link.click();
});
