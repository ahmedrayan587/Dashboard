let sidebarActive = document.querySelectorAll("#sidebar ul a li span");
let title = document.querySelector("title");
window.onload = () => {
    sidebarActive.forEach(child => {
        if (child.textContent.trim().toLowerCase() == title.textContent.trim().toLowerCase()) {
            child.parentElement.classList.add('active');
        }
        else {
            child.parentElement.classList.remove('active');
        }
    });
    document.querySelectorAll("span").forEach(child => {
        if (child.textContent == ''){
            child.remove();
        }
    })
};